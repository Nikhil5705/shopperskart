import React, { useContext } from 'react'

import { WishlistContext } from '../../context/WishlistContext';
import { CartContext } from '../../context/CartContext';

export const Wishlist = () => {
const { wishlistItem, setWishlistItem, removeFromWishlistHandler } = useContext(WishlistContext);
const {cartHandler} = useContext(CartContext);

const removeHandler=(item)=>{
  removeFromWishlistHandler(item)
}
  return (
    <div>
      {wishlistItem.map((item) =>{
      const {_id, title, price, rating, type, image} = item;

      return (
        <div key={_id} className='product_card'>
          <img className='prod_image' src={image} alt={title}/>
          <div className='product_details'>
            <h1 className='prod_heading'>{title}</h1>
            <div className='prod_price'>${price}</div>
            <div className='prod_type'>{type}</div>
            <div className='prod_rating'>rating: {rating}</div>
          </div>
          <div className='actions'>
            <button className='remove_from_cart' onClick={()=>removeHandler(item)}>Remove</button>
            <button className='add_to_cart' onClick={() =>{cartHandler(item)}}>Add To Cart</button>
          </div>
        </div>
      )}) 
      } 
    </div>
  )
}

