import Link from "next/link";
import react, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import useRequest from "../../hooks/use-request";
import Router from "next/router";

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const { doRequest, errors } = useRequest({
    url: "/api/payments",
    method: "post",
    body: {
      orderId: order.id,
    },
    onSuccess: (payment) => {
      console.log("Payment successful", payment);
      Router.push(`/orders`);
    },
  });

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };
    findTimeLeft(); // this is because setInterval will wait 1 seconds until it call the first time FindTimeLeft therefore we won't have the timer till then
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (!order) return <div>Loading...</div>;

  return (
    <div>
      <h1>Order Show</h1>
      <div>
        <p>Order ID: {order.id}</p>
        <p>Ticket: {order.ticket.title}</p>
        <p>Price: ${order.ticket.price}</p>
        <p>Status: {order.status}</p>
        <p>Expires At: {new Date(order.expiresAt).toLocaleString()}</p>
        <p>Time Left: {timeLeft > 0 ? `${timeLeft} seconds` : "Expired"}</p>
        <Link
          href={`/orders/[order.id]/cancel`}
          as={`/orders/${order.id}/cancel`}
        >
          Cancel Order
        </Link>
        <StripeCheckout
          token={(token) => {
            console.log(token);
            doRequest({ token: token.id });
          }}
          stripeKey="pk_test_51JWjjhDhc1HzGEDoQCiHUNOiWr1hECvQ9sNvz7sFji2me6ZVf712ApcLcWhay7PyDuwtTkJtQ2xqaEY6gmroxA7s00xQSJNrz9"
          amount={order.ticket.price * 100}
          email={currentUser.email}
        />
      </div>
      {errors && <div>{errors.message}</div>}
    </div>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);
  return { order: data };
};

export default OrderShow;
