import './CartPage.css';
import PropTypes from 'prop-types'; // Adicionamos isso para validação das props

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-page">
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home" alt="Início">Início</a></li>
            <li><a href="#products" alt="Produtos">Produtos</a></li>
            <li><a href="#about" alt="Sobre">Sobre</a></li>
            <li><a href="#contact" alt="Contato">Contato</a></li>
            <li><a href="#cart" id="cart-icon" alt="Carrinho">Carrinho ({cart.length})</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="cart" className="cart">
          <h2>Seu Carrinho</h2>
          {cart.length === 0 ? (
            <p>O carrinho está vazio.</p>
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
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 NerdPoint. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

// Adicione as validações para as props aqui
CartPage.propTypes = {
  cart: PropTypes.array.isRequired, // Valida que cart deve ser um array
  removeFromCart: PropTypes.func.isRequired, // Valida que removeFromCart deve ser uma função
};

export default CartPage;