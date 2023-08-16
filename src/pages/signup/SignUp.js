import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./SignUp.css";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

export const SignUp = () => {
  const { signUp, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

  if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      await signUp(userData);
      navigate("/");
    } catch (error) {
      console.log("Can't sign up", error);
    }
  };

  return (
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={handleSignUp}>
        <h1 className="signup-heading" >Sign Up</h1>
        <label className="signup-label">
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required className="signup-input"
          />
        </label>
        <label className="signup-label">
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required className="signup-input"
          />
        </label>
        <label className="signup-label">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required className="signup-input"
          />
        </label>
        <label className="signup-label">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required className="signup-input"
          />
        </label>
        <label  className="signup-label">
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required className="signup-input"
          />
        </label>
        <button className="signup-btn" type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link className="login-link" to="/login">Login</Link></p>
      {token && (
        <div>
          <h2>Sign up successful!</h2>
        </div>
      )}
    </div>
  );
};