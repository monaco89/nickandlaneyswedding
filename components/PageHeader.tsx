import React from 'react';

type Props = {
  text: string;
};

function StoryMessage({ text }: Props): JSX.Element {
  return (
    <h1 className="my-8 text-center text-black font-serif xs:text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
      {text}
    </h1>
  );
}

export default StoryMessage;
