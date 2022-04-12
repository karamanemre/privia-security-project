import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function Brands() {
  return (
    <div className="brands-component d-flex justify-content-around ">
      <div className="brand ">
        <AcUnitIcon fontSize="large" /> <strong>Slack</strong>
      </div>
      <div className="brand">
        <img src="./img/collaborate/brand4.png" alt="" /> <strong>Square</strong> 
      </div>
      <div className="brand">
        {" "}
        <img src="./img/collaborate/brand3.png" alt="" />{" "} <strong>ServiceTitan</strong>
      </div>
      <div className="brand">
        {" "}
        <img src="./img/collaborate/brand2.png" alt="" />
      </div>
      <div className="brand">
        {" "}
        <img src="./img/collaborate/brand1.png" alt="" />
      </div>
    </div>
  );
}

export default Brands;
