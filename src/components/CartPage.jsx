import './CartPage.css';
import PropTypes from 'prop-types';

const CartPage = ({ cart, removeFromCart, incrementQuantity, decrementQuantity }) => {
  return (
    <div className="cart-page">
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>O carrinho está vazio.</h2>
          <p>Adicione produtos para continuar comprando.</p>
        </div>
      ) : (
        <div className="container">
          {cart.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Preço: R$ {item.price.toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
              <div className="remove-button">
                <button
                  className="btn-secondary"
                  onClick={() => removeFromCart(item)}
                >
                  <i className="fas fa-trash-alt"></i>
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
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  incrementQuantity: PropTypes.func.isRequired,
  decrementQuantity: PropTypes.func.isRequired,
};

export default CartPage;
