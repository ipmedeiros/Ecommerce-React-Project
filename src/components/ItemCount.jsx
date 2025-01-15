import { useState } from "react";
import PropTypes from "prop-types";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
      <button onClick={() => onAdd(count)}>Adicionar ao carrinho</button>
    </div>
  );
}

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default ItemCount;