import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import { CartContext } from '../components/CartContext';

const Cart = () => {
  const { cart, removeItem, addItem, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Função para aumentar a quantidade
  const incrementQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      addItem(item, item.quantity + 1); // Incrementa a quantidade atual em 1
    }
  };

  // Função para diminuir a quantidade
  const decrementQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      addItem(item, item.quantity - 1); // Diminui a quantidade em 1, se maior que 1
    }
  };

  // Calcula o total do carrinho
  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0); // Evita NaN

  return (
    <div className="cart-container">
      <h2 className="cart-title">Seu Carrinho</h2>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p className="cart-empty-message">O carrinho está vazio.</p>
          <button className="btn-primary" onClick={() => navigate('/products')}>
            Voltar às compras
          </button>
        </div>
      ) : (
        <div>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>R$ {item.price.toFixed(2)}</p>
                  <div className="cart-item-actions">
                    <button onClick={() => decrementQuantity(item.id)} className="btn-decrement">
                      -
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => incrementQuantity(item.id)} className="btn-increment">
                      +
                    </button>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)} className="btn-remove">
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: R$ {total.toFixed(2)}</h3>
            <button className="btn-clear-cart" onClick={clearCart}>
              Esvaziar Carrinho
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;