import React from 'react';

type InputProps = {
  id: string;
  label: string;
  [x: string]: any;
};

function RadioInput({ id, label, ...rest }: InputProps) {
  return (
    <div className="flex items-center mb-4">
      <input
        id={id}
        type="radio"
        //   name="fav_language"
        value={label}
        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
        aria-labelledby={id}
        aria-describedby={id}
        // checked={false}
        {...rest}
      />
      <label
        htmlFor={id}
        className="block ml-2 text-gray-900 text-sm font-medium"
      >
        {label}
      </label>
    </div>
  );
}

export default RadioInput;
