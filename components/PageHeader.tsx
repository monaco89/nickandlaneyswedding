import React from 'react';

type Props = {
  text: string;
};

function PageHeader({ text }: Props): JSX.Element {
  return (
    <h1 className="text-center text-black font-sans xs:text-7xl font-extralight sm:text-7xl md:text-7xl lg:text-7xl">
      {text}
    </h1>
  );
}

export default PageHeader;
