import React from "react";
import { CDBProgress, CDBCardBody, CDBIcon, CDBRating } from "cdbreact";
import "./RatingCard.css";

const RatingCard = () => {
  return (
    <div className="RatingCard-container">
      <div className="RatingCard" style={{ width: "25rem", height: "19rem"}}>
        <div className="ratingstar">
          <CDBRating />
        </div>
        <CDBCardBody  className="ratingcard-body">
          <h2 className="Card-title">Average Rating</h2>
          <h1>4.7</h1>

          <span className="text-muted">Based on 231,156 ratings</span>
          <div className="Ratingbars">
            <div className="d-flex align-items-center">
              <span>5</span>
              <CDBIcon fas icon="star" className="mr-3" />
              <CDBProgress value={50} colors="success" />
            </div>
            <div className="d-flex align-items-center">
              <span>4</span>
              <CDBIcon fas icon="star" className="mr-3" />
              <CDBProgress value={40} colors="warning" />
            </div>
            <div className="d-flex align-items-center">
              <span>3</span>
              <CDBIcon fas icon="star" className="mr-3" />
              <CDBProgress value={30} colors="primary" />
            </div>
            <div className="d-flex align-items-center">
              <span>2</span>
              <CDBIcon fas icon="star" className="mr-3" />
              <CDBProgress value={20} colors="dark" />
            </div>
            <div className="d-flex align-items-center">
              <span>1</span>
              <CDBIcon fas icon="star" className="mr-3" />
              <CDBProgress value={10} colors="danger" />
            </div>
          </div>
        </CDBCardBody>
      </div>
    </div>
  );
};

export default RatingCard;
