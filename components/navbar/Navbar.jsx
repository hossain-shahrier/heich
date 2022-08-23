import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../../utils/Store';
const Navbar = () => {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <nav className="flex items-center h-20 justify-between px-5 shadow">
      <div className="text-lg font-black tracking-widest cursor-pointer">
        <Link href="/">HEICH</Link>
      </div>
      <div className="">
        <ul className="flex items-center gap-5 cursor-pointer">
          <li>
            <Link href="/account">
              <a>
                <h3 className="font-serif text-sm">MY ACCOUNT</h3>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a>
                <div className="relative flex">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {cartItemsCount > 0 && (
                    <span className="absolute left-3 bottom-3 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                      {cartItemsCount}
                    </span>
                  )}
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/search">
              <a>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </a>
            </Link>
          </li>
          <li>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
