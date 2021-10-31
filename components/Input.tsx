import React from 'react';

type InputProps = {
  label: string;
  [x: string]: any;
};

function Input({ label, id, ...rest }: InputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="text-3xl">
        {label}
      </label>
      <br />
      <input
        className="p-3 w-3/5 bg-transparent border border-black rounded-none"
        id={id}
        {...rest}
      />
    </div>
  );
}

export default Input;
