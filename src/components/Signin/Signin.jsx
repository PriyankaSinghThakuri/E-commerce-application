import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth";
import "./Signin.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const Signin = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      email: "admin1@gmail.com",
      password: "admin123",
    },
    {
      email: "admin2@gmail.com",
      password: "admin456",
    },
  ];
  const errors = {
    Email: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { Email, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.email === Email.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        navigate("/dashboard");
        console.log(email, password);
        setEmail("");
        setPassword("");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "Email", message: errors.Email });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // useEffect(() => {
  //   setError("");
  // }, [email, password]);

  // const handlelogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     alert("Successfully Logged in");
  //     auth.login(email);
  //     // 👇️ navigate to /dashboard
  //     navigate("/dashboard");
  //   } catch (error) {
  //     alert("Failed to login");
  //   }
  //   console.log(email, password);
  //   setEmail("");
  //   setPassword("");
  // };

  return (
    <div className="login" onSubmit={handleSubmit}>
      <h2 className="title">Login</h2>
      <p style={{ textAlign: "center", marginLeft: "0.5rem" }}>
        If you have an account, sign in with your email address.
      </p>
      <div className="login-form">
        <form>
          <h4 className="text-muted">Sign In</h4>
          <div className="signin-icons">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="mediaicon"
              size="2x"
            />
            <FontAwesomeIcon icon={faGoogle} className="mediaicon" size="2x" />
          </div>
          <h4 className="text-muted"> Or Sign in using</h4>
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
            {renderErrorMessage("Email")}
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
            {renderErrorMessage("pass")}
          </div>
          <button className="login-button">Log In</button>
          <div className="register-link">
            <p>
              Don't have an account?
              <NavLink to="/signup">Sign Up</NavLink>
            </p>
          </div>
        </form>
        <button className="Back-btn" onClick={() => navigate(-1)}>
          <FontAwesomeIcon
            icon={faBackward}
            className="backwardicon"
            size="1x"
          />
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Signin;
