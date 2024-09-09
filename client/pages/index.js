import Link from "next/link";

//import buildClient from "../api/build-client";
const LandingPage = ({ currentUser, tickets }) => {
  return (
    <div>
      {currentUser ? <h1>You are sign in</h1> : <h2>Sign out</h2>}
      <h2>Tickets</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>View Ticket</th>
          </tr>
        </thead>
        <tbody>
          {tickets &&
            tickets.map((ticket, index) => (
              <tr key={ticket.id}>
                <td>{ticket.title}</td>
                <td>{ticket.price}</td>
                <td>
                  <Link
                    href={"/tickets/[ticketId]"}
                    as={`/tickets/${ticket.id}`}
                  >
                    View Ticket
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  // this is getting executed from the server side
  //const cookies = req.cookie;
  /*return buildClient(req)
    .get("/api/users/currentuser")
    .then((response) => response.data)
    .catch((error) => ({ error: error.message }));
    */
  const { data } = await client.get("/api/tickets");
  return { currentUser, tickets: data };
};

export default LandingPage;
