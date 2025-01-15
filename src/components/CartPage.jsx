import './CartPage.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const CartPage = ({ cart, removeFromCart }) => {
  const [cartItems, setCartItems] = useState(cart);

  const incrementQuantity = (index) => {
    const newCart = [...cartItems];
    newCart[index].quantity += 1;
    setCartItems(newCart);
  };

  const decrementQuantity = (index) => {
    const newCart = [...cartItems];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      setCartItems(newCart);
    }
  };

  return (
    <div className="cart-page">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>O carrinho está vazio.</h2>
          <p>Adicione produtos para continuar comprando.</p>
        </div>
      ) : (
        <div className="container">
          {cartItems.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Preço: R$ {item.price.toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => decrementQuantity(index)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(index)}>+</button>
              </div>
              <div className="quantity-controls">
                <button
                  className="btn-secondary"
                  onClick={() => removeFromCart(item)}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

CartPage.propTypes = {
  cart: PropTypes.array.isRequired, // Valida que cart deve ser um array
  removeFromCart: PropTypes.func.isRequired, // Valida que removeFromCart deve ser uma função
};

export default CartPage;
