import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "./Button";

function NavbarMenuItems() {
  const [isMove, setIsMove] = useState(false);

  return (
    <div className="navbar-menu-items d-flex justify-content-between align-items-center">
      <div className="items">
        <ul className="d-flex justify-content-center align-items-center flex-wrap">
          <li className="item">About</li>
          <li
            className="products-item item"
            onMouseOver={() => setIsMove(true)}
            onMouseLeave={() => setIsMove(false)}
          >
            Products{" "}
            {isMove ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            <div className="product-inner-properties">
              <span>Analyze</span>
              <span>Defense</span>
              <span className="product-inner-properties-bottom">Protect</span>
            </div>
          </li>
          <Link to={"/pricing"}>
            <li className="item">Pricing</li>
          </Link>
          <Link to={"/resources"}>
            <li className="item">Resources</li>
          </Link>
          <Link to={"/customers"}>
            <li className="item">Customers</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavbarMenuItems;
