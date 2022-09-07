import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import CustomerCard from "../CustomerCard/CustomerCard";
import RatingCard from "../RatingCard/RatingCard";
import Banners from "../Banners/Banners";
import Categories from "../Categories/Categories";
import Benefits from "../Benefits/Benefits";
import Footer from "../Footer/Footer"

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="Img-container">
        <img
          src={process.env.PUBLIC_URL + "/assets/GadgetZone.jpg"}
          // class="img-fluid"
          alt="Responsive image"
          className="saleimage"
        />
        <Banners />
      </div>
      <div className="Cards">
        <CustomerCard />
        <RatingCard />
      </div>
      <div className="Categories">
      <Categories/>
      </div>
      <div className="Benefits">
      <Benefits/>
      </div>
      <div className="Footer">
      <Footer/>
      </div>
    </div>
  );
};

export default Dashboard;
