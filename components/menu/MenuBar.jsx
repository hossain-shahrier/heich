import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
const MenuBar = ({ clicked }) => {
  return (
    <div className="absolute shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] translate-y-3 right-[-20px] top-0 z-50 bg-gray-200 h-screen min-h-screen w-80">
      <span className="absolute left-2 top-2" onClick={clicked}>
        <AiOutlineCloseCircle size={26} />
      </span>
      <ul className="flex flex-col justify-center items-center mx-auto h-full gap-10 cursor-pointer">
        <li className="hover:text-gray-700">Women</li>
        <li className="hover:text-gray-700">Men</li>
        <li className="hover:text-gray-700">Unisex</li>
        <li className="hover:text-gray-700">Kids</li>
        <li className="hover:text-gray-700">Baby</li>
        <li className="hover:text-gray-700">Accessories</li>
      </ul>
    </div>
  );
};

export default MenuBar;
