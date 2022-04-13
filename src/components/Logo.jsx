import React from "react";
import { Link } from "react-router-dom";

function Logo({ src, alt, height, width }) {
  return (
    <Link to={"/"}>
      <img src={src} alt={alt ? alt : "image"} height={height} width={width} />
    </Link>
  );
}

export default Logo;
