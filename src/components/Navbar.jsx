import React, { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NavbarMenuItems from "./NavbarMenuItems";
import LoginSignupButton from "./LoginSignupButton";

function Navbar() {


  return (
    <nav className="navbar d-flex justify-content-beetween container">
      <div className="logo-container">
        <Logo src={"./img/Privia_logo.png"} height={"41px"} width={"145px"} />
      </div>
      <NavbarMenuItems/>
     <LoginSignupButton/>
      <div className="right-menu">
        <div>
          <MoreVertIcon fontSize="large"/>
          <span className="d-flex flex-column">
            
          </span>
        </div>
      </div>
      
    </nav>
  );
}

export default Navbar;
