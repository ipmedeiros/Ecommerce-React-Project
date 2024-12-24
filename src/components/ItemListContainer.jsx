import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>{greeting}</h2>
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired, 
};

export default ItemListContainer;
