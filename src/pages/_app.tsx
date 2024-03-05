// pages/_app.tsx

import React from 'react';
import { AppProps } from 'next/app';
import RootLayout from '../app/layout';
import '../styles/globals.css'; // Make sure this path is correct

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default MyApp;