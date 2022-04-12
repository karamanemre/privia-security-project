import React from "react";

function Button({ className, text,style}) {
  return (
    <a
      className={`${className} d-flex justify-content-center align-items-center`}
      style={style}
    >
      {text}
    </a>
  );
}

export default Button;
