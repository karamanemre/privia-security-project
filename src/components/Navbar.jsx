import React from "react";
import Button from "./Button";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="navbar d-flex justify-content-beetween ">
      <div className="logo-container">
        <Logo src={"./img/Privia_logo.png"} height={"41px"} width={"145px"} />
      </div>
      <div className="items">
        <ul className="d-flex justify-content-center">
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
      <div className="button-container d-flex justify-content-center align-items-center">
        <div>
          <Button
            text={"Login"}
            className={"btn btn-link"}
            style={{width:"auto",height:"35px"}}
          />
        </div>
        <div className="">
          <Button
            text={"Start free trial"}
            className={"btn btn-light"}
            style={{width:"auto",height:"35px"}}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
