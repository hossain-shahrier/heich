import Layout from '../components/Layout';
import ProductItems from '../components/product_Items/ProductItems';
import data from '../utils/data';
export default function Home() {
  return (
    <div className="">
      <Layout title="Home page">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {data.products.map((product) => (
            <ProductItems key={product.id} product={product} />
          ))}
        </div>
      </Layout>
    </div>
  );
}
