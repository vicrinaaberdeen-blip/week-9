
import WishlistCard from './wishlistcard';

function WishlistSection({ wishlist, removeFromWishlist, togglePurchased }) {
  return (
    <section id="wishlist" className="wishlist-section">

      <h2>My Beauty Wishlist</h2>

      <p className="wishlist-subtitle">
        Your personal collection of beauty favourites.
      </p>

      {wishlist.length === 0 ? (
        <p className="empty-wishlist">
          Your wishlist is empty. Add some beauty favourites!
        </p>
      ) : (
        <div className="wishlist-list">
          {wishlist.map((product) => (
            <WishlistCard
              key={product.id}
              product={product}
              removeFromWishlist={removeFromWishlist}
              togglePurchased={togglePurchased}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default WishlistSection;
