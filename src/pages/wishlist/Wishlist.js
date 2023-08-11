import React, { useContext } from 'react'

import "./Wishlist.css";
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
        <div key={_id} className='product_card_wishlist'>
          <img className='prod_image_wishlist' src={image} alt={title}/>
          <div className='product_details_wishlist'>
            <h1 className='prod_heading_wishlist'>{title}</h1>
            <div className='prod_price_wishlist'>${price}</div>
            <div className='prod_type_wishlist'>{type}</div>
            <div className='prod_rating_wishlist'>rating: {rating}</div>
          </div>
          <div className='actions_wishlist'>
            <button className='add_to_cart_from_wishlist' onClick={() =>{cartHandler(item)}}>Add To Cart</button>
            <button className='remove_from_wishlist' onClick={()=>removeHandler(item)}>Remove</button>
          </div>
        </div>
      )}) 
      } 
    </div>
  )
}

