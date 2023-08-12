import { createContext, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export  function AuthProvider ({ children }) {
 
  
  const [token, setToken] = useState(false);
  const [user, setUser] = useState({});
 const navigate = useNavigate();
  const location = useLocation();

  
  const signIn = async (email, password) => {
    console.log(email)
    console.log(password)

    try {
      const res = await axios?.post("api/auth/login", { email, password });
      const { encodedToken, foundUser } = res.data;
      localStorage.setItem("token", encodedToken);
      
      setUser(foundUser);
      setToken(encodedToken);
      if(location?.state?.from?.pathname)
      navigate(location?.state?.from?.pathname);
        else navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async (userData) => {
    try {
      const res = await axios.post("api/auth/signup", userData);
      const { encodedToken, createdUser } = res.data;
      localStorage.setItem("token", encodedToken);
      localStorage.setItem("user", JSON.stringify(createdUser)); // Store user data as a string
      setUser(createdUser);
      setToken(encodedToken);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () =>{
    setUser(null)
    setToken(null)
    localStorage.removeItem("token")
    navigate("/")
}
  return (
    <AuthContext.Provider
      value={{ signIn
        , token, setToken
      , user, handleLogout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
