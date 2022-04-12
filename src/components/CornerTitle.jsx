import React from "react";
import MiniTitle from "./MiniTitle";
import Title from "./Title";

{/**

Merges header and miniheader

ex;
----Features
        Our solution 
        for your business**/}

function CornerTitle({ miniTitle, titleone, titletwo }) {
  return (
    <div style={{textAlign:"left"}}>
      <MiniTitle title={miniTitle} />
      <Title titleone={titleone} titletwo={titletwo} lineHeight={"40px"} fontSize={"30px"} />
    </div>
  );
}

export default CornerTitle;
// className={"d-flex justify-content-start"}