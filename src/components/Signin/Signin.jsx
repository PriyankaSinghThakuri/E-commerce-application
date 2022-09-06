import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";
import axios from "axios";

const Signin = () => {
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        "https://paradoxbackend.herokuapp.com/users/login/",
        {
          email: email,
          password: password,
        }
      );

      alert("Successfully Logged in");
      // 👇️ navigate to /profile
      navigate("/");
      // setting the data to localstorage where first parameter is name of data and 2nd parameter is data from response
      localStorage.setItem("Login_details", JSON.stringify(res.data));
    } catch (error) {
      alert("Failed to login");
    }
    console.log(email, password);
    setEmail("");
    setPassword("");

    // consoling the tokens
    const token = localStorage.getItem("Login_details");
    console.log(token);
  };
  return (
    <div className="login-form">
      <h1 className="title">Login</h1>
      <p
        ref={errRef}
        className={errMsg ? "errMsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <form>
        <div className="email">
          <input
            type="email"
            required="required"
            ref={userRef}
            autoComplete="false"
            className="input-email"
            placeholder="Email"
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
        <button className="login-btn" onClick={handlelogin}>
          Login
        </button>
        <div className="register-link">
          <p>
            Don't have an account?
            <a href="/signup" className="signup">
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
