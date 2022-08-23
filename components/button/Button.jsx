import React from 'react';

const Button = ({ type, text, handler }) => {
  return (
    <button
      className="bg-gray-300  mt-3 p-2 w-full text-gray-700 font-medium rounded text-sm hover:text-white hover:bg-gray-800 active:bg-gray-400"
      type={type}
      onClick={handler}
    >
      {text}
    </button>
  );
};

export default Button;
