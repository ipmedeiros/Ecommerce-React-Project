import PropTypes from 'prop-types';
import './Cart.css'; // Estilos adicionais podem ser aplicados ao carrinho.

const Cart = ({ cart, removeFromCart, incrementQuantity, decrementQuantity }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Seu Carrinho</h2>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p className="cart-empty-message">O carrinho está vazio.</p>
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
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="btn-decrement"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="btn-increment"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="btn-remove"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: R$ {total.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  incrementQuantity: PropTypes.func.isRequired,
  decrementQuantity: PropTypes.func.isRequired,
};

export default Cart;