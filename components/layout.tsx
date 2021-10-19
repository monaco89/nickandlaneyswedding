import React from 'react';
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
    </>
  );
}

export default Layout;
