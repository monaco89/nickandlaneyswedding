import React from 'react';

type InputProps = {
  label: string;
  [x: string]: any;
};

function Input({ label, id, ...rest }: InputProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block my-3 text-gray-800 text-2xl font-semibold"
      >
        {label}
      </label>
      <input
        className="px-4 py-2 w-full text-lg bg-gray-100 rounded-lg focus:outline-none"
        id={id}
        {...rest}
      />
    </div>
  );
}

export default Input;
