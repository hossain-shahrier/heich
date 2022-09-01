import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import { Store } from '../../utils/Store';
import Link from 'next/link';
import Image from 'next/image';
import NotFound from '../../components/not_found/NotFound';
import Button from '../../components/button/Button';
import { toast } from 'react-toastify';
import db from '../../utils/db';
import Product from '../../models/Product';
import axios from 'axios';

export default function ProductPage(props) {
  const { product } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  if (!product) {
    return <NotFound error="Products not found!" />;
  }
  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      return toast.error('Sorry, product is out of stock');
    }
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity: quantity },
    });
    router.push('/cart');
  };
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">
          <a className="p-3 text-sm bg-[#f3f5f7]  text-[#495b6e]">
            Back to products
          </a>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 md:gap-6 lg:grid-cols-7 lg:gap-7">
        <div className="md:col-span-2 my-5">
          <Image
            src={product.image}
            alt={product.name}
            width={340}
            height={340}
            className="object-cover"
            layout="responsive"
          />
        </div>
        <div className="md:col-span-3 my-5 lg:my-0">
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

        <div className="border w-80 max-h-40 md:col-span-1 shadow-md p-5 my-5 lg:my-0">
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
            {product.countInStock > 0 ? (
              <Button
                type="button"
                handler={addToCartHandler}
                text="Add to cart"
              />
            ) : (
              <Button
                type="button"
                handler={addToCartHandler}
                text="Out of Stock"
                disabled={true}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}
