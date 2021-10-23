import React from 'react';
import Meta from './meta';
import Header from './header';

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
      </div>
    </>
  );
}

export default Layout;
