import React from 'react';

type Props = {
  date?: string;
  day?: string;
  title?: string;
  body?: any;
};

function Event({ date, title, body, day }: Props): JSX.Element {
  return (
    <div className="grid gap-0 grid-cols-6">
      <div className="col-end-2 col-start-1">
        <p className="mb-0 text-gray-400 text-10xl font-bold">{day}</p>
        <p className="text-gray-400 text-10xl font-bold leading-3">{date}</p>
      </div>
      <div className="col-span-3 col-end-7">
        {title && (
          <h4 className="mb-3 font-custom text-7xl md:text-2xl">{title}</h4>
        )}
        <div className="text-black-300 w-4/6 text-opacity-100 text-lg leading-snug">
          {body}
        </div>
      </div>
    </div>
  );
}

export default Event;
