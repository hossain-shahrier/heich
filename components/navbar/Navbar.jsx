import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import { HiMenuAlt4 } from 'react-icons/hi';
import { IoIosSearch } from 'react-icons/io';
// import { AiOutlineCustomerService } from 'react-icons/ai';
import Cookies from 'js-cookie';
import { Menu } from '@headlessui/react';
// MenuBar
import MenuBar from '../menu/MenuBar';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { Store } from '../../utils/Store';
import DropdownLink from '../dropdown_link/DropdownLink';
const Navbar = () => {
  const ref = useRef();
  // Menu Collaspe
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  // session
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  // Logout
  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CLEAR_CART' });
    signOut({ callbackUrl: '/login' });
  };
  return (
    <nav
      ref={ref}
      className="flex items-center justify-between h-20 px-5 shadow"
    >
      <div className="flex items-center gap-2">
        <div className="relative md:hidden">
          <span onClick={menuToggle}>
            <HiMenuAlt4 className="cursor-pointer" size={25} />
          </span>
          {isMenuOpen && <MenuBar clicked={menuToggle} />}
        </div>
        <div className="text-2xl text-center uppercase font-black cursor-pointer">
          <Link href="/">
            <a>heich</a>
          </Link>
        </div>
      </div>
      <div className="">
        <ul className="flex  items-center gap-5 cursor-pointer">
          <li>
            {status === 'loading' ? (
              'Loading...'
            ) : session?.user ? (
              <Menu as="div" className="relative inline-block">
                <Menu.Button className="text-gray-800">
                  <span className="font-serif">{session.user.name}</span>
                </Menu.Button>
                <Menu.Items className="absolute menu right-0 w-56 bg-gray-100 p-3 rounded-sm font-serif text-sm origin-top-right shadow-md">
                  <Menu.Item>
                    <DropdownLink className="dropdown-link" href="/profile">
                      Profile
                    </DropdownLink>
                  </Menu.Item>
                  <Menu.Item>
                    <DropdownLink
                      className="dropdown-link"
                      href="/order-history"
                    >
                      Order History
                    </DropdownLink>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      className="dropdown-link"
                      href="#"
                      onClick={logoutClickHandler}
                    >
                      Logout
                    </a>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            ) : (
              <Link href="/login">
                <a className="flex items-center justify-center gap-2">
                  <h3 className="">LOGIN</h3>
                </a>
              </Link>
            )}
          </li>
          <li className="relative">
            <Link href="/cart">
              <a>
                <div className="flex">
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
                    <span className="absolute left-3 bottom-3 rounded-full bg-red-600 w-4 h-4 p-0 m-0 text-white  text-sm leading-tight text-center">
                      {cartItemsCount}
                    </span>
                  )}
                </div>
              </a>
            </Link>
          </li>
          <li>
            <IoIosSearch
              size={25}
              className=" text-gray-900 bottom-1 left-[-4px] "
            />
            <div>
              <form className="flex relative items-center gap-1">
                {/* <input
                  type="text"
                  placeholder="Search products"
                  spellCheck="false"
                  autoCorrect="false"
                  autoComplete="off"
                  aria-label="Search products"
                  className="outline-none border-b-2 pl-6 text-black placeholder-black border-b-gray-700 w-44"
                /> */}
              </form>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
