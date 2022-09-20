import React from "react";

export const Trackorder = () => {
  const mystyle = {
    padding: "10px",
    borderRadius: "5px",
  };
  return (
    <div
      className="App d-flex flex-column align-items-center"
      style={{ height: "15rem", width: "16rem" }}
    >
      <div className="trackBox d-flex flex-column" style={mystyle}>
        <h1 style={{ fontSize: "22px", marginTop: "-1rem" }}>Track my Order</h1>
        <label
          style={{
            color: "black",
            fontSize: "15px",
            marginRight: "2rem",
            marginTop: "0.5rem",
          }}
        >
          Please confirm your email:
        </label>
        <input placeholder="email" style={{ marginBottom: "1.2rem" }} />
        <label
          style={{ color: "black", fontSize: "15px", marginRight: "5rem" }}
        >
          Your order number:
        </label>
        <input placeholder="eg: 235741" />
        <button
          style={{
            width: "4rem",
            backgroundColor: "#32cd32",
            margin: "1rem 0rem 0rem 4.5rem",
            textDecoration: "none",
          }}
        >
          submit
        </button>
      </div>
    </div>
  );
};
