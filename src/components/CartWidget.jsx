import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <a href="#cart" style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>
      <FaShoppingCart style={{ fontSize: '24px' }} />
    </a>
  );
};

export default CartWidget;
