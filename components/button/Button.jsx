import React from 'react';

const Button = ({ type, text, handler, disabled }) => {
  return (
    <button
      className={`${
        disabled
          ? 'disabled: border-black  border-2 mt-3 p-2 w-full font-semibold text-xs'
          : '" border-black border mt-3 p-2 w-full text-xs tracking-wide hover:text-white hover:bg-black active:bg-gray-400"'
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
