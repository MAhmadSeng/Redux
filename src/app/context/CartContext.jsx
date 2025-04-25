import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setTotalPrice((prevPrice) => prevPrice + item.price);
    console.log(`Added ${item.title} to the cart. Total items: ${cart.length + 1}`);
  };

  const removeFromCart = (itemId) => {
    const itemToRemove = cart.find((item) => item.id === itemId);
    if (itemToRemove) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      setTotalPrice((prevPrice) => prevPrice - itemToRemove.price);
      console.log(`Removed ${itemToRemove.title} from the cart. Total items: ${cart.length - 1}`);
    }
  };

  return (
    <CartContext.Provider value={{ cart, totalPrice, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


export default CartContext;
