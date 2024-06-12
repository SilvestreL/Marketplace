import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'; // Verifique se o caminho está correto
import styles from './Login.module.css';

const Login = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: ""
  });
  const { login, loading, error } = useAuth(); // Usa o contexto para autenticação

  const handleChange = (e) => {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await login(formLogin.email, formLogin.password);
      if (!success) {
        alert('Erro ao fazer login');
      } else {
        alert("Usuário logado com sucesso!")
      }
    }
    
    catch (error) {
      console.log('Erro ao fazer login:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h1>Login</h1>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formLogin.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password:</label> 
        <input
          type="password"
          id="password"
          name="password"
          value={formLogin.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.buttonContainer}>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default Login;
