import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const incrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <Router>
      <div className="app">
        <header className="header">
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/products">Produtos</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
              <li>
                <Link to="/cart">
                  <i className="fas fa-shopping-cart"></i> Carrinho ({cart.length})
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <section className="hero">
                  <h2>Bem-vindo ao NerdPoint</h2>
                  <p>A sua loja de games e consoles com os melhores preços e variedade!</p>
                </section>
              }
            />
            <Route
              path="/products"
              element={
                <section className="products">
                  <h2>Produtos em Destaque</h2>
                  <ItemListContainer greeting="Explore nossos produtos abaixo:" onAddToCart={addToCart} />
                </section>
              }
            />
            <Route
              path="/cart"
              element={
                <section className="cart">
                  <Cart
                    cart={cart}
                    removeFromCart={removeFromCart}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                  />
                </section>
              }
            />
            <Route
              path="/contact"
              element={
                <section className="contact">
                  <h2>Contato</h2>
                  <form>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Mensagem:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit" className="btn-primary">Enviar</button>
                  </form>
                </section>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
