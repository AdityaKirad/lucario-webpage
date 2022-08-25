import * as React from 'react'
import Router from 'next/router';
import nProgress from 'nprogress';
import { SessionProvider } from 'next-auth/react';
import "../styles/nprogress.css"
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  React.useEffect(() => {
    const handleRouteStart = () => nProgress.start();
    const handleRouteDone = () => nProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeError", handleRouteDone);
    Router.events.on("routeChangeComplete", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeError", handleRouteDone);
      Router.events.off("routeChangeComplete", handleRouteDone);
    };
  }, []);
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;