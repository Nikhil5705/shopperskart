import React, { useContext, useEffect} from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const { signIn, token } = useContext(AuthContext);
  
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();

    // toast.success("Logged In Successful !!",{autoClose: false, position: "top-center"})

    const email = event.target[0].value;
    const password = event.target[1].value;
     console.log(email)
    console.log(password)
    try {
      await signIn(email, password);
    } catch (error) {
      console.log("cant login", error);
    }
  };

useEffect(()=>{if (token === true) {
    navigate("/");
  }},[token])

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <h1>Sign In</h1>
        <label>
          Email
          <input type="text" required></input>
        </label>
        <label>
          Password
          <input type="password" required></input>
        </label>
        <button type="submit">Sign In</button>
      </form>
      <ToastContainer />
    </div>
  );
};
