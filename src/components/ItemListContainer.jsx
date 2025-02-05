import { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';
import { fetchProducts } from '../utils/products'; // Mock assíncrono
import { CartContext } from '../components/CartContext'; // Importe o contexto do carrinho

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addItem } = useContext(CartContext); // Use o contexto do carrinho

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
          <ItemList products={products} onAddToCart={addItem} />
        </div>
      )}
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
