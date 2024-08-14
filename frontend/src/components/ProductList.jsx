import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import styles from './Productlist.module.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Função para buscar produtos da API do Mercado Livre
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.mercadolibre.com/sites/MLB/search', {
          params: {
            q: 'smartphone', // Termo de busca
            limit: 8         // Limitar a 8 itens
          }
        });

        // Transformando os dados para o formato esperado pelo componente ProductList
        const transformedProducts = response.data.results.map(product => ({
          id: product.id,
          name: product.title,
          photo: product.thumbnail,
          description: product.condition, // Você pode ajustar isso com base nos dados disponíveis
          price: product.price,
        }));

        setProducts(transformedProducts);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  // Função para adicionar o produto ao carrinho
  const addToCart = (product) => {
    console.log('Adicionando ao carrinho:', product);
    // Lógica para adicionar ao carrinho
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>Produtos</h1>
      <ProductList items={products} addToCart={addToCart} />
    </div>
  );
};

export default App;
