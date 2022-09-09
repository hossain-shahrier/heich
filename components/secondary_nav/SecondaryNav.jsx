import React from 'react';

export const SecondaryNav = () => {
  return (
    <nav className="hidden bg-[#f3f5f7] text-[#495b6e] text-xs md:flex relative gap-4 uppercase items-center px-4 justify-between h-10">
      <ul className="hidden md:flex gap-5 cursor-pointer">
        <li className=" hover:text-[#080a0c] ">Women</li>
        <li className=" hover:text-[#080a0c] ">Men</li>
        <li className=" hover:text-[#080a0c] ">Unisex</li>
        <li className=" hover:text-[#080a0c] ">Kids</li>
        <li className=" hover:text-[#080a0c] ">Baby</li>
        <li className=" hover:text-[#080a0c] ">Gift</li>
        <li className=" hover:text-[#080a0c] ">Beauty</li>
        <li className=" hover:text-[#080a0c] ">Accessories</li>
      </ul>
      <ul className="hidden md:flex gap-4 cursor-pointer">
        <li className=" hover:text-[#080a0c] ">Learn</li>
        <li className=" hover:text-[#080a0c] ">Blog</li>
        <li className=" hover:text-[#080a0c] ">Connections</li>
        <li className=" hover:text-[#080a0c] ">Contact</li>
      </ul>
    </nav>
  );
};
