import React, { useState } from 'react';
import styles from './Cart.module.css';

const Cart = ({ cart, updateQuantity, removeItem }) => {
  const [installments, setInstallments] = useState(10);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [shipping, setShipping] = useState(0);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const installmentPrice = (totalPrice / installments).toFixed(2);
  const discountedPrice = (totalPrice * 0.9).toFixed(2);

  const calculateShipping = () => {
    setShipping(20);
  };

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cart}>
        <h2>Seu Carrinho</h2>
        {cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.photo} alt={item.name} className={styles.cartImage} />
            <div className={styles.cartDetails}>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <div className={styles.quantity}>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button className={styles.removeButton} onClick={() => removeItem(item.id)}>Remover</button>
            </div>
          </div>
        ))}
        <div className={styles.summary}>
          <p>Total: ${totalPrice.toFixed(2)}</p>
          <p>Frete: ${shipping.toFixed(2)}</p>
          <p>Ou em até {installments}x de ${installmentPrice} sem juros</p>
          <p className={styles.discountText}>10% de desconto para PIX ou boleto: ${discountedPrice}</p>
          <div className={styles.paymentOptions}>
            <label htmlFor="installments">Parcelas:</label>
            <select
              id="installments"
              value={installments}
              onChange={(e) => setInstallments(Number(e.target.value))}
            >
              {[...Array(10).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}x de ${(totalPrice / (i + 1)).toFixed(2)}
                </option>
              ))}
            </select>
            <label htmlFor="payment-method">Forma de Pagamento:</label>
            <select
              id="payment-method"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="credit-card">Cartão de Crédito</option>
              <option value="pix">PIX</option>
              <option value="boleto">Boleto</option>
            </select>
            <button onClick={calculateShipping} className={styles.shippingButton}>
              Calcular Frete
            </button>
            <button className={styles.checkoutButton}>Finalizar Compra</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
