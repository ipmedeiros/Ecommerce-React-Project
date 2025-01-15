import './CartPage.css';
import PropTypes from 'prop-types';

const CartPage = ({ cart, removeFromCart, setCart }) => {

  const incrementQuantity = (index) => {
    const newCart = [...cart];  // Cria uma cópia do carrinho atual
    newCart[index].quantity += 1;  // Incrementa a quantidade do item
    setCart(newCart);  // Atualiza o estado com o novo carrinho
  };

  const decrementQuantity = (index) => {
    const newCart = [...cart];  // Cria uma cópia do carrinho atual
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;  // Decrementa a quantidade do item
      setCart(newCart);  // Atualiza o estado com o novo carrinho
    }
  };

  const renderRemoveButton = (item) => {
    return (
      <button
        className="btn-secondary"
        onClick={() => removeFromCart(item)}
      >
        <i className="fas fa-trash-alt"></i>  {/* Ícone de lixeira */}
      </button>
    );
  };

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
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Preço: R$ {item.price.toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => decrementQuantity(index)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(index)}>+</button>
              </div>
              <div className="remove-button">
                {renderRemoveButton(item)}  {/* Exibe o botão de remoção com ícone de lixeira */}
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
  setCart: PropTypes.func.isRequired,  // Valida que setCart deve ser uma função
};

export default CartPage;
