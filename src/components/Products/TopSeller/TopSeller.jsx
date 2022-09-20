import React from "react";
import "./TopSeller.css";
import Topsellerprod from "./Topseller_products.json";

const TopSeller = () => {
  return (
    <div className="topseller-container">
      <h2>Top Seller of Gadget Zone</h2>
      <div className="line">
        {Topsellerprod.map((data, key) => {
          return (
            <div className="topseller-card" key={key}>
              <img
                src={data.image}
                // class="img-fluid"
                alt="Responsive image"
                className="topseller_img"
              />
              <p style={{ marginTop: "3rem", color: "purple" }}>
                {data.prodname}
                <br />
                {data.price}
              </p>
            </div>
          );
        })}
      </div>
      <div className="line" style={{ marginTop: "5rem" }}>
        {Topsellerprod.map((data, key) => {
          return (
            <div className="topseller-card" key={key}>
              <img
                src={data.image}
                // class="img-fluid"
                alt="Responsive image"
                className="topseller_img"
              />
              <p style={{ marginTop: "3rem", color: "purple" }}>
                {data.prodname}
                <br />
                {data.price}
              </p>
            </div>
          );
        })}
      </div>
      <div className="line" style={{ marginTop: "5rem" }}>
        {Topsellerprod.map((data, key) => {
          return (
            <div className="topseller-card" key={key}>
              <img
                src={data.image}
                // class="img-fluid"
                alt="Responsive image"
                className="topseller_img"
              />
              <p style={{ marginTop: "3rem", color: "purple" }}>
                {data.prodname}
                <br />
                {data.price}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopSeller;
