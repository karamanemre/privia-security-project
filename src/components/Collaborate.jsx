import React from "react";
import CornerTitle from "./CornerTitle";
import SuccessLine from "./SuccessLine";

function Collaborate() {
  return (
    <div className="collaborate-component">
      <div className="row">
        <div className="col-6">
          <div className="images">
            <img src="./img/collaborate/img1.png" alt="" className="img1" />
            <img src="./img/collaborate/img2.png" alt="" className="img2" />
            <img src="./img/collaborate/img3.png" alt="" className="img3" />
            <img
              src="./img/collaborate/rectangle.png"
              alt=""
              className="rectangle"
            />
            <img src="./img/collaborate/line.png" alt="" className="line" />
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex">
            <CornerTitle
              miniTitle={"Collaborate"}
              titleone={"Collaborate with"}
              titletwo={"your team anytime, anywhere"}
            />
          </div>
          <p className="description">
            Self-service data analytics software that lets you create visually
            appealing data visualizations and insightful dashboards in minutes.
          </p>
          <div className="row">
            <div className="col-6 mb-2">
              <SuccessLine text={"Organize your data"} />
            </div>
            <div className="col-6">
              <SuccessLine text={"Always in sync"} />
            </div>
            <div className="col-6 mb-2">
              <SuccessLine text={"Work with any team"} />
            </div>
            <div className="col-6">
              <SuccessLine text={"Embedded analytics"} />
            </div>
            <div className="col-6">
              <SuccessLine text={"Business analytics"} />
            </div>
          </div>
        </div>
        <div className="mt-5">
            <p>More than 1.8 million people across 50,000 companies choose Oval</p>
        </div>
      </div>
    </div>
  );
}

export default Collaborate;
