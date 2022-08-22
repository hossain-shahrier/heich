import Layout from '../components/Layout';
import ProductItems from '../components/trending_product_Items/TrendingProductItems';
import data from '../utils/data';
export default function Home() {
  return (
    <div className="">
      <Layout title="Home page">
        <h1 className="text-2xl font-serif mb-3">Latest Trends</h1>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {data.products.map(
            (product) =>
              product.type === 'trends' && (
                <ProductItems key={product.id} product={product} />
              )
          )}
        </div>
      </Layout>
    </div>
  );
}
