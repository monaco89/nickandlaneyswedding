import React from 'react';

type Props = {
  text: string;
};

function StoryMessage({ text }: Props): JSX.Element {
  return (
    <h1 className="text-center xs:text-5xl lg:text-8xl font-bold text-black my-8 font-serif">
      {text}
    </h1>
  );
}

export default StoryMessage;
