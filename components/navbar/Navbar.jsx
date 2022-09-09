import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import { HiMenuAlt4 } from 'react-icons/hi';
import { IoIosSearch } from 'react-icons/io';
import { RiShoppingBag2Line } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';
// import { AiOutlineCustomerService } from 'react-icons/ai';
import Cookies from 'js-cookie';
import { Menu } from '@headlessui/react';
// MenuBar
import MenuBar from '../menu/MenuBar';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { Store } from '../../utils/Store';
import DropdownLink from '../dropdown_link/DropdownLink';
import { SearchBar } from '../search/SearchBar';
const Navbar = () => {
  const ref = useRef();
  // Menu Collaspe
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Search Collaspe
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const searchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
      if (isSearchOpen && ref.current && !ref.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isMenuOpen, isSearchOpen]);

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
            <HiMenuAlt4 className="cursor-pointer" size={20} />
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
        <ul className="flex items-center gap-2 md:gap-4 cursor-pointer">
          <li>
            {status === 'loading' ? (
              <span className="text-xs">Loading...</span>
            ) : session?.user ? (
              <Menu as="div" className="relative inline-block">
                <Menu.Button className="font-bold">
                  <span className="md:text-sm text-xs">
                    {session.user.name}
                  </span>
                </Menu.Button>
                <Menu.Items className="absolute menu right-0 w-56 bg-[#f3f5f7] text-xs origin-top-right shadow-md">
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
                  <Menu.Item>
                    <a className="dropdown-link" href="/help">
                      Help
                    </a>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            ) : (
              <Link href="/login">
                <a className="flex items-center justify-center gap-1">
                  <h3 className="text-sm">Login</h3>
                  <BsPerson size={18}/>
                </a>
              </Link>
            )}
          </li>
          {/* Cart */}
          <li>
            <Link href="/cart">
              <a>
                <div className="flex items-center gap-1 ">
                  <span className="md:text-sm hidden md:flex">Cart</span>
                  <div className="relative">
                    <RiShoppingBag2Line size={17} />
                    {cartItemsCount > 0 && (
                      <span className="absolute left-2 bottom-2 rounded-full bg-red-600 w-4 h-4 p-0 m-0 text-white text-xs leading-tight text-center">
                        {cartItemsCount}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            </Link>
          </li>
          {/* Search */}
          <li>
            <div
              className="flex items-center gap-1 relative"
              onClick={searchToggle}
            >
              <span className="text-sm hidden md:flex">Search</span>
              <IoIosSearch size={18} />
            </div>
            {isSearchOpen && <SearchBar clicked={searchToggle} />}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
