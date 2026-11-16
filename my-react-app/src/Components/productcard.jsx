
function ProductCard({
  product,
  addToWishlist,
  removeFromWishlist,
  isInWishlist,
  onImageError
}) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image_link || product.thumbnail}
          alt={product.title}
          loading="lazy"
          onError={() => onImageError(product.id)}
        />

        <button
          className={`wishlist-heart ${isInWishlist ? "heart-active" : ""}`}
          onClick={() =>
            isInWishlist
              ? removeFromWishlist(product.id)
              : addToWishlist(product)
          }
          aria-label={
            isInWishlist ? "Remove from wishlist" : "Add to wishlist"
          }
          aria-pressed={isInWishlist}
        >
          {isInWishlist ? "♥" : "♡"}
        </button>
      </div>

      <div className="product-info">
        <h3>{product.title}</h3>

        <p className="product-price">
          {product.price != null ? `$${product.price}` : ""}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
