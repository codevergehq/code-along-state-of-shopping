import { products } from '../data/products';
import ProductCard from './ProductCard';
import { useCartActions } from '../store/cartStore';

function ProductList() {
  const { addToCart } = useCartActions();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
        />
      ))}
    </div>
  );
}

export default ProductList;