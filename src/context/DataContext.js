
import React, { createContext, useContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) =>{
    const [backendData, setBackendData] = useState()
    const [userData, setUserData] = useState(null);

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

 useEffect(() => {
   const token = localStorage.getItem("token");
   const storedUserData = localStorage.getItem("user");
   if (token && storedUserData) {
     const user = JSON.parse(storedUserData); // Parse stored user data
     setUserData(user);
   }
 }, []);

    return (
       
          <DataContext.Provider value={{backendData, userData }}>
          {children}
          </DataContext.Provider>
      )
}



export const useData = () =>{
    return useContext(DataContext)
}

