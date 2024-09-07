import Router from "next/router";
import UseRequest from "../../hooks/use-request";

const TicketShow = ({ ticket }) => {
  const { doRequest, errors } = UseRequest({
    url: `/api/orders/`,
    method: "post",
    body: { ticketId: ticket.id },
    onSuccess: (order) => {
      console.log("Ticket purchased successfully", order);
      Router.push('/orders/[orderId]',`/orders/${order.id}`);
    },
  });

  const onPurchaseHandler = () => {
    doRequest();
  };

  return (
    <>
      {ticket && (
        <div>
          <h1>{ticket.title}</h1>
          <h4>{ticket.price}</h4>
          {errors}
          <button className="btn btn-primary" onClick={onPurchaseHandler}>
            Purchase
          </button>
        </div>
      )}
    </>
  );
};

TicketShow.getInitialProps = async (context, client, currentUser) => {
  const { ticketId } = context.query;
  const { data } = await client.get(`/api/tickets/${ticketId}`);
    debugger;
  return { ticket: data };
};

export default TicketShow;
