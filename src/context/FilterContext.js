import React, { createContext } from 'react'
import { useState } from 'react';


export const FilterContext = createContext();

export const FilterProvider = ({children}) => {
    const [priceFilter, setPriceFilter] = useState("");
    const [ratingFilter, setRatingFilter] = useState(0);
    const [categoryFilter, setCategoryFilter] = useState("");

  return (
    <div>
      <FilterContext.Provider value={{priceFilter, setPriceFilter, ratingFilter, setRatingFilter, categoryFilter, setCategoryFilter}}>
      {children}
      </FilterContext.Provider> 
          </div>
  )
}

