import React from "react";
import "./CustomerCard.css";
import { faArrowUp, faGlobe, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomerCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-body">
        <FontAwesomeIcon icon={faPeopleGroup} className="peopleicon" size="2x"/>
          <div className="card-title">Total Customers</div>
          <h1>1,057,891</h1>
          <span>Dec 2020 - Sep 2022.</span>
          <FontAwesomeIcon icon={faGlobe} className="globeicon" /> WorldWide
          <br />
          <FontAwesomeIcon icon={faArrowUp} className="arrowicon" />
          <a href="/" style={{padding: "5px"}}>27.4% </a>since last quarter<br/>
          <h5 style={{ paddingTop: "0.8rem" }}>
            Be a Part of "The Gadget Zone"
          </h5>
          <a href="/signup" style={{ fontSize: "20px" }}>
            SignUP
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
