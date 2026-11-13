
function WishlistSection({ wishlist, removeFromWishlist }) {
  return (
    <section id="wishlist">
      <h1>My Beauty Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty. Add some beauty favourites!</p>
      ) : (
        <div className="wishlist-list">
          {wishlist.map((product) => (
            <div key={product.id} className="wishlist-card">
              <h3>{product.title}</h3>
              <p>Brand: {product.brand}</p>
              <p>Price: ${product.price}</p>
              <p>Priority: {product.priority}</p>

              <button onClick={() => removeFromWishlist(product.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default WishlistSection;
