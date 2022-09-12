import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import "./Signup.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

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
    <div className="signup">
      <h2 className="title">New Customer Registration</h2>
      <p style={{ textAlign: "center", marginLeft: "0.5rem" }}>
        Create an account to experience faster shopping
      </p>
      <div className="signup-form">
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
            Sign Up
          </button>
          <div className="login-link">
            <p>
              Already have an account?
              <a href="/signin">
                Log In
              </a>
            </p>
          </div>
          <h4 className="text-muted">Or Sign Up with</h4>
          <div className="signin-icons">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="mediaicon"
              size="2x"
            />
            <FontAwesomeIcon icon={faGoogle} className="mediaicon" size="2x" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
