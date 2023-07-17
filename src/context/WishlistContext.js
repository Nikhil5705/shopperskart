import React, { createContext, useState } from 'react'

export const WishlistContext = createContext();
export const WishlistProvider = ({children}) => {
    const [wishlistItem, setWishlistItem] = useState([]);
    const wishlistHandler = (item) =>{
       setWishlistItem(wishlistItem => [...wishlistItem, item])
    }
  return (
    <div>
      <WishlistContext.Provider value={{wishlistItem, wishlistHandler}}>
      {children}
      </WishlistContext.Provider>
    </div>
  )
}

