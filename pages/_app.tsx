import { Rubik } from '@next/font/google'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const rubik = Rubik({subsets: ['latin'], display: 'swap'})

const App = ({ Component, pageProps }: AppProps) => {
  console.log(process.env.REACT_APP_FIREBASE_CONFIG);
  return (
    <>
      <Head>
        <title>vyvos-musora-minsk.by</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/svg"></link>
      </Head>
      <main className={rubik.className}>
        <Component {...pageProps} />
      </main>
    </>
    
    )
}

export default App