import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Cart from './components/Cart';
import { useFetch } from './hooks/useFetch';

const url = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC";

// const server = axios.create({
//   baseURL: "http://localhost:3001"
// })



function App() {
  const { data: items, loading, error } = useFetch(url);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home items={items} loading={loading} error={error} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
