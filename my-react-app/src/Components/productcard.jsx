
function ProductCard({ product, addToWishlist }) {
  return (
    <div>
      <div className="product-image-container image-placeholder">
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
        <span className="placeholder-text">THE BEAUTY EDIT</span>
      </div>

      <h3>{product.title}</h3>
      <p>{product.description || "No description available."}</p>
      <p>${product.price}</p>

      <button onClick={() => addToWishlist(product)}>
        Add to Wishlist
      </button>
    </div>
  );
}

export default ProductCard;
