import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/cart" style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>
      <FaShoppingCart style={{ fontSize: '24px' }} />
      {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
    </Link>
  );
};

export default CartWidget;
