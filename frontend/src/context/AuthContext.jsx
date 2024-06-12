import React, { createContext, useState, useContext } from "react";

// Criação do contexto de autenticação
const AuthContext = createContext();

// Provedor de autenticação
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        setUser(data.user); // data.user é o objeto do usuário retornado pela API
        localStorage.setItem("authToken", data.token);
        setLoading(false)
        return true
      } else {
        setError(data.message || "Erro de autenticação");
        setLoading(false)
        return (false)
      }
    } catch (error) {
      console.log(error)
      setError("Não foi possível conectar ao servidor");
      setLoading(false)
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Exporta o hook useAuth para usar o contexto
export const useAuth = () => useContext(AuthContext);
