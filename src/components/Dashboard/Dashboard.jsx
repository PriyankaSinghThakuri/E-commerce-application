import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import CustomerCard from "../CustomerCard/CustomerCard";
import RatingCard from "../RatingCard/RatingCard";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="Cards">
        <CustomerCard />
        <RatingCard />
      </div>
    </div>
  );
};

export default Dashboard;
