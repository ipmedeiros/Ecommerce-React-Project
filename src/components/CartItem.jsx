import PropTypes from 'prop-types';

const CartItem = ({ image, name, price, quantity }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
      <img
        src={image}
        alt={name}
        style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
      />
      <div style={{ flex: 1 }}>
        <h4 style={{ margin: '0 0 5px' }}>{name}</h4>
        <p style={{ margin: 0 }}>R$ {price.toFixed(2)}</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: 0 }}>Qtd: {quantity}</p>
        <p style={{ margin: 0 }}>Total: R$ {(price * quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartItem;
