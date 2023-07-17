import React from 'react'
import { NavLink } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  return (
    <div className="navbar">
       <div className="header_home">
        <NavLink to="/">ShoppersKart</NavLink>
        </div> 
        <div className="header_search">
          <input
            placeholder="Search..."
          />
        </div>
        <div className="header_elements">
         <NavLink className="nav_elements" to="/product">Products</NavLink>
         <NavLink className="nav_elements" to="/wishlist">Wishlist</NavLink>
         <NavLink className="nav_elements" to="/cart">Cart</NavLink> 
        </div>
        
    </div>
  )
}


