import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth";
import { Cards } from "./Cards/DataCards";
import Tablechart from "./charts/Tablechart";
import PieChart from "./charts/piechart";
import RatingCard from "./Cards/RatingCard/RatingCard";
import CustomerCard from "./Cards/CustomerCard/CustomerCard";

const Dashboard = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignout = () => {
    auth.logout();
    navigate("/e-commerce-application");
  };
  return (
    <div className="dashboard-container">
      <div className="top-container">
        <h1 className="dashboard-title">Welcome {auth.user}</h1>
        <button onClick={handleSignout} className="signout-btn">
          Sign Out
        </button>
      </div>

      <Sidebar />
      <div className="dashboard-body">
        <div className="top-section">
          <Cards />
        </div>
        <div className="center-section">
          <div className="pie-chart">
            <PieChart />
          </div>
          <div className="line-chart">
            <Tablechart />
          </div>
        </div>
        <div className="bottom-section">
          <CustomerCard />
          <RatingCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
