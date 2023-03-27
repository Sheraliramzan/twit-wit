import type { AppProps } from 'next/app';
import '../styles/globals.css';
import {Layout} from '../components/layout';
import { LoginModel } from '../components/models/LoginModel';



export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <Register
      <LoginModel />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
