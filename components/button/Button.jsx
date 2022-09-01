import React from 'react';

const Button = ({ type, text, handler, disabled }) => {
  return (
    <button
      className={`${
        disabled
          ? 'disabled: border-black  border-2 mt-3 p-2 w-full font-semibold  text-sm'
          : '" border-black border-2 mt-3 p-2 w-full font-semibold text-sm hover:text-white  hover:bg-gray-800 active:bg-gray-400"'
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
