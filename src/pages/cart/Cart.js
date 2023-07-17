import React, { useContext } from 'react'

import "./Cart.css";
import { CartContext } from '../../context/CartContext'


export const Cart = () => {
  const {cartItem} = useContext(CartContext);
  const {removeFromCartHandler} = useContext(CartContext);
  return (
    <div>
      {cartItem.length > 0} ?
      {cartItem.map((item) =>{
      const {_id, title, price, rating, type, image, quantity} = item;
      return (
        <div key={_id} className='product_card'>
          <img className='prod_image' src={image} alt={title}/>
          <div className='product_details'>
            <h1 className='prod_heading'>{title}</h1>
            <div className='prod_price'>${price}</div>
            <div className='prod_type'>{type}</div>
            <div>Quantity: {quantity ?? 1}</div>
            <div className='prod_rating'>rating: {rating}</div>
          </div>
          <div className='actions'>
            <button className='remover_from_cart' onClick={()=>removeFromCartHandler(item)}>Remove</button>
          </div>
        </div>
      )}) 
      } 
      <div>Total Price: {cartItem.reduce((total, prod)=> total+=Number(prod.price)*prod.quantity ,0)}</div>
      :<h2>Looks like you have not added anything in your cart. Why don't you buy something!!!</h2>
      
    </div>
  )
}

