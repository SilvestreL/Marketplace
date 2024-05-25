import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css";

const Navbar = () => {
  const user = false; // Simulando o estado do usuário. Ajuste conforme necessário.
  const logout = () => console.log("Logout"); // Função de logout simulada. Ajuste conforme necessário.

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
          Product <span>List</span>
        </NavLink>
      </div>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>
            Sobre
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : "")}>
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink to="/new-product" className={({ isActive }) => (isActive ? styles.active : "")}>
                Novo Produto
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : "")}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <button className={styles.button} onClick={logout}>
                Sair
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
