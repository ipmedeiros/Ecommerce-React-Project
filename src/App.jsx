import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo_nerdpont.jpeg'; // Importe a logo

const App = () => {
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: 'Console X', price: 2500, image: 'console.jpg' },
        { id: 2, name: 'Jogo Y', price: 300, image: 'game.jpg' },
        { id: 3, name: 'Acessório Z', price: 150, image: 'accessory.jpg' },
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="app">
            <header className="header">
                <div className="container">
                    {/* Adiciona a logo */}
                    <img src={logo} alt="NerdPoint" className="logo-img" />
                    <nav className="nav">
                        <ul>
                            <li><a href="#home">Início</a></li>
                            <li><a href="#products">Produtos</a></li>
                            <li><a href="#about">Sobre</a></li>
                            <li><a href="#contact">Contato</a></li>
                            <li><a href="#cart" id="cart-icon">Carrinho ({cart.length})</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <section id="home" className="hero">
                    <div className="container">
                        <h2>Bem-vindo ao NerdPoint</h2>
                        <p>A sua loja de games e consoles com os melhores preços e variedade!</p>
                    </div>
                </section>

                <section id="products" className="products">
                    <div className="container">
                        <h2>Produtos em Destaque</h2>
                        <div className="product-grid">
                            {products.map((product) => (
                                <div key={product.id} className="product-card">
                                    <img src={product.image} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <p>R$ {product.price.toFixed(2)}</p>
                                    <button 
                                        className="btn-secondary add-to-cart"
                                        onClick={() => addToCart(product)}
                                    >
                                        Adicionar ao Carrinho
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="about" className="about">
                    <div className="container">
                        <h2>Sobre Nós</h2>
                        <p>Somos apaixonados por tecnologia e gamers de coração. Oferecemos os melhores produtos do mercado com garantia e segurança.</p>
                    </div>
                </section>

                <section id="contact" className="contact">
                    <div className="container">
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
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container">
                    <p>&copy; 2025 NerdPoint. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;