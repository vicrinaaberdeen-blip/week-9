import { useState } from 'react';

function AddProductForm({ addCustomProduct }) {
  const [formData, setFormData] = useState({
    title: '',
    brand: '',
    category: '',
    price: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      ...formData,
      id: `custom-${Date.now()}`,
      price: Number(formData.price),
      source: 'custom'
    };

    addCustomProduct(newProduct);

    setFormData({
      title: '',
      brand: '',
      category: '',
      price: ''
    });
  };

  return (
    <section className="add-product-form">
      <h2>Add a Product to Your Collection</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Product Name
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Brand
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Category
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Choose a category</option>
            <option value="Skincare">Skincare</option>
            <option value="Makeup">Makeup</option>
            <option value="Haircare">Haircare</option>
            <option value="Fragrance">Fragrance</option>
          </select>
        </label>

        <label>
          Price
          <input
            type="number"
            name="price"
            min="0"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Add Product</button>
      </form>
    </section>
  );
}

export default AddProductForm;