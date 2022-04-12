import React from "react";
import Analytics from "./Analytics";
import Collaborate from "./Collaborate";
import Features from "./Features";
import MoreFeature from "./MoreFeature";

function Content() {
  return (
    <div className="content-component container">
      <div className="padding-bottom-10 ">
      <Features/>
      </div>
      <hr />
      <div className="padding-bottom-10 padding-top-10">
      <Analytics/>
      </div>
      <div className="padding-bottom-10 ">
      <MoreFeature/>
      </div>
      <Collaborate/>
    </div>
  );
}

export default Content;
