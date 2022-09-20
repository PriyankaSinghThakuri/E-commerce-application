import React from "react";
import { faBarChart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DataCards.css";
import data from "./demo-data/card-data.json";

export const Cards = () => {
  console.log(data);
  return (
    <div className="card">
      <div className="card-cont">
        <h5>{data[0].heading}</h5>
        <div className="card-body">
        <FontAwesomeIcon icon={faBarChart} className="baricon" size="2x" style={{color: "purple"}}/>
          <span
            style={{
              backgroundColor: "#E8E8E8",
              borderRadius: "10px",
              margin: "1rem",
              color: "purple",
              padding: "5px"
            }}
          >
            {data[0].percent}
          </span>
        </div>
      </div>
      <div className="card-cont">
        <h5>{data[1].heading}</h5>
        <div className="card-body">
          <FontAwesomeIcon icon={faBarChart} className="baricon" size="2x" style={{color: "green"}}/>
          <span
            style={{
              backgroundColor: "#E8E8E8",
              borderRadius: "9px",
              margin: "1rem",
              color: "green",
              padding: "5px"
            }}
          >
            {data[1].percent}
          </span>
        </div>
      </div>
      <div className="card-cont">
        <h5>{data[2].heading}</h5>
        <div className="card-body">
          <FontAwesomeIcon icon={faBarChart} className="baricon" size="2x" style={{color: "blue"}}/>
          <span
            style={{
              backgroundColor: "#E8E8E8",
              borderRadius: "9px",
              margin: "1rem",
              color: "purple",
              padding: "5px"
            }}
          >
            {data[2].percent}
          </span>
        </div>
      </div>
      <div className="card-cont">
        <h5>{data[3].heading}</h5>
        <div className="card-body">
          <FontAwesomeIcon icon={faBarChart} className="baricon" size="2x" style={{color: "orange"}}/>
          <span
            style={{
              backgroundColor: "#E8E8E8",
              borderRadius: "9px",
              margin: "1rem",
              color: "purple",
              padding: "5px"
            }}
          >
            {data[3].percent}
          </span>
        </div>
      </div>
    </div>
  );
};
