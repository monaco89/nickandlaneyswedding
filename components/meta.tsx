import React from 'react';
import Head from 'next/head';
import { HOME_OG_IMAGE_URL } from '../lib/constants';

function Meta(): JSX.Element {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content="Nick and Laney's Wedding Website" />
      <meta name="og:title" content="Nick and Laney's Wedding" />
      <meta
        name="og:description"
        content="Information about the wedding, accomodations, engagement, registry."
      />
      <meta name="og:url" content="https://www.nickandlaney.com" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
}

export default Meta;
