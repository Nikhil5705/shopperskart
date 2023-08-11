import React, { useContext, useEffect} from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { signIn, isLoggedIn} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
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

useEffect(()=>{if (isLoggedIn === true) {
    navigate("/");
  }},[isLoggedIn])

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
      
    </div>
  );
};
