// src/pages/home/Home.jsx
import React from 'react';
import ProductList from '../../components/ProductList';
import Skeleton from '../../components/Skeleton';

const Home = ({ items, loading, error }) => {
  return (
    <div>
      <h1 className="title">Marketplace</h1>
      <div className="main-content">
        <div className="content">
          {loading && <Skeleton />}
          {error && <p>{error}</p>}
          {items && <ProductList items={items.products} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
