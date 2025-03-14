// src/pages/_app.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import '../assets/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Film izle - 1080p Full HD Türkçe Dublaj Film İzleme Sitesi</title>
        <link rel="icon" href="/images/title.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;