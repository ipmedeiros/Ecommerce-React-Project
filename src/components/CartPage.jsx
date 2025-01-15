import './CartPage.css';
import PropTypes from 'prop-types';

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-page">
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>O carrinho está vazio.</h2>
          <p>Adicione produtos para continuar comprando.</p>
        </div>
      ) : (
        <div className="container">
          {cart.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Preço: R$ {item.price.toFixed(2)}</p>
              <p>Quantidade: {item.quantity}</p>
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
