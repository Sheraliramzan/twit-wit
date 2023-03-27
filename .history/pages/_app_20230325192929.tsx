import type { AppProps } from 'next/app';
import '../styles/globals.css';
import {Layout} from '../components/layout';
import {Model} from '../components/Model';



export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <Model id />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
