import React from 'react';

type Props = {
  children?: React.ReactNode;
};

function Container({ children }: Props): JSX.Element {
  return <div className="container mx-auto px-5 sm:px-0">{children}</div>;
}

export default Container;
