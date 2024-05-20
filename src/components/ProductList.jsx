import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProductList.module.css';

const ProductList = ({ items, addToCart }) => {
  const displayedItems = items.slice(0, 8);

  return (
    <div className={styles.productListContainer}>
      <div className={styles.productList}>
        {displayedItems.map((product) => (
          <motion.div
            key={product.id}
            className={styles.productItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={product.photo} alt={product.name} className={styles.productImage} />
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>${product.price}</p>
            <motion.button
              className={styles.addButton}
              onClick={() => addToCart(product)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
