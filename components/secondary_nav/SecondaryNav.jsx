import React from 'react';

export const SecondaryNav = () => {
  return (
    <nav className="hidden md:flex relative gap-4 items-center mx-auto justify-center h-10">
      <ul className="hidden md:flex gap-4 cursor-pointer">
        <li className="hover:text-gray-700">Women</li>
        <li className="hover:text-gray-700">Men</li>
        <li className="hover:text-gray-700">Unisex</li>
        <li className="hover:text-gray-700">Kids</li>
        <li className="hover:text-gray-700">Baby</li>
        <li className="hover:text-gray-700">Accessories</li>
      </ul>
    </nav>
  );
};
