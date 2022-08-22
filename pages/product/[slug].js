import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/button/Button';
import NotFound from '../../components/not_found/NotFound';
const Product = () => {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <NotFound error="Products not found!" />;
  }
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">
          <a className="bg-gray-200 p-2 border rounded-md text-sm text-gray-600">
            Back to products
          </a>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 md:gap-6 lg:grid-cols-5 lg:gap7">
        <div className="md:col-span-2 my-5 ">
          <Image
            src={product.image}
            alt={product.name}
            width={340}
            height={340}
            className="object-cover"
            layout="responsive"
          />
        </div>
        <div className="md:col-span-2 my-5 lg:my-0">
          <ul>
            <li>
              <h1 className="text-5xl font-serif tracking-wide font-medium mt-3">
                {product.name}
              </h1>
            </li>
            <li>
              <span className="mb-2 text-sm">Category:</span>
              <span className="italic text-sm font-medium">
                {' '}
                {product.category}
              </span>
            </li>
            <li>
              <span className="mb-2 text-sm">Brand:</span>
              <span className="italic text-sm font-medium">
                {' '}
                {product.brand}
              </span>
            </li>
            <li>
              <span className="mb-2 text-sm">{product.rating} of</span>
              <span className="text-sm font-medium"> {product.numReviews}</span>
            </li>
            <li>
              <span className="mb-2 text-sm">Description:</span>
              <span className="italic text-sm font-medium">
                {' '}
                {product.description}
              </span>
            </li>
          </ul>
        </div>
        <div>
          <div className="border rounded-md shadow-sm p-5 my-5 lg:my-0">
            <div className="mb-2 flex justify-between">
              <span className="text-md">Price</span>
              <div>
                <p className="text-sm">
                  <span className="font-serif">Tk. {product.price}</span>
                </p>
              </div>
            </div>
            <div className="mb-2 flex justify-between">
              <span className="text-md">Status</span>
              <div>
                <span className="font-serif">
                  {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
            <div className="w-full">
              <Button type="button" text="Add to cart" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
