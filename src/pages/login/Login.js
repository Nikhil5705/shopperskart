import React, { useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "./Login.css";

import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const { signIn, token } = useContext(AuthContext);
  
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    toast.success("Logged In Successful !!")
    const email = event.target[0].value;
    const password = event.target[1].value;

    try {
      await signIn(email, password);
    } catch (error) {
      console.log("cant login", error);
    }
  };

  const handleLoginAsGuest = async () => {
    const guestEmail = "adarshbalika@gmail.com";
    const guestPassword = "adarshbalika";
   
    try {
      await signIn(guestEmail, guestPassword);
      toast.success("Logged In as Guest!!");
    } catch (error) {
      console.log("cant login", error);
    }
  };

useEffect(()=>{if (token === true) {
    navigate("/");
  }},[token])

  return (
    <div  className="login-form-container">
      <form  className="login-form" onSubmit={handleSignIn}>
        <h1 className="login-heading">Login</h1>
        <label className="login-label">
          Email
          <input className="login-input" type="text" required></input>
        </label>
        <label className="login-label">
          Password
          <input className="login-input" type="password" required></input>
        </label>
        <button className="login-button" onClick={handleLoginAsGuest}>Login as a Guest</button>
       
        <button className="login-button" type="submit">Login</button>
      </form>
      <div>Don't have an account? <Link to="/signup" className="signup-link-text">Sign Up</Link></div>
    </div>
  );
};
