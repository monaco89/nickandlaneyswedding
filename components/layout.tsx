import React from 'react';
import Meta from './meta';
import Header from './header';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
  // All other props
  [x: string]: any;
};

function Layout({ children, ...rest }: Props): JSX.Element {
  return (
    <>
      <Meta {...rest} />
      <div className="min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
