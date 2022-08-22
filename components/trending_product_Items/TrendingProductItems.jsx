/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import Link from 'next/link';
import Button from '../button/Button';
import { Store } from '../../utils/Store';
import { toast } from 'react-toastify';
const TrendingProductItems = ({ product }) => {
  const { state, dispatch } = useContext(Store);
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (product.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity: quantity },
    });
  };
  return (
    <div className="card group overflow-hidden w-80 md:w-full mx-auto">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow object-cover w-full h-80 group-hover:scale-105 transition-transform duration-200 ease-in-out"
          />
        </a>
      </Link>
      <div className="flex flex-col ">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg font-serif tracking-wide font-medium mt-3">
              {product.name}
            </h2>
          </a>
        </Link>
        <p className="mb-2 text-sm">{product.brand}</p>
        <p className="text-sm">
          <span className="font-serif">Tk. {product.price}</span>
        </p>
        <Button type="button" handler={addToCartHandler} text="Add to cart" />
      </div>
    </div>
  );
};

export default TrendingProductItems;
