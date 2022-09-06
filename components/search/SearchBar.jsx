import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const SearchBar = ({ clicked }) => {
  return (
    <div className="absolute right-0 overflow-x-auto top-20 w-screen h-56 menu bg-[#f3f5f7] text-[#495b6e] shadow-[0_5px_100px_-40px_rgba(0,0,0,0.3)]">
      <div className="flex justify-evenly gap-28 items-center h-full">
        <div>
          <h1 className="uppercase mb-2">top search items</h1>
          <ul className="text-xs flex flex-col gap-2">
            <li>Shirt</li>
            <li>T-Shirt</li>
            <li>Pants</li>
            <li>Joggers</li>
            <li>Shoes</li>
          </ul>
        </div>
        <form className="">
          <input
            type="text"
            placeholder="Enter your search item"
            className="bg-transparent outline-none border-b-2 border-black placeholder:text-black px-1 py-3 w-[30rem]"
          />
        </form>
        <span
          className="absolute cursor-pointer right-8 top-5"
          onClick={clicked}
        >
          <AiOutlineCloseCircle size={20} />
        </span>
      </div>
    </div>
  );
};
