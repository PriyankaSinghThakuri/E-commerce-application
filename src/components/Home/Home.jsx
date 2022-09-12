import React from "react";
import "./Home.css";
import MegaDeal from "../MegaDeal/MegaDeal";
import NavBar from "../NavBar/NavBar";
import FlashSale from "../Products/FlashSale/FlashSale";
import Category_banners from "../Products/Category_banners/Category_banners";
import TopSeller from "../Products/TopSeller/TopSeller";
import Benefits from "../Benefits/Benefits";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <NavBar />
        <div className="megadeal-images">
          <MegaDeal />
        </div>
        <div className="banner-images">
          <img
            src={
              process.env.PUBLIC_URL + "/assets/home_images/offer_banner1.jpg"
            }
            alt="Responsive image"
            className="offer_banner"
          />
        </div>
        <div className="flash-sale">
          <div className="sale-title">24 HOUR FLASH SALE</div>
          <div className="flashsale-cards">
            <div className="Days">
              <div className="days-card">00</div>
              <div className="card-title">Days</div>
            </div>
            <div className="Hours">
              <div className="hours-card">17</div>
              <div className="card-title">Hours</div>
            </div>
            <div className="Minutes">
              <div className="minutes-card">57</div>
              <div className="card-title">Minutes</div>
            </div>
          </div>
        </div>
        <FlashSale />
        <Category_banners />
        <TopSeller />
        <Benefits />
        <Footer />
      </div>
    </>
  );
};

export default Home;
