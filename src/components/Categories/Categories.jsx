import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet } from "react-router-dom";
import "./Categories.css";
// import MobileandTablets from "../Categories/MobileAndTablets/MobileAndtablets";
// import ComputerAndLaptops from "../Categories/ComputersandLaptops/ComputersandTablets";
// import HomeAppliances from "../Categories/MobileAndTablets/MobileAndtablets";
// import SmartWatches from "../Categories/SmartWatches/SmartWatches";

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
          <Link to="/signin">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/categories/mobileandtablets.png"
              }
              alt="Responsive image"
              className="mobileandtabletsimage"
            />
            <h5>Mobile & Tablets</h5>
          </Link>
          {/* <MobileandTablets/> */}
        </div>
        <div className="Category-Cards">
          <Link to="/signin">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/categories/computersandlaptops.png"
              }
              alt="Responsive image"
              className="computersandlaptopsimage"
            />
            <h5>Computers & Laptops</h5>
          </Link>
          {/* <ComputerAndLaptops/> */}
        </div>
        <div className="Category-Cards">
          <Link to="/signin">
            <img
              src={
                process.env.PUBLIC_URL + "/assets/categories/homeappliances.png"
              }
              alt="Responsive image"
              className="homeappliancesimage"
            />
            <h5>Home appliances</h5>
          </Link>
          {/* <HomeAppliances/> */}
        </div>
        <div className="Category-Cards">
          <Link to="/signin">
            <img
              src={process.env.PUBLIC_URL + "/assets/categories/smartwatch.png"}
              alt="Responsive image"
              className="smartwatchimage"
            />
            <h5>SmartWatches</h5>
          </Link>
          {/* <SmartWatches/> */}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Categories;
