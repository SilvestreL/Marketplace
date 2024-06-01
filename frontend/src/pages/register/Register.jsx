import React, { useState } from 'react';
import styles from './Register.module.css';

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('As senhas não correspondem');
      return;
    }

    console.log('Enviando dados:', {
      fullName: form.fullName,
      email: form.email,
      cpf: form.cpf,
      password: form.password,
    });

    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          cpf: form.cpf,
          password: form.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro do servidor:', errorData);
        throw new Error('A resposta da rede não foi ok');
      }

      const data = await response.json();
      console.log('Usuário criado:', data);
      alert('Usuário criado com sucesso');
      setForm({
        fullName: '',
        email: '',
        cpf: '',
        password: '',
        confirmPassword: '',
      }); // Limpar o formulário após o registro bem-sucedido
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      alert('Erro ao criar usuário');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h1>Cadastro</h1>
      <div className={styles.formGroup}>
        <label>Nome Completo:</label>
        <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>E-mail:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>CPF:</label>
        <input type="text" name="cpf" value={form.cpf} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>Senha:</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>Confirme a Senha:</label>
        <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
      </div>
      <div className={styles.buttonContainer}>
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  );
};

export default Register;
