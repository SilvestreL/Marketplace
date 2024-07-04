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
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>Contact Information</h3>
          <p>E: <a href="mailto:lucassilvestreadv@gmail.com">lucassilvestreadv@gmail.com</a></p>
          <p>P: <a href="tel:+5582996057758">+55 82 99605-7758</a></p>
        </div>
        <div className={styles.column}>
          <h3>Current Availability</h3>
          <p>I usually work on several projects but I'll be happy to discuss new opportunities. Let's get in touch!</p>
        </div>
        <div className={styles.columnFollow}>
          <h3>Follow me on</h3>
          <p><a href="#">GitHub</a></p>
          <p><a href="#">Instagram</a></p>
          <p><a href="#">LinkedIn</a></p>
        </div>
      </div>
      <div className={styles.bottomNote}>
        <p>© 2021 — 2024 Lucas Silvestre. Made with ♥ in Maceió, Brasil.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
