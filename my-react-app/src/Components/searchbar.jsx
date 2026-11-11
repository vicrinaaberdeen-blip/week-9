function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <input type="text" placeholder="Search for products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)} />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;