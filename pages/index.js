import Layout from '../components/Layout';
import Product from '../models/Product';
import db from '../utils/db';

import { Hero } from '../components/sections/hero/Hero';
import { TrendingProducts } from '../components/sections/hero/products/TrendingProducts';
export default function Home({ products }) {

  return (
    <Layout title="Home page">
      <div>
        {/* Hero Section Component */}
        <Hero />
        {/* Trending Products Section Component */}
        <TrendingProducts products={products} />
      </div>
    </Layout>
  );
}
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
