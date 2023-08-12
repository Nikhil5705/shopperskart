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
      console.log(res.data)
    
      setUser(foundUser);
      setToken(encodedToken);
      if(location?.state?.from?.pathname)
      navigate(location?.state?.from?.pathname);
        else navigate("/", { replace: true });
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
      , user, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
