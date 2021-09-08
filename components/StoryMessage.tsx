import React from 'react';

type Props = {
  date: string;
  title: string;
  body: string;
  right?: boolean;
};

function StoryMessage({ date, title, body, right }: Props): JSX.Element {
  if (right) {
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12" />
      <div className="order-1  w-5/12 px-1 py-4 text-left">
        <p className="mb-3 text-base text-black-300">{date}</p>
        <h4 className="mb-3 font-bold text-lg md:text-2xl">{title}</h4>
        <p className="text-sm md:text-base leading-snug text-black-300 text-opacity-100">
          {body}
        </p>
      </div>
    </div>;
  }

  return (
    <div className="mb-8 flex justify-between xs:flex-col sm:flex-row-reverse md:flex-row-reverse lg:flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12" />
      <div className="order-1 lg:w-5/12 sm:w-5/12 md:w-5/12 xs:w-full px-1 py-4 text-right">
        <p className="mb-3 text-base text-black-300">{date}</p>
        <h4 className="mb-3 font-bold text-lg md:text-2xl">
          <mark>{title}</mark>
        </h4>
        <p className="text-sm md:text-base leading-snug text-black-300 text-opacity-100">
          {body}
        </p>
      </div>
    </div>
  );
}

export default StoryMessage;
