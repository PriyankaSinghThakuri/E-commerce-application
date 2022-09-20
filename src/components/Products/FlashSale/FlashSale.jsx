import React from "react";
import "./FlashSale.css";
import { Tag } from "sale-tag";
import flashsaleproducts from "./flashsaleprod.json";

const FlashSale = () => {
  return (
    <div className="flashsale-container">
      {flashsaleproducts.map((data, key) => {
        return (
          <div className="flashsale-card" key={key}>
            <Tag text={"SALE"} disable={false} />
            <img
              src={data.image}
              alt="Responsive image"
              className="flashsale_img"
            />

            <p className="product_descp">
              {data.prodname}
              <br />
              <del>{data.price_beforesale}</del>
              {data.price_aftersale}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FlashSale;
