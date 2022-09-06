import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="TopImg-container">
        <img
          src={process.env.PUBLIC_URL + "/assets/saleposter.jpg"}
          // class="img-fluid"
          alt="Responsive image"
          className="saleimage"
        />
      </div>
      {/* <h1>Hello from Dashboard</h1> */}
    </div>
  );
};

export default Dashboard;
