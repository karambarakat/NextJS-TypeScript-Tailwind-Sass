import type { AppProps } from 'next/app'
import '@styles/tw-global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
