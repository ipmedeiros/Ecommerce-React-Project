import './NavBar.css';
import CartWidget from './CartWidget'; // Importação do componente CartWidget

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">NerdPoint</div>
      <ul className="nav-links">
        <li><a href="#home">Início</a></li>
        <li><a href="#products">Produtos</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      {/* Adiciona o CartWidget ao final da barra de navegação */}
      <CartWidget />
    </nav>
  );
};

export default NavBar;