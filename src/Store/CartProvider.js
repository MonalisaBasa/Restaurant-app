import React from 'react';
import CartContext from './cart-contex';

const CartProvider = (props) => {
    const addItemToHandler = (item) =>{};

    const removeItemFromCartHandler = (id) =>{};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToHandler ,
        removeItem: removeItemFromCartHandler,
    };
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;
