import ProductCard from './productcard';

function ProductList({ products }) {
  return (
    <div>
      <h2>Product List</h2>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;