import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';
import { fetchProducts } from '../utils/products'; // Mock assíncrono

const ItemListContainer = ({ greeting, onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error('Erro ao buscar os produtos:', error));
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>{greeting}</h2>
      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <ItemList products={products} onAddToCart={onAddToCart} />
        </div>
      )}
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ItemListContainer;
