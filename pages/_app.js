import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Brickgraph Limited</title>
        <meta
          name="description"
          content="Connectivity and insights for ambitious real estate companies"
        />
        <meta name="viewport" content="initial-scale=1 width=device-width" />
        <link rel="icon" href="/logos/bg-favicon-removebg.png" />
      </Head>
  <Component {...pageProps} />
  </>)
}
