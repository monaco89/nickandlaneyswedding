import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { HOME_OG_IMAGE_URL } from '../lib/constants';

function Meta({ ...customMeta }): JSX.Element {
  const router = useRouter();
  const meta = {
    title: customMeta.title
      ? `${customMeta.title} | Nick & Laney's Wedding`
      : "Nick & Laney's Wedding",
    description: `Nick and Laney's Wedding. August 18th 2023. View our story, our proposal, the registry and the event surrounding the wedding.`,
    image: HOME_OG_IMAGE_URL,
    type: 'website',
    ...customMeta,
  };

  return (
    <Head>
      <link href="https://use.typekit.net/raz1yzb.css" rel="stylesheet" />
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
        color="#f8f5ec"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta
        property="og:url"
        content={`https://nickandlaney.com${router.asPath}`}
      />
      <link rel="canonical" href={`https://nickandlaney.com${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Nick and Laney" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nickmonaco" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <meta name="theme-color" content="#f8f5ec" />
    </Head>
  );
}

export default Meta;
