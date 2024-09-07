import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";
import Header from "../components/header";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component {...pageProps} currentUser={currentUser} />
      </div>
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  // this is getting executed from the server side
  //const cookies = req.cookie;  
  let pageProps = {};
  try {
    const client = buildClient(appContext.ctx.req);
    const { data } = await client.get("/api/users/currentuser");
    if (appContext.Component.getInitialProps) {
      pageProps = await appContext.Component.getInitialProps(
        appContext.ctx,
        client,
        data.currentUser
      );
    }
    return { pageProps, ...data };
  } catch (error) {
    console.log(error);
    return { pageProps };
  }
};

export default AppComponent;
