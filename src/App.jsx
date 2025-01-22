import { useState } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const itemInCart = cart.find((item) => item.id === product.id);
    if (itemInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const incrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="#home" alt="Início">
                Início
              </a>
            </li>
            <li>
              <a href="#products" alt="Produtos">
                Produtos
              </a>
            </li>
            <li>
              <a href="#contact" alt="Contato">
                Contato
              </a>
            </li>
            <li>
              <a href="#cart" id="cart-icon" alt="Carrinho">
                <i className="fas fa-shopping-cart"></i> Carrinho ({cart.length})
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <h2>Bem-vindo ao NerdPoint</h2>
          <p>
            A sua loja de games e consoles com os melhores preços e variedade!
          </p>
        </section>

        <section id="products" className="products">
          <h2>Produtos em Destaque</h2>
          <ItemListContainer
            greeting="Explore nossos produtos abaixo:"
            onAddToCart={addToCart}
          />
        </section>

        <section id="cart" className="cart">
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        </section>
        <section id="contact" className="contact">
          <h2>Contato</h2>
          <form>
            <label htmlFor="name" alt="Nome">
              Nome:
            </label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email" alt="Email">
              Email:
            </label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message" alt="Mensagem">
              Mensagem:
            </label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit" className="btn-primary" alt="Enviar">
              Enviar
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 NerdPoint. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
