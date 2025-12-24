// "use client"

// import React, { createContext, useState } from 'react'

// export const CartContext = createContext;
//  const CartProvider = ({children}) =>  {

//     const [cart, setCart] = useState([]);
//     const addToCart = (item) => {
//         setCart([...cart, item]);
//     };

//     const CartInfo = {
//         addToCart,
//         cart
//     }

//   return <CartContext value={CartInfo}> {children} </CartContext>
// }

// export default CartProvider


"use client";

import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((cart) => [...cart, item]);
  };

  const CartInfo = {
    cart,
    addToCart,
  };

  return (
    <CartContext.Provider value={CartInfo}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
