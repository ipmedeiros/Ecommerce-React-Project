import { useState } from "react";
import PropTypes from "prop-types";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../components/CartContext"; 

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext); 

  const handleAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(product, quantity);
  };

  const handleFinishPurchase = () => {
    navigate("/cart");
  };

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Preço: R$ {product.price.toFixed(2)}</p>

      {quantityAdded === 0 ? (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <button className="finalize-button" onClick={handleFinishPurchase}>
          Finalizar Compra
        </button>
      )}
    </div>
  );
};

ItemDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemDetail;
