import { useState, useEffect } from 'react';
import Header from './Components/header';
import HeroSection from './Components/herosection';
import BrowserSection from './Components/browsersection';
import WishlistSection from './Components/wishlistsection';
import Footer from './Components/footer';

function App() {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setError('Unable to load products');
        setLoading(false);
      });
  }, []);

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
      />

      <WishlistSection
        wishlist={wishlist}
        addToWishlist={addToWishlist}
        removeFromWishlist={removeFromWishlist}
      />

      <Footer />
    </>
  );
}

export default App;
