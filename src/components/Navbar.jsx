import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Navbar() {

  const [isMove,setIsMove] = useState(false);

  return (
    <nav className="navbar d-flex justify-content-beetween container">
      <div className="logo-container">
        <Logo src={"./img/Privia_logo.png"} height={"41px"} width={"145px"} />
      </div>
      <div className="items">
        <ul className="d-flex justify-content-center align-items-center">
          <li className="item">About</li>
          <li className="products-item item" onMouseOver={()=>setIsMove(true)} onMouseLeave={()=>setIsMove(false)}>
            Products {isMove ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/>} 
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
          <li className="item">Customers</li>
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
