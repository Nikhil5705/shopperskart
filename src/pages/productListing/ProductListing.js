import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./productListing.css";
import { CartContext } from '../../context/CartContext';
import { WishlistContext } from '../../context/WishlistContext';

export const ProductListing = ({products}) => {
  const [priceFilter, setPriceFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const {cartHandler} = useContext(CartContext);
  const {wishlistHandler} = useContext(WishlistContext);
  const navigate = useNavigate();


  const handlePriceFilter = (event) =>{
    setPriceFilter(event.target.value);
  };

  const handleClearAllFilters = () =>{
    setPriceFilter("");
    setRatingFilter(0);
  };

  const handleRatingFilter = (event) =>{
    setRatingFilter(event.target.value);
  };

  const filteredProducts = products.sort((a, b) => {
        if (priceFilter === 'lowToHigh') {
          return a.price - b.price;
        } else if (priceFilter === 'highToLow') {
          return b.price - a.price;
        }
        return a._id - b._id;
      })
      .filter(({rating}) => rating >= ratingFilter);
  return (
    <div>
      <h1 className='heading'>All Products</h1>
      <div> 
      <h2>Filter by Price:</h2>
      <label>
      <input type='radio' value="highToLow" checked={priceFilter === "highToLow"} onChange={handlePriceFilter} />High to Low </label>
      <label>
      <input type='radio' value="lowToHigh" checked={priceFilter === "lowToHigh"} onChange={handlePriceFilter} />Low to High</label>
    </div>
    <div> 
      <h2>Filter by Rating:</h2>
      <label>
      <input type='range' min={0} max={5} step={1} value={ratingFilter} onChange={handleRatingFilter} />
      </label>
    </div>
    <div>
      <button onClick={handleClearAllFilters}>Clear All Filters</button>
    </div>
    <div>
    {filteredProducts.map((item) =>{
      const {_id, title, price, rating, type, image} = item;
      return (
       <div key={_id} className='product_card' 
       >
        <img onClick={() => {navigate(`/singleproduct/${_id}`);}} className='prod_image' src={image} alt={title}/>
        <h1 className='prod_heading'>{title}</h1>
        <div className='prod_price'>${price}</div>
        <div className='prod_type'>{type}</div>
        <div className='prod_rating'>rating: {rating}</div>
        <button className='add_to_cart' onClick={() =>{cartHandler(item)}}>Add To Cart</button>
        <button className='add_to_wishlist' onClick={() =>{wishlistHandler(item)}}>Add To Wishlist</button>
       </div>
      )}) 
      } 
    </div>
    </div>
  )
}

