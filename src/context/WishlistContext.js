import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';

export const WishlistContext = createContext();
export const WishlistProvider = ({children}) => {
    const [wishlistItem, setWishlistItem] = useState([]);
    const wishlistHandler = (item) =>{
       setWishlistItem(wishlistItem => [...wishlistItem, item])
       toast.success("Product added to Wishlist");
const findProd = wishlistItem.find((checkProd)=> checkProd._id === item._id)

if (findProd) {
  setWishlistItem(wishlistItem.map(wishlistProd =>{
    if(wishlistProd._id === item._id){
      return {...wishlistProd}
    }else{
      return{
        ...wishlistProd
      }
    }
  }))
}else{
  setWishlistItem([...wishlistItem, {...item}])
}
    }

    const removeFromWishlistHandler = (item) => {
      toast.success("Product removed from Wishlist");
      const updatedWishlist = wishlistItem.filter(
        (wishlistItem) => wishlistItem._id !== item._id
      );
      setWishlistItem(updatedWishlist);
    };
  return (
    <div>
      <WishlistContext.Provider value={{wishlistItem, wishlistHandler, removeFromWishlistHandler}}>
      {children}
      </WishlistContext.Provider>
    </div>
  )
  }

