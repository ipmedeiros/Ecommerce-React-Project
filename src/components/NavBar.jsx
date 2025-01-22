import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">NerdPoint</div>
      <ul className="nav-links">
        <li><a href="#inicio" alt="Início">Início</a></li>
        <li><a href="#produtos" alt="Produtos">Produtos</a></li>
        <li><a href="#contato" alt="Contato">Contato</a></li>
        <li><a href="#carrinho" alt="Carrinho">Carrinho (0)</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;