import type { AppProps } from 'next/app'
import '../styles/globals.css'
import {Layout} from '../components/layout'



export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <Model/>>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
