import React, { useContext } from 'react'

import "./Wishlist.css";
import { WishlistContext } from '../../context/WishlistContext';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router';

export const Wishlist = () => {
const { wishlistItem, removeFromWishlistHandler } = useContext(WishlistContext);
const {cartItem, cartHandler} = useContext(CartContext);
const navigate = useNavigate();

const removeHandler = (item) => {
  removeFromWishlistHandler(item)
}
  return (
    <div>
      <h2 className='wishlist_heading'>Your Wishlist</h2>
      {wishlistItem.length === 0 && <h1>Look like you have not added anything in your wishlist. Why don't you buy something!!!</h1>}
      {wishlistItem.map((item) =>{
      const {_id, title, price, rating, type, image} = item;
      const isItInCart = cartItem.find(prod => prod._id === _id)
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
          {isItInCart ? <button className='add_to_cart_from_wishlist' onClick={() => {navigate(`/cart`);}}>Go To Cart</button> : <button className='add_to_cart_from_wishlist' onClick={() =>{cartHandler(item)}}>Add To Cart</button>}
            <button className='remove_from_wishlist' onClick={()=>removeHandler(item)}>Remove</button>
          </div>
        </div>
      )}) 
      } 
      
      {wishlistItem.length === 0 && <button className='add_to_wishlist' onClick={() =>navigate("/product")}>SHOP NOW</button>}
    </div>
  )
}

