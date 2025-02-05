import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addItem = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((product) => product.id === item.id);

      if (existingItem) {
        return prevCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: Math.max(product.quantity + quantity, 1) }
            : product
        );
      } else {
        return [...prevCart, { ...item, quantity: Math.max(quantity, 1) }];
      }
    });
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartContext };