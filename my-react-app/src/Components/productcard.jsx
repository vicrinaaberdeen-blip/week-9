
function ProductCard({ product, addToWishlist }) {
  return (
    <div className="product-card">

      <div className="product-image-container">
        <img
          src={product.image_link || product.thumbnail}
          alt={product.title}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.style.display = "none";
            event.currentTarget.parentElement.classList.add("image-placeholder");
          }}
        />

        <span className="placeholder-text">
          THE BEAUTY EDIT
        </span>
      </div>

      <div className="product-info">
        <h3>{product.title}</h3>

        <p className="product-description">
          {product.description || "No description available."}
        </p>

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
