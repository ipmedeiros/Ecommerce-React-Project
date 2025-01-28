import { useState } from "react";
import PropTypes from "prop-types";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const navigate = useNavigate();

  // Função para adicionar ao carrinho
  const handleAdd = (quantity) => {
    setQuantityAdded(quantity); // Atualiza o estado com a quantidade adicionada
    console.log("Produto adicionado ao carrinho: ", quantity); // Debug para verificar o valor
  };

  // Função para finalizar a compra e redirecionar para o carrinho
  const handleFinishPurchase = () => {
    navigate("/cart"); // Redireciona para a rota "/cart"
  };

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Preço: R$ {product.price.toFixed(2)}</p>

      {/* Exibe o ItemCount se quantityAdded for 0, caso contrário, exibe o botão de finalizar compra */}
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
