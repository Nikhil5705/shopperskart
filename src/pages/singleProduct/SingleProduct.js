import { useParams } from "react-router";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import "./SingleProduct.css";
import { products } from "../../backend/db/products";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

export const SingleProduct = () => {
  // const {cartHandler} = useContext(CartContext)
  const {productId} = useParams();
  const {cartItem, cartHandler} = useContext(CartContext);
  const {wishlistItem, wishlistHandler} = useContext(WishlistContext);

  const navigate = useNavigate();

  const product = products.find((item) => item._id === productId);
  if (!product) {
    return <div>Product not found.</div>;
  }

  const { _id, title, price, description, image, rating, size, categoryName, type } = product;
  const isItInCart = cartItem.find(prod => prod._id === _id)
  const isItInWishlist = wishlistItem.find(prod => prod._id === _id)
  return (
    <div className='prod_card'>
      <img className='prod_img' src={image} alt={title} />
      <div className='prod_info'>
        <h1 className='prod_title'>{title}</h1>
        <p className='prod_price'>Price: ${price}</p>
        <p className='prod_desc'>Description: {description}</p>
        <p className='prod_rating'>Rating: {rating}</p>
        <p className='prod_size'>Size: {size}</p>
        <p className='prod_category'>Category: {categoryName}</p>
        <p className='prod_type'>Type: {type}</p>
        <div className='prod_actions'>
        {isItInCart ? <button className='add_to_cart' onClick={() => {navigate(`/cart`);}}>Go To Cart</button> : <button className='add_to_cart' onClick={() =>{cartHandler(product)}}>Add To Cart</button>}
        {isItInWishlist ? <button className='add_to_wishlist' onClick={() => {navigate(`/wishlist`);}}>Go To Wishlist</button> : <button className='add_to_wishlist' onClick={() =>{wishlistHandler(product)}}>Add To Wishlist</button>}
        </div>
      </div>
    </div>
  )
}



