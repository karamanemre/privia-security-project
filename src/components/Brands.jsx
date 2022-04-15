import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";


{/**
   Brands
**/}


function Brands({ brandsImage }) {
  return (
    <div className="brands-component d-flex justify-content-around align-items-center flex-wrap">
      {brandsImage &&
        brandsImage.map((brand,key) => (
          <div className="brand" key={key}>
            <img
              src={brand}
              alt=""
              width={"126px"}
            />
          </div>
        ))}
    </div>
  );
}

export default Brands;
