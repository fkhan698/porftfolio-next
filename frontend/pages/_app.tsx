import "../styles/globals.css";
import Head from "next/head";
import { ApolloProvider, ApolloClient } from "@apollo/client";
import withData from "../helpers/withData";
import Client from "../helpers/apollo-client";

function MyApp({ Component, pageProps, apollo }: any) {
  console.log(apollo);
  return (
    <div>
      <Head>
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Faizan Khan</title>
      </Head>
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  );
}

MyApp.getInitialProps = async function({ Component, ctx }: any) {
  let pageProps = {} as any;
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
