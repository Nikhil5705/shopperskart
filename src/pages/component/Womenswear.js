import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import "./Style.css";
import { CartContext } from '../../context/CartContext';
import { useData } from '../../context/DataContext';

export const Womenswear = () => {
  const [priceFilter, setPriceFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const {cartItem, cartHandler} = useContext(CartContext);
  const {backendData} = useData();

  const navigate = useNavigate();

  const filteredProd = backendData?.products?.filter(product => product.categoryName === "women");

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

  const filteredProducts = filteredProd?.sort((a, b) => {
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
      <h1 className='heading'>Women's Wear</h1> 
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

    {filteredProducts?.map((item) =>{
      const {_id, title, price, rating, type, image} = item;
      const isItInCart = cartItem.find(prod => prod._id === _id)
      return (
       <div key={_id} className='product_card'>
        <img onClick={() => {navigate(`/singleproduct/${_id}`);}} className='prod_image' src={image}/>
        <h1 className='prod_heading'>{title}</h1>
        <div className='prod_price'>${price}</div>
        <div className='prod_type'>{type}</div>
        <div className='prod_rating'>rating: {rating}</div>
        {isItInCart ? <button className='add_to_cart' onClick={() => {navigate(`/cart`);}}>Go To Cart</button> : <button className='add_to_cart' onClick={() =>{cartHandler(item)}}>Add To Cart</button>}
        <button className='add_to_wishlist'>Add To Wishlist</button>
       </div>
      )}) 
      } 
    </div>
  )
}