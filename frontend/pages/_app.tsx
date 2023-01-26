import "../styles/globals.css"
import Head from "next/head"

function MyApp({ Component, pageProps }: any) {
  return (
    <div>
      <Head>
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Faizan Khan</title>
      </Head>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
