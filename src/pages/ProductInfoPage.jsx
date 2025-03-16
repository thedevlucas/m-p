import ProductDetail from '../components/product/ProductDetail';
import ProductSpecs from '../components/product/ProductSpecs';
import ProductDocs from '../components/product/ProductDocs';
import MoreProducts from '../components/product/MoreProducts';

function ProductInfoPage() {
  return (
    <main className="product-page">
      <ProductDetail />
      <ProductSpecs />
      <ProductDocs />
      <MoreProducts />
    </main>
  );
}

export default ProductInfoPage;