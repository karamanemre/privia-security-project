import React from "react";
import Button from "./Button";
import CombinedClipart from "./CombinedClipart";
import CornerTitle from "./CornerTitle";
import Title from "./Title";

function Features() {
  return (
    <div className="features-component">
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <CornerTitle
              miniTitle={"Features"}
              titleone={"Our solution"}
              titletwo={"for your business"}
            />
          </div>
        </div>
        <div className="col-6 features-description d-flex align-items-end">
          <p>
            We are self-service data analytics software that lets you create
            visually appealing data visualizations and insightful dashboards in
            minutes.
          </p>
        </div>
        <div className="col-6 d-flex flex-column mt-5">
          <div className="d-flex mb-4">
            <CombinedClipart
              exteriorPicture={"./img/featuresImg/Base.png"}
              interiorPicture={"./img/featuresImg/yellow-img1.png"}
            />
            <div className="d-flex flex-column margin-l-2">
              <Title
                titleone={"Analyze your data"}
                subtitle={
                  "Create reports with an easy to use drag-and-drop designer."
                }
                fontSize={"15px"}
                lineHeight={"20px"}
                mainTitleClass={"d-flex justify-content-start"}
              />
              <div className="d-flex justify-content-start">
                <Button
                  text={"Learn more >"}
                  className={"btn btn-link features-button"}
                />
              </div>
            </div>
          </div>

          <div className="d-flex">
            <CombinedClipart
              exteriorPicture={"./img/featuresImg/base-blue.png"}
              interiorPicture={"./img/featuresImg/blue-graph.png"}
            />
            <div className="d-flex flex-column margin-l-2">
              <Title
                titleone={"Analyze your data"}
                subtitle={
                  "Create reports with an easy to use drag-and-drop designer."
                }
                fontSize={"15px"}
                lineHeight={"20px"}
                mainTitleClass={"d-flex justify-content-start"}
              />
              <div className="d-flex justify-content-start">
                <Button text={"Learn more >"} className={"btn btn-link features-button"} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 mt-5">
          <div className="d-flex mb-4 ">
            <CombinedClipart
              exteriorPicture={"./img/featuresImg/Base.png"}
              interiorPicture={"./img/featuresImg/security.png"}
            />
            <div className="d-flex flex-column margin-l-2">
              <Title
                titleone={"Analyze your data"}
                subtitle={
                  "Create reports with an easy to use drag-and-drop designer."
                }
                fontSize={"15px"}
                lineHeight={"20px"}
                mainTitleClass={"d-flex justify-content-start"}
              />
              <div className="d-flex justify-content-start">
                <Button text={"Learn more >"} className={"btn btn-link features-button"} />
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <CombinedClipart
              exteriorPicture={"./img/featuresImg/base-blue.png"}
              interiorPicture={"./img/featuresImg/hand.png"}
            />
            <div className="d-flex flex-column margin-l-2">
              <Title
                titleone={"Analyze your data"}
                subtitle={
                  "Create reports with an easy to use drag-and-drop designer."
                }
                fontSize={"15px"}
                lineHeight={"20px"}
                mainTitleClass={"d-flex justify-content-start"}
              />
              <div className="d-flex justify-content-start">
                <Button text={"Learn more >"} className={"btn btn-link features-button"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
