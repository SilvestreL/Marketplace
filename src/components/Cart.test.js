import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cart from './Cart';

const mockCart = [
  { id: 1, name: 'Produto 1', price: 100, quantity: 1, photo: '/img1.jpg' },
  { id: 2, name: 'Produto 2', price: 200, quantity: 2, photo: '/img2.jpg' },
];

const mockUpdateQuantity = jest.fn();
const mockRemoveItem = jest.fn();

describe('Cart', () => {
  test('renders cart items and totals', () => {
    render(<Cart cart={mockCart} updateQuantity={mockUpdateQuantity} removeItem={mockRemoveItem} />);

    mockCart.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(`$${item.price}`)).toBeInTheDocument();
      expect(screen.getByText(item.quantity)).toBeInTheDocument();
    });

    expect(screen.getByText('Total: $500.00')).toBeInTheDocument();
  });

  test('calls updateQuantity when quantity buttons are clicked', () => {
    render(<Cart cart={mockCart} updateQuantity={mockUpdateQuantity} removeItem={mockRemoveItem} />);

    const quantityButtons = screen.getAllByText(/[-+]/);
    fireEvent.click(quantityButtons[0]); // Click on the first minus button
    fireEvent.click(quantityButtons[1]); // Click on the first plus button
    expect(mockUpdateQuantity).toHaveBeenCalledTimes(2);
  });

  test('calls removeItem when remove button is clicked', () => {
    render(<Cart cart={mockCart} updateQuantity={mockUpdateQuantity} removeItem={mockRemoveItem} />);

    const removeButtons = screen.getAllByText(/Remover/i);
    fireEvent.click(removeButtons[0]);
    expect(mockRemoveItem).toHaveBeenCalledTimes(1);
  });
});
