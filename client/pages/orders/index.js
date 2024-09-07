const OrderIndex = ({ orders }) => {
    debugger;
  return (
    <div>
      <h1>List Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            {order.ticket.title} -{order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get('/api/orders');
  return { orders: data.orders };
};

export default OrderIndex;
