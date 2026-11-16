function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  const categories = ['All', 'Skincare', 'Makeup',];

  return (
    <div className= "category-filter">
      <h3>Categories</h3>

      <ul className="category-list">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category ? 'active-category' : ''
              }
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryFilter;