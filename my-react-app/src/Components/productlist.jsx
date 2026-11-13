
import ProductCard from './productcard';

function ProductList({ products, addToWishlist }) {
  return (
    <section className="product-section">
      <h2>Bestsellers</h2>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToWishlist={addToWishlist}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
