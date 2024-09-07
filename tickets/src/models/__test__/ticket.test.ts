import { Ticket } from "../ticket";

it("implements optimistic concurrency control", async () => {
  const ticket = await Ticket.build({
    title: "Test ticket",
    price: 10,
    userId: "valid user",
  }).save();
  //expect(ticket.version).toEqual(0);

  const firstFetch = await Ticket.findById(ticket.id);

  const secondFetch = await Ticket.findById(ticket.id);

  firstFetch!.set({ price: 20 });
  secondFetch!.set({ price: 15 });

  await firstFetch!.save();
  try {
    await secondFetch!.save();
  } catch (err) {
    return;
  }

  throw new Error("Test failed: optimistic concurrency control should have failed");
});

it('increments the version number on multiple saves', async () => {
    const ticket = await Ticket.build({
        title: "Test ticket",
        price: 10,
        userId: "valid user",
      });
      
      const updatedTicket = await ticket.save();
      console.log(updatedTicket);
      expect(updatedTicket.version).toEqual(0);

      ticket.set({price:15});
      await ticket.save();
      expect(ticket.version).toEqual(1);

      ticket.set({price:17});
      await ticket.save();
      expect(ticket.version).toEqual(2);

});