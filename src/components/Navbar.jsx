import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="navbar d-flex justify-content-beetween container">
      <div className="logo-container">
        <Logo src={"./img/Privia_logo.png"} height={"41px"} width={"145px"} />
      </div>
      <div className="items">
        <ul className="d-flex justify-content-center">
          <li>About</li>
          <li>Products</li>
          <Link to={"/pricing"}>
            <li>Pricing</li>
          </Link>
          <Link to={"/resources"}>
            <li>Resources</li>
          </Link>
          <li>Customers</li>
        </ul>
      </div>
      <div className="button-container d-flex justify-content-center align-items-center">
        <div>
          <Button
            text={"Login"}
            className={"btn btn-link"}
            style={{ width: "auto", height: "35px" }}
          />
        </div>
        <div className="">
          <Button
            text={"Start free trial"}
            className={"btn btn-light"}
            style={{ width: "auto", height: "35px" }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
