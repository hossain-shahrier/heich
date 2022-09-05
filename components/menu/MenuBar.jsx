import Link from 'next/link';
import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
const MenuBar = ({ clicked }) => {
  return (
    <div className="fixed menu overflow-y-auto shadow-[0_35px_70px_-15px_rgba(0,0,0,0.3)] left-0 top-0 z-50 bg-[#f3f5f7] text-[#495b6e] text-sm h-full min-h-full w-80">
      <span className="absolute cursor-pointer right-3 top-5" onClick={clicked}>
        <AiOutlineCloseCircle size={20} />
      </span>
      <ul className="flex flex-col justify-evenly items-center w-full mx-auto h-full m-4 cursor-pointer">
        <li className="hover:text-[#080a0c]">Women</li>
        <li className="hover:text-[#080a0c]">Men</li>
        <li className="hover:text-[#080a0c]">Unisex</li>
        <li className="hover:text-[#080a0c]">Kids</li>
        <li className="hover:text-[#080a0c]">Baby</li>
        <li className="hover:text-[#080a0c]">Accessories</li>
        <li className="flex gap-2">
          <span className="text-xs text-gray-400 hover:text-[#080a0c]">
            <Link href="/services">
              <a>Customer service</a>
            </Link>
          </span>
          <span className="text-xs text-gray-400 hover:text-[#080a0c]">
            <Link href="/new">
              <a>Newletter</a>
            </Link>
          </span>
        </li>
        <div className="text-xs text-gray-500">
          &#64; 2022 <span className="uppercase font-bold">karn</span>{' '}
          developers
        </div>
      </ul>
    </div>
  );
};

export default MenuBar;
