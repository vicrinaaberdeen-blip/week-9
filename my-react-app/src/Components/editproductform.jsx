import { useState, useEffect } from 'react';

function EditProductForm({ product, updateCustomProduct, cancelEdit }) {
  const [formData, setFormData] = useState({
    title: product.title,
    brand: product.brand,
    category: product.category,
    price: product.price
  });

  useEffect(() => {
    setFormData({
      title: product.title,
      brand: product.brand,
      category: product.category,
      price: product.price
    });
  }, [product]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    updateCustomProduct({
      ...product,
      ...formData,
      price: Number(formData.price)
    });

    cancelEdit();
  };

  return (
    <section className="edit-product-form">
      <h2>Edit Product</h2>

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
            <option value="Skincare">Skincare</option>
            <option value="Makeup">Makeup</option>
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

        <button type="submit">Save Changes</button>
        <button type="button" onClick={cancelEdit}>
          Cancel
        </button>
      </form>
    </section>
  );
}

export default EditProductForm;