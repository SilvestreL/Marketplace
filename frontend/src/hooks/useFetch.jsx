import { useEffect, useState } from "react";

// Custom hook para lidar com operações CRUD usando Fetch API
export const useFetch = (url) => {
  // Estado para armazenar os dados recebidos
  const [data, setData] = useState(null);

  // Estado para configurar a requisição
  const [config, setConfig] = useState(null);

  // Estado para armazenar o método HTTP (GET, POST, PUT, DELETE)
  const [method, setMethod] = useState(null);

  // Estado para controlar quando chamar a função fetchData
  const [callFetch, setCallFetch] = useState(false);

  // Estado para controlar o carregamento (loading)
  const [loading, setLoading] = useState(false);

  // Estado para armazenar erros
  const [error, setError] = useState(null);

  // Estado para armazenar o ID do item a ser atualizado ou deletado
  const [itemId, setItemId] = useState(null);

  // Função para configurar a requisição HTTP
  const httpConfig = (data, method, id = null) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod("POST");
    } else if (method === "PUT") {
      setConfig({
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod("PUT");
      setItemId(id);
    } else if (method === "DELETE") {
      setConfig({
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMethod("DELETE");
      setItemId(id);
    }
  };

  // Efeito para buscar dados (GET)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Ativa o estado de carregamento
      try {
        const res = await fetch(url); // Realiza a requisição GET
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await res.json(); // Converte a resposta para JSON
        setData(json); // Armazena os dados recebidos no estado
        setError(null); // Reseta o estado de erro
      } catch (error) {
        setError("Houve um erro ao carregar os dados!"); // Define o estado de erro em caso de falha
      }
      setLoading(false); // Desativa o estado de carregamento
    };

    fetchData();
  }, [url, callFetch]); // Dependências do efeito

  // Efeito para operações POST, PUT, DELETE
  useEffect(() => {
    const httpRequest = async () => {
      if (!method) return;

      let fetchOptions = [url, config];
      if (method === "PUT" || method === "DELETE") {
        fetchOptions[0] = `${url}/${itemId}`; // Atualiza a URL para PUT ou DELETE com o ID do item
      }

      setLoading(true); // Ativa o estado de carregamento
      try {
        const res = await fetch(...fetchOptions); // Realiza a requisição HTTP
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await res.json(); // Converte a resposta para JSON
        setCallFetch(json); // Atualiza o estado para disparar o efeito de buscar dados (fetchData)
        setError(null); // Reseta o estado de erro
      } catch (error) {
        setError("Houve um erro ao fazer a requisição!"); // Define o estado de erro em caso de falha
      }
      setLoading(false); // Desativa o estado de carregamento
    };

    httpRequest();
  }, [config]); // Dependência do efeito

  // Retorna os estados e a função de configuração HTTP
  return { data, httpConfig, loading, error };
};
