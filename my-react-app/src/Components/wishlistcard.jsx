
function WishlistCard({ product, removeFromWishlist }) {
  return (
    <div className="wishlist-card">

      <div className="wishlist-image-container">
        <img
          src={product.image_link || product.thumbnail}
          alt={product.title}
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

      <div className="wishlist-info">
        <h3>{product.title}</h3>
        <p>{product.brand}</p>

        <p className="wishlist-price">
          {product.price != null ? `$${product.price}` : "Price unavailable"}
        </p>

        <p className="wishlist-priority">
          Priority: {product.priority}
        </p>

        <button onClick={() => removeFromWishlist(product.id)}>
          Remove from Wishlist
        </button>
      </div>

    </div>
  );
}

export default WishlistCard;
