import './NavBar.css';

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
    </nav>
  );
};

export default NavBar;