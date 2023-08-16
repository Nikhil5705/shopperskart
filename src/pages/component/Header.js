import React, { useContext } from 'react'
import { NavLink, useNavigate } from "react-router-dom";

import "./Header.css";
import { AuthContext } from '../../context/AuthContext';
import { FilterContext } from '../../context/FilterContext';

export const Header = () => {
  const { token, handleLogout } = useContext(AuthContext);
  const {searchKeyword, setSearchKeyword} = useContext(FilterContext)
  const navigate = useNavigate(); 

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div className="navbar">
       <div className="header_home">
        <NavLink to="/">ShoppersKart</NavLink>
        </div> 
        <div className="header_search">
          <input
          type="text"
          value={searchKeyword}
          onChange={handleSearch}
          placeholder="Search..."
          />
        </div>
        <div className="header_elements">
         <NavLink className="nav_elements" to="/product">Products</NavLink>
         <NavLink className="nav_elements" to="/wishlist">Wishlist</NavLink>
         <NavLink className="nav_elements" to="/cart">Cart</NavLink> 
         <NavLink className="nav_elements" to="/profile">Profile</NavLink> 
         <button className="nav_elements" onClick={token ? handleLogout :handleLogin}>{token ? "Logout" : "Login"}</button>

        </div>
        
    </div>
  )
}


