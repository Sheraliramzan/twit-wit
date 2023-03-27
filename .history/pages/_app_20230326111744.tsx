import type { AppProps } from 'next/app';
import '../styles/globals.css';
import {Layout} from '../components/layout';
import { LoginModel } from '../components/models/LoginModel';
import { RegisterModel } from '../components/models/RegisterModel';
import 


export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <RegisterModel/>
      <LoginModel />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
