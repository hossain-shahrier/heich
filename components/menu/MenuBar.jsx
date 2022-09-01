import Link from 'next/link';
import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
const MenuBar = ({ clicked }) => {
  return (
    <div className="fixed menu overflow-y-auto shadow-[0_35px_70px_-15px_rgba(0,0,0,0.3)] left-0 top-0 z-50 bg-gray-200 h-full min-h-full w-80">
      <span className="absolute cursor-pointer right-3 top-5" onClick={clicked}>
        <AiOutlineCloseCircle size={20} />
      </span>
      <ul className="flex flex-col justify-evenly items-center w-full mx-auto h-full m-4 cursor-pointer">
        <li className="hover:text-gray-700">Women</li>
        <li className="hover:text-gray-700">Men</li>
        <li className="hover:text-gray-700">Unisex</li>
        <li className="hover:text-gray-700">Kids</li>
        <li className="hover:text-gray-700">Baby</li>
        <li className="hover:text-gray-700">Accessories</li>
        <li className="flex gap-2">
          <span className="text-xs text-gray-500">
            <Link href="/services">
              <a>Customer service</a>
            </Link>
          </span>
          <span className="text-xs text-gray-500">
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
