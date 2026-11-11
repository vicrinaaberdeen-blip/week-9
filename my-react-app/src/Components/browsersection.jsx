import SearchBar from './searchbar'
import CategoryFilter from './categoryfilter'
import ProductList from './productlist'

function BrowserSection({ products, loading, error }) {
  if (loading) {
    return <p>Loading products...</p>;
  }
  if (error) {
    return <p>Error loading products: {error.message}</p>;
  }
  return (
    <section>
      <h2>Discover Your Beauty</h2>
      <SearchBar />
      <CategoryFilter/>
      <ProductList products={products} />

    </section>
  );
}

export default BrowserSection;