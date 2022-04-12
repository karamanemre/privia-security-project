import React from "react";
import Analytics from "./Analytics";
import Collaborate from "./Collaborate";
import Features from "./Features";
import MoreFeature from "./MoreFeature";
import Title from "./Title";
import Pricing from "./Pricing";

function Content() {
  return (
    <div className="content-component container">
      <div className="padding-bottom-10 ">
        <Features />
      </div>
      <hr />
      <div className="padding-bottom-10 padding-top-10">
        <Analytics />
      </div>
      <div className="padding-bottom-10 ">
        <MoreFeature />
      </div>
      <div>
        <Collaborate />
      </div>
      <div className="title padding-top-10">
        <Title
          titleone={"Choose the plan that’s right"}
          titletwo={"for your business"}
          subtitle={
            "30-day free trial, cancel any time. No credit card required."
          }
        />
        <div className="mt-4">
          Bill Monthly <span>as</span> Bill Annually
        </div>
      </div>
      <div className="prices-container d-flex justify-content-around flex-wrap mt-5 padding-bottom-10">
        <Pricing
          color={"#FFEDB6"}
          period={"month"}
          price={"$23"}
          packageName={"Standart"}
          description={
            "All the basics for businesses that are just getting started."
          }
          properties={[
            "Single project use",
            "Basic dashboard",
            "All components included",
          ]}
        />

        <Pricing
          color={"#D1E8FF"}
          period={"month"}
          price={"$23"}
          packageName={"Standart"}
          description={
            "All the basics for businesses that are just getting started."
          }
          properties={[
            "Single project use",
            "Basic dashboard",
            "All components included",
          ]}
        />

        <Pricing
          color={"#5B45E0"}
          period={"month"}
          price={"$23"}
          packageName={"Standart"}
          description={
            "All the basics for businesses that are just getting started."
          }
          properties={[
            "Single project use",
            "Basic dashboard",
            "All components included",
          ]}
          textColor="#fff"
        />
      </div>
    </div>
  );
}

export default Content;
