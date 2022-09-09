import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password, username]);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        "https://paradoxbackend.herokuapp.com/users/register/",
        {
          password: password,
          email: email,
          username: username,
        }
      );
      alert("Successfully Signed up");
      localStorage.setItem("Login_details", JSON.stringify(res));
    } catch (error) {
      alert("Failed to signup");
    }
    console.log(email, password, username);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="signup-form">
      <h1 className="title">SignUp</h1>
      <p
        ref={errRef}
        className={errMsg ? "errMsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <form>
        <div className="username">
          <input
            type="text"
            required="required"
            ref={userRef}
            autoComplete="false"
            className="input-username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="email">
          <input
            type="email"
            required="required"
            ref={userRef}
            autoComplete="false"
            className="input-email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <input
            type="password"
            required="required"
            ref={userRef}
            autoComplete="false"
            className="input-password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="signup-btn" onClick={handleSignup}>
          Sign In
        </button>
        <div className="login-link">
          <p>
            Already have an account?
            <a href="/signin" className="login">
              Log In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
