import '@/styles/globals.scss'
import '@/styles/cursor.scss'
import type { AppProps } from 'next/app';
import Loader from '@/components/Loader';
import MainLogo from '../../logo';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <Loader/>
    <Component {...pageProps} />
    </>
  )
}
