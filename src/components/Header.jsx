import React from "react";
import Button from "./Button";
import DataAnalytics from "./DataAnalytics";
import MiniTitle from "./MiniTitle";
import Navbar from "./Navbar";
import Title from "./Title";

function Header() {
  return (
    <div className="header-component">
      <div className="container">
        <div>
          <Navbar />
        </div>
        <div className="title-container">
          <Title
            titleone={"Powerful analytics tools "}
            titletwo={"for your business"}
            subtitle={
              "An awesome tools for your business, increase business revenue with enterprise-grade links built to acquire and engage customers"
            }
          />
        </div>

        <div className="d-flex justify-content-center mt-5">
          <Button
            color={"#5B45E0"}
            className={"btn btn-primary text-white"}
            text={"Start free trial"}
            width={"170px"}
            height={"50px"}
            margin={"0 20px 0 0"}
          />
          <Button
            color={"#FFFFFF"}
            className={"btn btn-primary text-dark"}
            text={"View live demo"}
            width={"170px"}
            height={"50px"}
          />
        </div>
        <div className="data-analystic-container">
          <DataAnalytics />
        </div>
      </div>
    </div>
  );
}

export default Header;
