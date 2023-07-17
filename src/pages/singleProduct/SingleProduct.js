import { useParams } from "react-router";
import { useContext } from "react";

import "./SingleProduct.css";
import { products } from "../../backend/db/products";
import { CartContext } from "../../context/CartContext";

export const SingleProduct = () => {
  const {cartHandler} = useContext(CartContext)
  const {productId} = useParams();
  const product = products.find((item) => item._id === productId);
  if (!product) {
    return <div>Product not found.</div>;
  }

  const { title, price, description, image, rating, size, categoryName, type } = product;

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
          <button className='add_to_cart' onClick={cartHandler} >Add To Cart</button>
          <button className='add_to_wishlist'>Add To Wishlist</button>
        </div>
      </div>
    </div>
  )
}



