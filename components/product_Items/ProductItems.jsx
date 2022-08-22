/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
const ProductItems = ({ product }) => {
  return (
    <div className="card group overflow-hidden w-80 md:w-full mx-auto">
      <Link href={`/products/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow object-cover w-full h-80 group-hover:scale-105 transition-transform duration-200 ease-in-out"
          />
        </a>
      </Link>
      <div className="flex flex-col ">
        <Link href={`/products/${product.slug}`}>
          <a>
            <h2 className="text-lg font-serif tracking-wide font-medium mt-3">
              {product.name}
            </h2>
          </a>
        </Link>
        <p className="mb-2 text-sm">{product.brand}</p>
        <p className="text-sm">
          <span className="font-serif">Tk. {product.price}+</span>
        </p>
        <button
          className=" bg-gray-300 mt-3 p-2 text-gray-700 font-medium rounded text-sm hover:bg-gray-300 hover:text-black active:bg-gray-400"
          type="button"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItems;
