import React from 'react';

export const SecondaryNav = () => {
  return (
    <nav className="hidden bg-[#f3f5f7]  text-[#495b6e] text-sm md:flex relative gap-4 items-center mx-auto justify-center h-10">
      <ul className="hidden md:flex gap-4 cursor-pointer">
        <li className=" hover:text-[#080a0c] ">Women</li>
        <li className=" hover:text-[#080a0c] ">Men</li>
        <li className=" hover:text-[#080a0c] ">Unisex</li>
        <li className=" hover:text-[#080a0c] ">Kids</li>
        <li className=" hover:text-[#080a0c] ">Baby</li>
        <li className=" hover:text-[#080a0c] ">Accessories</li>
      </ul>
    </nav>
  );
};
