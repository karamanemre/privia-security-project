import React from "react";
import Analytics from "./Analytics";
import Features from "./Features";

function Content() {
  return (
    <div className="content-component container">
      <Features/>
      <hr />
      <Analytics/>
    </div>
  );
}

export default Content;
