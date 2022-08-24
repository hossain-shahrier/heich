/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useContext } from 'react';
import Layout from '../components/Layout';
import ProductItems from '../components/trending_product_Items/TrendingProductItems';
import Product from '../models/Product';
import db from '../utils/db';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { Store } from '../utils/Store';
export default function Home({ products }) {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  // Add to cart
  const addToCartHandler = async (product) => {
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
    <div className="">
      <Layout title="Home page">
        <h1 className="text-2xl font-serif mb-3">Latest Trends</h1>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {products.map(
            (product) =>
              product.type === 'trends' && (
                <ProductItems
                  key={product.id}
                  product={product}
                  addToCartHandler={addToCartHandler}
                />
              )
          )}
        </div>
      </Layout>
    </div>
  );
}
export async function getServerSideProps(context) {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
