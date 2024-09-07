import {  OrderStatus, ExpirationCompletedEvent } from "@ghopitaltickets/common";
import { natsWrapper } from "../../../nats-wrapper";
import { ExpirationCompletedListener } from "../expiration-completed-listener";
import { Ticket } from "../../../models/ticket";
import mongoose from "mongoose";
import { Order } from "../../../models/order";
import { Message } from "node-nats-streaming";

const setup = async () => {
    const listener = new ExpirationCompletedListener(natsWrapper.client);

    const ticket = Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title: "Test Ticket",
        price: 10        
    });
    
    await ticket.save();

    const order = Order.build({
        ticket,
        userId: 'a valid user Id',
        status: OrderStatus.Created,
        expiresAt: new Date()
    });
    
    await order.save();

    const data: ExpirationCompletedEvent['data'] = {
        orderId: order.id        
    };

    //@ts-ignore
    const msg: Message = {
        ack: jest.fn()
    };

    return { listener, data, msg, ticket, order };
};

it('updates the ticket status to cancelled', async () => {
    const { listener, data, msg, ticket, order } = await setup();
    await listener.onMessage(data, msg);

    const orderUdpated = await Order.findById(order.id);
    expect(orderUdpated!.status).toEqual(OrderStatus.Cancelled);

});

it('emit an OrderCancelled event', async () => {
    const { listener, data, msg, ticket, order } = await setup();
    await listener.onMessage(data, msg);

    expect(natsWrapper.client.publish).toHaveBeenCalled();

    const eventData = JSON.parse((natsWrapper.client.publish as jest.Mock).mock.calls[0][1]);
    expect(eventData.id).toEqual(order.id);
});

it('ack the message', async () => {
    const { listener, data, msg, ticket, order } = await setup();
    await listener.onMessage(data, msg);

    expect(msg.ack).toHaveBeenCalled();
});