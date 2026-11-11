function ProductCard({ product }) {
    return (
        <div>
            <img src={product.thumbnail} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>

            <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
        </div>
    );
}

export default ProductCard;