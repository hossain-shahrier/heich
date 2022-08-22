/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Button from '../button/Button';
const TrendingProductItems = ({ product }) => {
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
        <Button type="button" text="Add to cart" />
      </div>
    </div>
  );
};

export default TrendingProductItems;
