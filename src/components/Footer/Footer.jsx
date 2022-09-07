import React, { Component } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      // start of footersection
      <div className="footerSection">
        <div className="footer-row">
          {/* for columns of footer */}

          <div className="footer-col">
            {/* start of services column */}
            <h4>The Gadget Zone</h4>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            {/* start of services column */}
          </div>
          <div className="footer-col">
            {/* start of Information column */}
            <div className="Information">
              <h4>Help</h4>
              <ul>
                <li>
                  <a href="">Payment</a>
                </li>
                <li>
                  <a href="#">Delivery</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            {/* end of Information column */}
          </div>
          <div className="footer-col">
            {/* start of Company column */}
            <div className="Company">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="">Shipping</a>
                </li>
                <li>
                  <a href="#">Discount Coupon</a>
                </li>
                <li>
                  <a href="#">Festival Offers</a>
                </li>
              </ul>
            </div>
            {/* start of Company column */}
          </div>
          <div className="footer-col">
            {/* start of follow us column */}
            <div className="socialmedia-icons">
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                </li>
                <li id="insta-icon">
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="#" id="LinkedIn-icon">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </li>
              </ul>
            </div>
            {/* start of follow us column */}
          </div>
        </div>
      </div>
      // end of footersection
    );
  }
}

export default Footer;
