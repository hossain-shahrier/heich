/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Link from 'next/link';

const TrendingProductItems = ({ product }) => {

  return (
    <div className="overflow-hidden md:w-full">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-72 hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </a>
      </Link>
      <div className="flex flex-col ">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-xl font-serif tracking-wider mt-2">
              {product.name}
            </h2>
          </a>
        </Link>
        {/* <p className="text-xs uppercase">{product.brand}</p> */}
        <p className="text-xs">Heich</p>
        <p className="text-xs">
          <span>Tk. {product.price}</span>
        </p>
        {/* <Button
          type="button"
          handler={() => addToCartHandler(product)}
          text="Add to cart"
        /> */}
      </div>
    </div>
  );
};

export default TrendingProductItems;
