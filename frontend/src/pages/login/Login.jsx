import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/auth/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formLogin.email,
          password: formLogin.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro do servidor:', errorData);
        alert('Erro ao fazer login');
        return;
      }

      const data = await response.json();
      console.log('Login bem-sucedido:', data);
      alert('Login bem-sucedido');
      // Salvar o token em algum lugar (localStorage, state management, etc.)
      localStorage.setItem('token', data.token);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login');
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
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
