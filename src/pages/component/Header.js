import React, { useContext } from 'react'
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import "./Header.css";
import { AuthContext } from '../../context/AuthContext';

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate(); 

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate(location?.state?.from?.pathname);
  };

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
         <button className="nav_elements" onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>

        </div>
        
    </div>
  )
}


