import React from 'react';
import { motion } from 'framer-motion';
import styles from "./Navbar.module.css";

const Navbar = () => {
  const user = false; // Simulando o estado do usuário. Ajuste conforme necessário.
  const logout = () => console.log("Logout"); // Função de logout simulada. Ajuste conforme necessário.

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className={styles.brand}>Product <span>List</span></div>
      <ul className={styles.links_list}>
        <li>
          <motion.div
            className={styles.link}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Home
          </motion.div>
        </li>
        <li>
          <motion.div
            className={styles.link}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Sobre
          </motion.div>
        </li>
        {!user && (
          <>
            <li>
              <motion.div
                className={styles.link}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Entrar
              </motion.div>
            </li>
            <li>
              <motion.div
                className={styles.link}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Cadastrar
              </motion.div>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <motion.div
                className={styles.link}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Novo Produto
              </motion.div>
            </li>
            <li>
              <motion.div
                className={styles.link}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Dashboard
              </motion.div>
            </li>
            <li>
              <motion.button
                className={styles.button}
                onClick={logout}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Sair
              </motion.button>
            </li>
          </>
        )}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
