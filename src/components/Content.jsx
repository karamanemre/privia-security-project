import React from "react";
import CombinedClipart from "./CombinedClipart";
import CornerTitle from "./CornerTitle";
import Title from "./Title";

function Content() {
  return (
    <div className="content-component container">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-end">
            <CornerTitle
              miniTitle={"Features"}
              titleone={"Our solution"}
              titletwo={"for your business"}
            />
            <p className="features-description">
              We are self-service data analytics software that lets you create
              visually appealing data visualizations and insightful dashboards
              in minutes.
            </p>
          </div>
        </div>
        <div className="col-6 d-flex flex-column">
          <div className="d-flex">
            <CombinedClipart
              exteriorPicture={"./img/Base.png"}
              interiorPicture={"./img/Path.png"}
            />
            <div className="d-flex flex-column">
              <Title
                titleone={"Analyze your data"}
                subtitle={
                  "Create reports with an easy to use drag-and-drop designer."
                }
                fontSize={"15px"}
                lineHeight={"20px"}
                mainTitleClass={"d-flex justify-content-start"}
              />
            </div>
          </div>

          <div className="d-flex">
            <CombinedClipart
              exteriorPicture={"./img/Base.png"}
              interiorPicture={"./img/Path.png"}
            />
            <div className="d-flex flex-column">
              <Title
                titleone={"Analyze your data"}
                subtitle={
                  "Create reports with an easy to use drag-and-drop designer."
                }
                fontSize={"15px"}
                lineHeight={"20px"}
                mainTitleClass={"d-flex justify-content-start"}
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex">
            <CombinedClipart
              exteriorPicture={"./img/Base.png"}
              interiorPicture={"./img/Path.png"}
            />
            <div className="d-flex flex-column">
              <Title
                titleone={"Analyze your data"}
                subtitle={
                  "Create reports with an easy to use drag-and-drop designer."
                }
                fontSize={"15px"}
                lineHeight={"20px"}
                mainTitleClass={"d-flex justify-content-start"}
              />
            </div>
          </div>

          <div className="d-flex">
            <CombinedClipart
              exteriorPicture={"./img/Base.png"}
              interiorPicture={"./img/Path.png"}
            />
            <div className="d-flex flex-column">
              <Title
                titleone={"Analyze your data"}
                subtitle={
                  "Create reports with an easy to use drag-and-drop designer."
                }
                fontSize={"15px"}
                lineHeight={"20px"}
                mainTitleClass={"d-flex justify-content-start"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
