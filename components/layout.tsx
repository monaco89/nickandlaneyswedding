import React from 'react';
import Meta from './meta';
import Header from './header';
import PageTransition from './Animations/PageTransition';

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
        <PageTransition>{children}</PageTransition>
      </div>
    </>
  );
}

export default Layout;
