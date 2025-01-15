import { useState } from 'react';
import './App.css';
import CartPage from './components/CartPage';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Console X', price: 2500, image: 'console.jpg' },
    { id: 2, name: 'Jogo Y', price: 300, image: 'game.jpg' },
    { id: 3, name: 'Acessório Z', price: 150, image: 'accessory.jpg' },
  ];

  const addToCart = (product) => {
    const itemInCart = cart.find(item => item.id === product.id);
    if (itemInCart) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <div className="app">
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
        <section id="home" className="hero">
          <h2>Bem-vindo ao NerdPoint</h2>
          <p>A sua loja de games e consoles com os melhores preços e variedade!</p>
        </section>

        <section id="products" className="products">
          <h2>Produtos em Destaque</h2>
          <div className="container">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>R$ {product.price.toFixed(2)}</p>
                <button
                  className="btn-secondary"
                  onClick={() => addToCart(product)}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="cart" className="cart">
          <CartPage cart={cart} removeFromCart={removeFromCart} />
        </section>

        <section id="about" className="about">
          <h2>Sobre Nós</h2>
          <p>
            Somos apaixonados por tecnologia e gamers de coração. Oferecemos os melhores produtos do mercado com garantia e segurança.
          </p>
        </section>

        <section id="contact" className="contact">
          <h2>Contato</h2>
          <form>
            <label htmlFor="name" alt="Nome">Nome:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email" alt="Email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message" alt="Mensagem">Mensagem:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit" className="btn-primary" alt="Enviar">Enviar</button>
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
