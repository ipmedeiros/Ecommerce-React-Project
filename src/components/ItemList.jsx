import PropTypes from 'prop-types';

const ItemList = ({ products, onAddToCart }) => {
  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '10px',
            width: '250px',
            textAlign: 'center',
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '150px', objectFit: 'cover' }}
          />
          <h3>{product.name}</h3>
          <p>Preço: R$ {product.price.toFixed(2)}</p>
          <p>Em estoque: {product.stock}</p>
          <button
            style={{
              backgroundColor: '#2c2c97',
              color: '#fff',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={() => onAddToCart(product)}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </>
  );
};

ItemList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ItemList;
