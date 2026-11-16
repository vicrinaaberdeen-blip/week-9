
import { useState, useEffect } from 'react';
import ProductCard from './productcard';

function ProductList({ products, addToWishlist, removeFromWishlist, wishlist }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [failedImages, setFailedImages] = useState([]);

  const productsPerPage = 12;

  const handleImageError = (productId) => {
    setFailedImages((previous) =>
      previous.includes(productId)
        ? previous
        : [...previous, productId]
    );
  };

  // Remove products whose images failed to load
  const visibleProducts = products.filter(
    (product) => !failedImages.includes(product.id)
  );

  const totalPages = Math.ceil(
    visibleProducts.length / productsPerPage
  );

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = visibleProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // Return to page one when search results or categories change
  useEffect(() => {
    setCurrentPage(1);
    setFailedImages([]);
  }, [products]);

  // Keep the current page valid if images fail
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  return (
    <section className="product-section">
      <h2>Products</h2>

      <div className="product-list">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToWishlist={addToWishlist}
            removeFromWishlist={removeFromWishlist}
            isInWishlist={wishlist.some((item)=>item.id===product.id)}
            onImageError={handleImageError}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((page) => page - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((page) => page + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductList;


