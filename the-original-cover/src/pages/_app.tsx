import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { initGA } from '../analytics';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(()=> {
    if (router.isReady && !Object.keys(router.query).includes("untrack")) {
      initGA("UA-167830317-1");
    }
  },[router.query]);

  return <Component {...pageProps} />
}
export default MyApp
