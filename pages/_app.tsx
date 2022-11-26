import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Test site</title>
        <meta name="test-site" content="test-site" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
