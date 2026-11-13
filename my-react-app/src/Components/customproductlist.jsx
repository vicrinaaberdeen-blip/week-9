function CustomProductList({ customProducts, deleteCustomProduct, setEditingProduct }) {
  return (
    <section className="custom-product-list">
      <h2>My Beauty Collection</h2>
      <p>Your personally curated beauty products.</p>

      {customProducts.length === 0 ? (
        <p>You haven't added any products yet.</p>
      ) : (
        <div className="product-list">
          {customProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.title}</h3>
              <p>Brand: {product.brand}</p>
              <p>Category: {product.category}</p>
              <p>Price: ${Number(product.price).toFixed(2)}</p>
              <button onClick={() => setEditingProduct(product)}>
                Edit
              </button>

              <button onClick={() => deleteCustomProduct(product.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default CustomProductList;