import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { faCartPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  var [toggle, settoggle] = React.useState(0.5);

  function makeBlur() {
    if (toggle == 0.5) {
      settoggle(1);
    } else {
      settoggle(0.5);
    }
    document.body.style.opacity = toggle;
  }
  return (
    <div className="nav">
      {/* navbar starts */}
      <nav className="navbar fixed-bottom navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          {/* for the menu button */}
          <button
            onClick={makeBlur}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="False"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* navbar components */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <NavLink to="#" className=" nav-link active">
                SELL ON GADGET ZONE
                <span className="px-2" id="gadgetzone_new">
                  new
                </span>
              </NavLink>
              <NavLink to="#" className="nav-link active">
                CUSTOMER CARE
              </NavLink>
              <NavLink to="#" className="nav-link active">
                TRACK MY ORDER
              </NavLink>
              <NavLink to="/signin" className="nav-link active">
                LOG IN
              </NavLink>
              <NavLink to="/signup" className="nav-link active">
                SIGN UP
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      {/* navbar ends */}
      <div className="bottom-navbar_components">
        <img
          src={process.env.PUBLIC_URL + "/assets/logo.jpg"}
          alt="Responsive image"
          className="logo"
        />
        <div className="search-bar">
          <input
            type="text"
            id="header-search"
            placeholder="Search in Gadget Zone"
            name="search"
          />
          <button type="submit" className="search-btn">
            <FontAwesomeIcon
              icon={faSearch}
              className="search-icon"
              size="2x"
            />
          </button>
          <FontAwesomeIcon icon={faCartPlus} className="cart-icon" size="2x" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
