import type { AppProps } from 'next/app';
import '../styles/globals.css';
import {Layout} from '../components/layout';
import { LoginModel } from '../components/models/LoginModel';
import { RegisterModel } from '../components/models/RegisterModel';
import { Toaster } from 'react-hot-toast';
import {SessionProvider} from 'next-auth/react';


export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <SessionProvider session={pageProps.se}>
      <RegisterModel/>
      <LoginModel />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
