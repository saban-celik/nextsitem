// src/pages/_app.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { colors } from '../assets/styles/colors';
import '../assets/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Google Ads scriptini yükle
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    // colors.ts'den renkleri CSS değişkenleri olarak enjekte et
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
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