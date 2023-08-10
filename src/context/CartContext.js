import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cartItem, setCartItem] = useState([]);
  
  const cartHandler = (item) =>{
    const findProd = cartItem.find((checkProd)=> checkProd._id === item._id)

    if (findProd) {
      setCartItem(cartItem.map(cartProd =>{
        if(cartProd._id === item._id){
          return {...cartProd, quantity: cartProd.quantity + 1}
        }else{
          return{
            ...cartProd
          }
        }
      }))
    }else{
      setCartItem([...cartItem, {...item, quantity: 1}])
    }
  }
  const removeFromCartHandler = (item) =>{
    setCartItem(cartItem.filter(prod => prod._id != item._id))
  }
const increaseQuantity = (_id) =>{
    const updatedCart = cartItem.map(item => item._id === _id ? {...item, quantity: item.quantity+1}: item)
    setCartItem(updatedCart)
}
const decreaseQuantity = (_id) =>{
  const updatedCart = cartItem.map(item => item._id === _id && item.quantity>1 ? {...item, quantity: item.quantity-1}: item)
  setCartItem(updatedCart)
}
  return (
    <div>
      <CartContext.Provider value={{cartItem, cartHandler, removeFromCartHandler, increaseQuantity, decreaseQuantity}}>
      {children}
      </CartContext.Provider> 
    </div>
  )
}