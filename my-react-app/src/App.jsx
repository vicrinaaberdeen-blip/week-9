import { useState, useEffect } from 'react';
import Header from './Components/header';
import HeroSection from './Components/herosection';
import BrowserSection from './Components/browsersection';
import WishlistSection from './Components/wishlistsection';
import Footer from './Components/footer';
import './App.css';
import AddProductForm from './Components/addproductform';
import CustomProductList from './Components/customproductlist';
import EditProductForm from './Components/editproductform';


function App() {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
  const savedWishlist = localStorage.getItem('beautyWishlist');

  return savedWishlist ? JSON.parse(savedWishlist) : [];
});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [customProducts, setCustomProducts] = useState(() => {
  const savedProducts = localStorage.getItem('beautyCustomProducts');

  return savedProducts ? JSON.parse(savedProducts) : [];
});

  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');


useEffect(() => {
  console.log("My API call is being made");

  Promise.all([
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json'),
    fetch('https://dummyjson.com/products/category/skin-care')
  ])
    .then((responses) => {
      responses.forEach((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
      });

      return Promise.all(
        responses.map((response) => response.json())
      );
    })
    .then(([makeupData, skincareData]) => {
      const makeupProducts = makeupData.map((product) => ({
        ...product,
        id: `makeup-${product.id}`,
        title: product.name || product.title || "Unnamed Product",
        brand: product.brand || "Unknown Brand",
        source: "makeup",
      }));

      const skincareProducts = skincareData.products.map((product) => ({
        ...product,
        id: `skincare-${product.id}`,
        source: "skincare",
      }));

      console.log("Makeup products:", makeupProducts);
      console.log("Skincare products:", skincareProducts);
      console.log("Number of skincare products:", skincareProducts.length);
      console.log("First skincare product:", skincareProducts[0]);

      setProducts([...makeupProducts, ...skincareProducts]);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
      setError('Unable to load products');
      setLoading(false);
    });
}, []);

useEffect(() => {
  localStorage.setItem('beautyWishlist', JSON.stringify(wishlist));
}, [wishlist]);

useEffect(() => {
  localStorage.setItem('beautyCustomProducts', JSON.stringify(customProducts));
}, [customProducts]);

  const addToWishlist = (product) => {
    setWishlist((previousWishlist) => {
      const alreadyInWishlist = previousWishlist.some(
        (item) => item.id === product.id
      );

      if (alreadyInWishlist) {
        return previousWishlist;
      }

      return [
        ...previousWishlist,
        {
          ...product,
          priority: 'Medium',
          purchased: false,
        },
      ];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((previousWishlist) =>
      previousWishlist.filter((item) => item.id !== id)
    );
  };

  const addCustomProduct = (newProduct) => {
  setCustomProducts((previousProducts) => [
    ...previousProducts,
    newProduct
  ]);
};

  const deleteCustomProduct = (id) => {
  setCustomProducts((previousProducts) =>
    previousProducts.filter((product) => product.id !== id)
  );
};

const updateCustomProduct = (updatedProduct) => {
  setCustomProducts((previousProducts) =>
    previousProducts.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    )
  );
};

  return (
    <>
      <Header />
      <HeroSection />
      <BrowserSection
        products={products}
        loading={loading}
        error={error}
        addToWishlist={addToWishlist}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <WishlistSection
        wishlist={wishlist}
        addToWishlist={addToWishlist}
        removeFromWishlist={removeFromWishlist}
      />
      <AddProductForm
        addCustomProduct={addCustomProduct}
      />
      <CustomProductList
        customProducts={customProducts}
        addToWishlist={addToWishlist}
        deleteCustomProduct={deleteCustomProduct}
        setEditingProduct={setEditingProduct}
      />
      {editingProduct && (
        <EditProductForm
          product={editingProduct}
          updateCustomProduct={updateCustomProduct}
          cancelEdit={() => setEditingProduct(null)}
        />
      )}

      <Footer />
    </>
  );
}

export default App;
