import React from "react";
import "./Benefits.css";

const Benefits = () => {
  return (
    <div className="benefits">
      {/* <!-- Benefits --> */}
      <div className="benefits-title">
        <img src={process.env.PUBLIC_URL + "/assets/horizontalLine.png"} 
        className="horizontalLine"/>
        <h2>
          Benefits you get when
          <br />
          using our services
        </h2>
      </div>
      <div className="benefits-body">
        <div className="quality-shipping-warranty">
          <div className="row">
            <div className="column">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/benefits/qualityicon.png"
                }
              />
            </div>

            <div className="quality">
              <h1>Best Quality</h1>
              <p className="text-muted">
                All of our furniture uses the best
                <br />
                materials and choices for our customers.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/benefits/freeshipping.png"
                }
              />
            </div>

            <div className="shipping">
              <h1>Free Shipping</h1>
              <p className="text-muted">
                Free Shipping everytime you
                <br />
                buy furniture from us without exception
              </p>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <img
                src={process.env.PUBLIC_URL + "/assets/benefits/warranty.png"}
              />
            </div>

            <div className="warranty">
              <h1>Warranty</h1>
              <p className="text-muted">
                Every time you buy our furniture <br />
                products,you will get a warranty without exception
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
