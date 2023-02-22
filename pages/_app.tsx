import { Rubik } from '@next/font/google'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const rubik = Rubik({subsets: ['latin'], display: 'swap'})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={rubik.className}>
      <Component {...pageProps} />
    </main>
    )
}

export default App