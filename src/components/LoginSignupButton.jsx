import React from "react";
import Button from "./Button";

function LoginSignupButton() {
  return (
    <div className="login-signup-button d-flex justify-content-center align-items-center">
      <div className="item">
        <Button
          text={"Login"}
          className={"btn btn-link"}
          style={{ width: "auto", height: "35px" }}
        />
      </div>
      <div className="item">
        <Button
          text={"Start free trial"}
          className={"btn btn-light"}
          style={{ width: "auto", height: "35px" }}
        />
      </div>
    </div>
  );
}

export default LoginSignupButton;
