import PropTypes from 'prop-types';

const Item = ({ name, price, image, stock, onAddToCart }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px' }}>
      <img
        src={image}
        alt={name}
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <h3>{name}</h3>
      <p>R$ {price.toFixed(2)}</p>
      <p>Em estoque: {stock}</p> {/* Exibe o estoque disponível */}
      <button onClick={onAddToCart} className="add-to-cart-btn">
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired, // Estoque é obrigatório
  onAddToCart: PropTypes.func.isRequired,
};

export default Item;
