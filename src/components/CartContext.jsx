import { createContext, useState } from "react";
import PropTypes from "prop-types";


// Criação do Contexto
const CartContext = createContext();

// Custom Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Verifica se o item já está no carrinho
  const isInCart = (id) => cart.some((product) => product.id === id);

  // Adicionar item ao carrinho
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart((prevCart) =>
        prevCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity }]);
    }
  };

  // Remover item do carrinho
  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== itemId));
  };

  // Limpar carrinho
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Validação de props do CartProvider
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};