import React from 'react';

const Button = ({ type, text, handler, disabled }) => {
  return (
    <button
      className={" border-black border mt-3 p-2 w-full text-xs tracking-wide font-sans hover:bg-[#495b6e] hover:text-[#f3f5f7]"}

      type={type}
      onClick={handler}
      disabled={disabled}
    >
      {text}
    </button >
  );
};

export default Button;
