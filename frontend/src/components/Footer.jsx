import React from 'react';
import styles from './Footer.module.css';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.content}>
        <p>© 2024 Marketplace. Todos os direitos reservados.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
