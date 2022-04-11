import React from "react";

function Button({ className, color, width, height, text,margin ,borderRadius}) {
  return (
    <a
      className={`${className} d-flex justify-content-center align-items-center`}
      style={{ width: width, height: height,backgroundColor:color,margin:margin ,borderRadius:borderRadius}}
    >
      {text}
    </a>
  );
}

export default Button;
