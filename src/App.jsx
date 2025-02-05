import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext'; // Importando o CartProvider

const App = () => {
  return (
    <Router>
      <CartProvider> {/* Envolvendo a aplicação com o CartProvider */}
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
                    <i className="fas fa-shopping-cart"></i> Carrinho
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
                    <h2>Bem-vindo a NerdPoint</h2>
                    <p>A sua loja de games e consoles com os melhores preços e variedade!</p>
                  </section>
                }
              />
              <Route
                path="/products"
                element={
                  <section className="products">
                    <h2>Produtos em Destaque</h2>
                    <ItemListContainer greeting="Explore nossos produtos abaixo:" />
                  </section>
                }
              />
              <Route
                path="/cart"
                element={
                  <section className="cart">
                    <Cart />
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
      </CartProvider>
    </Router>
  );
};

export default App;
