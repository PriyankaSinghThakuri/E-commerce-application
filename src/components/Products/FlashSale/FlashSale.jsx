import React from "react";
import "./FlashSale.css";
import { Tag } from "sale-tag";

const FlashSale = () => {
  return (
    <div className="flashsale-container">
      <div className="flashsale-card">
        <Tag text={"SALE"} disable={false} />
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/produtcs_images/flashsale_images/flashSale1.jpg"
          }
          // class="img-fluid"
          alt="Responsive image"
          className="flashsale_img"
        />

        <p className="product_descp">
          Tulip Dispenser Pure Hot & <br />
          Normal Top -Twd-T02 & Tulip
          <br /> Mixer Grinder Nano 2Jar-450W
          <br />
          <del>रू 8880</del> रू 6583
        </p>
      </div>
      <div className="flashsale-card">
        <Tag text={"SALE"} disable={false} />
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/produtcs_images/flashsale_images/flashSale2.jpg"
          }
          // class="img-fluid"
          alt="Responsive image"
          className="flashsale_img"
        />
        <p className="product_descp">
          DIZO Smart Watch 2 (DW2118)
          <br />
          1.6'' inch full Body Screen
          <br />
          <del>रू 5000</del> रू 4799
        </p>
      </div>
      <div className="flashsale-card">
        <Tag text={"SALE"} disable={false} />
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/produtcs_images/flashsale_images/flashSale3.jpg"
          }
          // class="img-fluid"
          alt="Responsive image"
          className="flashsale_img"
        />
        <p className="product_descp">
          Imars VSUN 6 / 1 GB RAM / 16
          <br />
          GB ROM - 2200 mAh Battery
          <br /> Set Of 2
          <br />
          <del>रू 13999</del> रू 8000
        </p>
      </div>
      <div className="flashsale-card">
        <Tag text={"SALE"} disable={false} />
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/produtcs_images/flashsale_images/flashSale4.png"
          }
          // class="img-fluid"
          alt="Responsive image"
          className="flashsale_img"
        />
        <p className="product_descp">
          Get Havells Hand Blender Free
          <br />
          on GEM 6.8 KG Semi Automati
          <br /> Washing Machine (Combo)
          <br />
          <del>रू 22500</del> रू 19990
        </p>
      </div>
      <div className="flashsale-card">
        <Tag text={"SALE"} disable={false} />
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/produtcs_images/flashsale_images/flashSale5.jpg"
          }
          // class="img-fluid"
          alt="Responsive image"
          className="flashsale_img"
        />
        <p className="product_descp">
          Aura 1600 Watt Vacuum
          <br />
          <del>रू 8000</del> रू 7800
        </p>
      </div>
      
    </div>
  );
};

export default FlashSale;
