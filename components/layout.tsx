import React from 'react';
import Alert from './alert';
import Footer from './footer';
import Meta from './meta';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert /> */}
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
