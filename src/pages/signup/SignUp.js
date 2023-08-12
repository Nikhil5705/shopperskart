import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const { signUp, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      await signUp(userData);
      navigate("/userprofile");
    } catch (error) {
      console.log("Can't sign up", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
      {token && (
        <div>
          <h2>Sign up successful!</h2>
        </div>
      )}
    </div>
  );
};