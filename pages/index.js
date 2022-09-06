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
import Slider from '../components/slider/Slider';
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
    // router.push('/cart');
  };
  return (
    <Layout title="Home page">
      <div className="my-4">
        {/* <Slider /> */}
        <h1 className="text-xl font-serif mb-3">Latest Trends</h1>
        <div className="mx-auto grid grid-cols-2 gap-14 md:grid-cols-3 lg:grid-cols-5">
          {products
            .filter((product, index) => product.type === 'trends' && index < 5)
            .map((product) => (
              <ProductItems
                key={product._id}
                product={product}
                addToCartHandler={addToCartHandler}
              />
            ))}
        </div>
      </div>
    </Layout>
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
