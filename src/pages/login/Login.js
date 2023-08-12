import React, { useContext, useEffect} from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

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

useEffect(()=>{if (token === true) {
    navigate("/");
  }},[token])

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <h1>Login</h1>
        <label>
          Email
          <input type="text" required></input>
        </label>
        <label>
          Password
          <input type="password" required></input>
        </label>
        <button type="submit">Sign In</button>
        <button type="submit">Login as a Guest</button>
      </form>
      <div>Don't have an account? <Link to="/signup">Sign Up</Link></div>
    </div>
  );
};
