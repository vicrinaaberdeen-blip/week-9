function ProductCard({ product, addToWishlist, onImageError }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image_link || product.thumbnail}
          alt={product.title}
          loading="lazy"
          onError={() => onImageError(product.id)}
        />
      </div>

      <div className="product-info">
        <h3>{product.title}</h3>

        <p className="product-price">
          {product.price != null ? `$${product.price}` : ""}
        </p>

        <button onClick={() => addToWishlist(product)}>
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

