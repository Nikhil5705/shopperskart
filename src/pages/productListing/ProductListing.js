import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./productListing.css";
import { CartContext } from '../../context/CartContext';
import { WishlistContext } from '../../context/WishlistContext';
import { useData } from '../../context/DataContext';
import { FilterContext } from '../../context/FilterContext';


export const ProductListing = () => {
  // const [priceFilter, setPriceFilter] = useState("");
  // const [ratingFilter, setRatingFilter] = useState(0);
  // const [categoryFilter, setCategoryFilter] = useState("");
  const {cartItem, cartHandler} = useContext(CartContext);
  const {priceFilter, setPriceFilter, ratingFilter, setRatingFilter, categoryFilter, setCategoryFilter} = useContext(FilterContext);

  const {wishlistItem, wishlistHandler} = useContext(WishlistContext);
  const {searchKeyword} = useContext(FilterContext)
  const {backendData} = useData()
  const navigate = useNavigate();

  const handlePriceFilter = (event) =>{
    setPriceFilter(event.target.value);
  };

  const handleClearAllFilters = () =>{
    setPriceFilter("");
    setRatingFilter(0);
    setCategoryFilter("")
  };

  const handleRatingFilter = (event) =>{
    setRatingFilter(event.target.value);
  };

  const handleCategoryFilter = (category) =>{
            setCategoryFilter(category)
          };

  const filteredProducts = backendData?.products?.sort((a, b) => {
        if (priceFilter === 'lowToHigh') {
          return a.price - b.price;
        } else if (priceFilter === 'highToLow') {
          return b.price - a.price;
        }
        return a._id - b._id;
      })
      .filter(({rating}) => rating >= ratingFilter)
      .filter(({ categoryName }) => categoryFilter === "" || categoryName === categoryFilter)
      .filter((product) => {
        const title = product.title.toLowerCase();
        return (
          searchKeyword === "" || title.includes(searchKeyword.toLowerCase())
        );
      })

  return (
    <div>
      <h1 className='heading'>All Products</h1>
      <div className='filter_main'> 
      <h2 className='filter_heading'>Filter by Price:</h2>
      <label className='filter_by_price'>
      <input type='radio' value="highToLow" checked={priceFilter === "highToLow"} onChange={handlePriceFilter} />High to Low </label>
      <label className='filter_by_price'>
      <input type='radio' value="lowToHigh" checked={priceFilter === "lowToHigh"} onChange={handlePriceFilter} />Low to High</label>
    </div>
    <div> 
      <h2 className='filter_heading'>Filter by Rating:</h2>
      <label className='filter_by_rating'>
      <input type='range' min={0} max={5} step={1} value={ratingFilter} onChange={handleRatingFilter} />
      </label>
    </div>
    <div>
    <h2 className='filter_heading'>Filter by Category:</h2>
   <input type="checkbox" checked={categoryFilter === "men"} onChange={() => handleCategoryFilter("men")} />
   <label className='filter_by_category'>Men's wear</label>
   </div>
 <div>
   <input type="checkbox" checked={categoryFilter === "women"} onChange={() => handleCategoryFilter("women")} />
   <label className='filter_by_category'>Women's Wear</label>
 </div>
 <div>
   <input type="checkbox" checked={categoryFilter === "shoe"} onChange={() => handleCategoryFilter("shoe")} />
   <label className='filter_by_category'>Shoe</label>
 </div>
    <div>
      <button onClick={handleClearAllFilters}>Clear All Filters</button>
    </div>

    <div>
    {filteredProducts?.map((item) =>{
      const {_id, title, price, rating, type, image} = item;
      const isItInCart = cartItem.find(prod => prod._id === _id)
      const isItInWishlist = wishlistItem.find(prod => prod._id === _id)
      return (
       <div key={_id} className='product_card' 
       >
        <img onClick={() => {navigate(`/singleproduct/${_id}`);}} className='prod_image' src={image} alt={title}/>
        <h1 className='prod_heading'>{title}</h1>
        <div className='prod_price'>${price}</div>
        <div className='prod_type'>{type}</div>
        <div className='prod_rating'>rating: {rating}</div>
        {isItInCart ? <button className='add_to_cart' onClick={() => {navigate(`/cart`);}}>Go To Cart</button> : <button className='add_to_cart' onClick={() =>{cartHandler(item)}}>Add To Cart</button>}
        {isItInWishlist ? <button className='add_to_wishlist' onClick={() => {navigate(`/wishlist`);}}>Go To Wishlist</button> : <button className='add_to_wishlist' onClick={() =>{wishlistHandler(item)}}>Add To Wishlist</button>}
       </div>
      )}) 
      } 
    </div>
    </div>
  )
}

