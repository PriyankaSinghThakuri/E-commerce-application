import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="Categories">
      <h3>
        <img
          src={process.env.PUBLIC_URL + "/assets/horizontalLine.png"}
          className="horizontalline"
        />
        Categories
      </h3>
      <div className="categories-container">
        <div className="Category-Cards">
          <a href="/signin">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/categories/mobileandtablets.png"
              }
              alt="Responsive image"
              className="mobileandtabletsimage"
            />
            <h5>Mobile & Tablets</h5>
          </a>
        </div>
        <div className="Category-Cards">
          <a href="/signin">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/categories/computersandlaptops.png"
              }
              alt="Responsive image"
              className="computersandlaptopsimage"
            />
            <h5>Computers & Laptops</h5>
          </a>
        </div>
        <div className="Category-Cards">
          <a href="/signin">
            <img
              src={
                process.env.PUBLIC_URL + "/assets/categories/homeappliances.png"
              }
              alt="Responsive image"
              className="homeappliancesimage"
            />
            <h5>Home appliances</h5>
          </a>
        </div>
        <div className="Category-Cards">
          <a href="/signin">
            <img
              src={process.env.PUBLIC_URL + "/assets/categories/smartwatch.png"}
              alt="Responsive image"
              className="smartwatchimage"
            />
            <h5>SmartWatches</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
