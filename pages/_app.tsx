import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

const isProduction = process.env.NODE_ENV === 'production';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default App;
