import SearchBar from './searchbar'
import CategoryFilter from './categoryfilter'
import ProductList from './productlist'

function BrowserSection({ 
  products, 
  loading, 
  error, 
  addToWishlist, 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory }) {
  if (loading) {
    return <p>Loading products...</p>;
  }
  if (error) {
    return <p>Error loading products: {error.message}</p>;
  }

 const filteredProducts = products.filter((product) => {
  const matchesSearch = (product.title || product.name || "")
    .toLowerCase()
    .includes(searchTerm.toLowerCase()) || (product.brand || "")
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory = 
  selectedCategory === 'All' ||
    (selectedCategory === 'Makeup' && product.source === 'makeup') ||
    (selectedCategory === 'Skincare' && product.source === 'skincare');

  return matchesSearch && matchesCategory;
 });
  console.log("Total products:", products.length);

console.log(
  "Skincare products:",
  products.filter((product) => product.source === "skincare")
);

console.log("Filtered products:", filteredProducts.length);
  return (
    <section id="discover">
      <h2>Discover Your Beauty</h2>
      <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList products={filteredProducts} addToWishlist={addToWishlist} />

    </section>
  );
}

export default BrowserSection;