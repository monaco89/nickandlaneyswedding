import React from 'react';

type Props = {
  date?: string;
  title?: string;
  body?: any;
  right?: boolean;
};

function StoryMessage({ date, title, body, right }: Props): JSX.Element {
  if (right) {
    return (
      <div className="right-timeline flex items-center justify-between mb-8 w-full">
        <div className="order-1 w-5/12" />
        <div className="order-1 px-1 py-4 w-5/12 text-left">
          <p className="text-black-300 mb-3 text-xl font-bold">{date}</p>
          {title && <h4 className="mb-3 text-2xl md:text-2xl">{title}</h4>}
          <p className="text-black-300 w-4/6 text-opacity-100 text-lg leading-snug">
            {body}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="left-timeline flex xs:flex-col items-center justify-between mb-8 w-full sm:flex-row-reverse md:flex-row-reverse lg:flex-row-reverse">
      <div className="order-1 w-4/12" />
      <div className="order-1 px-1 py-4 xs:w-full text-right sm:w-4/12 md:w-4/12 lg:w-4/12">
        <p className="text-black-300 mb-3 text-lg font-bold">{date}</p>
        {title && (
          <h4 className="mb-3 text-2xl md:text-2xl">
            <mark>{title}</mark>
          </h4>
        )}
        <p className="text-black-300 text-opacity-100 text-base leading-snug">
          {body}
        </p>
      </div>
    </div>
  );
}

export default StoryMessage;
