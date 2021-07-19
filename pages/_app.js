import Head from 'next/head'

import '../styles/globals.css'

const App = ({Component, pageProps}) =>
  <div>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Collective Stock</title>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Head>
    <Component {...pageProps} />
  </ div>

export default App
