import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import "./home.css"

export const Home = () => {
  const navigate = useNavigate(); 
  return (
    <div>
        
     <div className='category_head'> 
     <h1 className='category_heading'>Shop By Categories
     </h1>
         <NavLink to="/shoes" className='category_element'>Shoes</NavLink>
         <NavLink to="/menswear" className='category_element'>Men's Wear</NavLink>
         <NavLink to="/womenswear" className='category_element'>Women's wear</NavLink>
     </div>
     <div className='main_img'>
       <img onClick={() => navigate("/product")} src='https://res.cloudinary.com/donqbxlnc/image/upload/v1648837512/fashify/01042022-D-Unisex-topbannercarousel-p3-brands-4090_bwk2pu.jpg' alt='hero-image'/>
     </div>
     
    </div>
  )
}


