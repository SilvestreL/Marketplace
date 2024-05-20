import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { useFetch } from './hooks/useFetch';
import Navbar from './components/Navbar';
import Skeleton from './components/Skeleton';
import Footer from './components/Footer';

const url = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC";

function App() {
  const { data: items, loading, error } = useFetch(url);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeItem(id);
    } else {
      setCart(cart.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className={`App ${cart.length > 0 ? 'with-cart' : ''}`}>
      <Navbar />
      <h1 className="title">Marketplace</h1>
      <div className={`main-content ${cart.length > 0 ? 'with-cart' : ''}`}>
        <div className="content">
          {loading && <Skeleton />}
          {error && <p>{error}</p>}
          {items && <ProductList items={items.products} addToCart={addToCart} cartVisible={cart.length > 0} />}
        </div>
        {cart.length > 0 && <Cart cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
