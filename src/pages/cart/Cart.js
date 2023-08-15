import React, { useContext } from 'react'

import "./Cart.css";
import { CartContext } from '../../context/CartContext'
import { useNavigate} from 'react-router';
import { WishlistContext } from '../../context/WishlistContext';

export const Cart = () => {
  const {cartItem, increaseQuantity, decreaseQuantity} = useContext(CartContext);
  const {removeFromCartHandler} = useContext(CartContext);
  const {wishlistItem, wishlistHandler} = useContext(WishlistContext);
  const navigate = useNavigate();
  const totalBill = cartItem.reduce((total, prod)=> total+=Number(prod.price)*prod.quantity ,0)
  return (
    <div>{cartItem.length === 0 && <h2>Looks like you have not added anything in your cart. Why don't you buy something!!!</h2>}
      {cartItem.map((item) =>{
      const {_id, title, price, rating, type, image, quantity} = item;
      const isItInWishlist = wishlistItem.find(prod => prod._id === _id)
      return (
        <div key={_id} className='product_card_cart'>
          <img className='prod_image_cart' src={image} alt={title}/>
          <div className='product_details_cart'>
            <h1 className='prod_heading_cart'>{title}</h1>
            <div className='prod_price_cart'>${price}</div>
            <div className='prod_type_cart'>{type}</div>
            <div>Quantity: <button onClick={()=>{increaseQuantity(_id)}}>+</button> {quantity ?? 1} <button onClick={()=>{decreaseQuantity(_id)}}>-</button></div>
            <div className='prod_rating_cart'>rating: {rating}</div>
          </div>
          <div className='actions_cart'>
          {isItInWishlist ? <button className='add_to_wishlist_from_cart' onClick={() => {navigate(`/wishlist`);}}>Go To Wishlist</button> : <button className='add_to_wishlist_from_cart' onClick={() =>{wishlistHandler(item)}}>Add To Wishlist</button>}
            <button className='remove_from_cart' onClick={()=>removeFromCartHandler(item)}>Remove</button>
          </div>
        </div>
      )}) 
      } 
      <div>{totalBill != 0 ? `Total Price ${totalBill}`: ""}</div>

{totalBill != 0 ? <button onClick={() => navigate("/checkout")}>Checkout</button> : <button className='add_to_cart' onClick={() =>navigate("/product")}>SHOP NOW</button>}
     
    </div>
  )
}

