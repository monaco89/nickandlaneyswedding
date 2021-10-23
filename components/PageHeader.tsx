import React from 'react';

type Props = {
  text: string;
};

function PageHeader({ text }: Props): JSX.Element {
  return (
    <h1 className="text-center text-black font-sans text-7xl font-extralight">
      {text}
    </h1>
  );
}

export default PageHeader;
