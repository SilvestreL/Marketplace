import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from './ProductList';

const mockItems = [
  { id: 1, name: 'Produto 1', description: 'Descrição do Produto 1', price: 100, photo: '/img1.jpg' },
  { id: 2, name: 'Produto 2', description: 'Descrição do Produto 2', price: 200, photo: '/img2.jpg' },
  { id: 3, name: 'Produto 3', description: 'Descrição do Produto 3', price: 300, photo: '/img3.jpg' },
  { id: 4, name: 'Produto 4', description: 'Descrição do Produto 4', price: 400, photo: '/img4.jpg' },
  { id: 5, name: 'Produto 5', description: 'Descrição do Produto 5', price: 500, photo: '/img5.jpg' },
  { id: 6, name: 'Produto 6', description: 'Descrição do Produto 6', price: 600, photo: '/img6.jpg' },
  { id: 7, name: 'Produto 7', description: 'Descrição do Produto 7', price: 700, photo: '/img7.jpg' },
  { id: 8, name: 'Produto 8', description: 'Descrição do Produto 8', price: 800, photo: '/img8.jpg' },
];

const mockAddToCart = jest.fn();

describe('ProductList', () => {
  test('renders product items', () => {
    render(<ProductList items={mockItems} addToCart={mockAddToCart} />);

    mockItems.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
      expect(screen.getByText(`$${item.price}`)).toBeInTheDocument();
    });
  });

  test('calls addToCart when button is clicked', () => {
    render(<ProductList items={mockItems} addToCart={mockAddToCart} />);

    const buttons = screen.getAllByText(/Add to Cart/i);
    fireEvent.click(buttons[0]);
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });
});
