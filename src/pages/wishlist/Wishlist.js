import React, { useContext } from 'react'

import { WishlistContext } from '../../context/WishlistContext';

export const Wishlist = () => {
const { wishlistItem } = useContext(WishlistContext);

  return (
    <div>
      {wishlistItem.map((item) =>{
      const {_id, title, price, rating, type, image, quantity} = item;
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
            <button className='remover_from_cart'>Remove</button>
          </div>
        </div>
      )}) 
      } 
    </div>
  )
}

