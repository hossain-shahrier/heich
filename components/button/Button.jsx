import React from 'react';

const Button = ({ type, text, handler }) => {
  return (
    <button
      className="bg-gray-300 mt-3 p-2 w-full text-gray-700 font-medium rounded text-sm hover:bg-gray-300 hover:text-black active:bg-gray-400"
      type={type}
      onClick={handler}
    >
      {text}
    </button>
  );
};

export default Button;
