import "./Header.css";
import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="navbar">
      
       <div className="header_home">
        <Link to="/">ShoppersKart</Link>
        </div> 
        <div className="header_search">
          <input
            placeholder="Search..."
          />
        </div>
        <div className="header_elements">
         <Link to="/product">Products</Link>
         <Link to="/wishlist">Wishlist</Link>
         <Link to="/cart">Cart</Link> 
        </div>
        
    </div>
  )
}


