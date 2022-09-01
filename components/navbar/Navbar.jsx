import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import { HiMenuAlt4 } from 'react-icons/hi';
import { IoIosSearch } from 'react-icons/io';
import { RiShoppingBag2Line } from 'react-icons/ri';
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
        <div className="text-xl text-center uppercase font-black cursor-pointer">
          <Link href="/">
            <a>heich</a>
          </Link>
        </div>
      </div>
      <div className="">
        <ul className="flex items-center gap-3 cursor-pointer">
          <li>
            {status === 'loading' ? (
              <span className="text-xs font-serif">Loading...</span>
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
                <a className="flex items-center font-serif justify-center gap-2">
                  <h3 className="text-sm">Login</h3>
                </a>
              </Link>
            )}
          </li>
          <li className="relative">
            <Link href="/cart">
              <a>
                <div className="flex">
                  <RiShoppingBag2Line size={17} />
                  {cartItemsCount > 0 && (
                    <span className="absolute left-2 bottom-2 rounded-full bg-red-600 w-4 h-4 p-0 m-0 text-white text-xs leading-tight text-center">
                      {cartItemsCount}
                    </span>
                  )}
                </div>
              </a>
            </Link>
          </li>
          <li>
            <IoIosSearch size={20} />
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
