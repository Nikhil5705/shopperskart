import React from 'react'
import "./Footer.css"
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
   <div className='footer_wrapper'>
    <div className='footer_head'>
      <h1>ShoppersKart</h1>
      <div className='footer_tag'>A store that sells not just outfits but a trend.</div>
      <div className='footer_tag'>Connect me on 👇🏻</div>
      <NavLink className='links' to="https://www.linkedin.com/in/nikhil-verma-0b3281215/">LinkedIn</NavLink>
      <NavLink className='links' to="https://github.com/Nikhil5705">Github</NavLink>
      <NavLink className='links' to="https://twitter.com/Nikhil5705">Twitter</NavLink>
    </div>
   </div>
  )
}
