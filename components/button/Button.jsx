import React from 'react';

const Button = ({ type, text, handler, disabled }) => {
  return (
    <button
      className={`${
        disabled
          ? 'disabled: bg-gray-300 mt-3 p-2 w-full text-gray-500 font-medium rounded text-sm'
          : '" bg-gray-300 mt-3 p-2 w-full text-gray-700 font-medium rounded text-sm hover:text-white  hover:bg-gray-800 active:bg-gray-400"'
      }`}
      type={type}
      onClick={handler}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
