
import React, { createContext, useContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) =>{
    const [backendData, setBackendData] = useState()
    const getData = async() => {

        try {
            const res = await fetch("/api/products")
            const products = await res.json()
            setBackendData(products)
        } catch (error) {
            console.log(error)
        }
    }
 useEffect(()=>{getData()},[])
    return (
       
          <DataContext.Provider value={{backendData}}>
          {children}
          </DataContext.Provider>
      )
}
export const useData = () =>{
    return useContext(DataContext)
}