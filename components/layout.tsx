import React from 'react';
// import Footer from './footer';
import Meta from './meta';
import Header from './header';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Header />
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
