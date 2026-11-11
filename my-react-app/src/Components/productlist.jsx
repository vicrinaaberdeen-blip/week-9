import ProductCard from './productcard';

function ProductList({ products, addToWishlist }) {
  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToWishlist={addToWishlist}
        />
      ))}
    </div>
  );
}

export default ProductList;