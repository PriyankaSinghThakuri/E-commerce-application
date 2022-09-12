import React from "react";
import "./Category_banners.css";

const Category_banners = () => {
  return (
    <div className="category_banners-container">
      <div className="smartphone">
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/produtcs_images/CategoriesBanner_images/smartphone.jpg"
          }
          // class="img-fluid"
          alt="Responsive image"
          className="smartphone-img"
        />
      </div>
      <div className="appliances">
        <div className="large-home-appliances">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/produtcs_images/CategoriesBanner_images/largehomeappliance.jpg"
            }
            // class="img-fluid"
            alt="Responsive image"
            className="largehomeappliances-img"
          />
        </div>
        <div className="home-appliances">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/produtcs_images/CategoriesBanner_images/smallhomeappliances.jpg"
            }
            // class="img-fluid"
            alt="Responsive image"
            className="samllappliances-img"
          />
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/produtcs_images/CategoriesBanner_images/juicerandmixer.jpg"
            }
            // class="img-fluid"
            alt="Responsive image"
            className="juicer-img"
          />
        </div>
        <div className="washing-machine">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/produtcs_images/CategoriesBanner_images/washingmachine.jpg"
            }
            // class="img-fluid"
            alt="Responsive image"
            className="washingmachine-img"
          />
        </div>
      </div>
      <div className="TV-appliances">
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/produtcs_images/CategoriesBanner_images/TV.jpg"
          }
          // class="img-fluid"
          alt="Responsive image"
          className="tv-img"
        />
      </div>
    </div>
  );
};

export default Category_banners;
