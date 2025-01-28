import './CartPage.css';
import PropTypes from 'prop-types';

const CartPage = ({ cart, removeFromCart, incrementQuantity, decrementQuantity }) => {

  // Função para lidar com o processo de finalização da compra
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Seu carrinho está vazio! Adicione produtos antes de finalizar a compra.");
    } else {
      alert("Compra finalizada com sucesso! Obrigado pela preferência.");
      // Aqui você pode adicionar lógica adicional, como redirecionar para outra página
      // ou limpar o carrinho após a finalização
    }
  };

  return (
    <div className="cart-page">
      {/* Verifica se o carrinho está vazio ou não */}
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>O carrinho está vazio.</h2>
          <p>Adicione produtos para continuar comprando.</p>
        </div>
      ) : (
        <div className="container">
          {/* Mapeando itens do carrinho */}
          {cart.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Preço: R$ {item.price.toFixed(2)}</p>
              {/* Controle de quantidade */}
              <div className="quantity-controls">
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
              {/* Botão para remover o item do carrinho */}
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
          
          {/* Botão para finalizar a compra */}
          <div className="checkout-section">
            <button className="checkout-button" onClick={handleCheckout}>
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Tipagem das props para garantir o tipo de dado correto
CartPage.propTypes = {
  cart: PropTypes.array.isRequired, // O carrinho deve ser um array
  removeFromCart: PropTypes.func.isRequired, // Função para remover itens do carrinho
  incrementQuantity: PropTypes.func.isRequired, // Função para incrementar a quantidade
  decrementQuantity: PropTypes.func.isRequired, // Função para decrementar a quantidade
};

export default CartPage;
