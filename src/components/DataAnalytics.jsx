import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function DataAnalytics() {
  return (
    <div className="data-analytics d-flex flex-column">
      <div className="header">
        <div className="title flex-column">
          <h5>Data Analytics</h5>
          <small className="text-muted">See insight on how your business has changed over time</small>
        </div>
        <div className="dropdown-bar">Dropdown bar</div>
      </div>
      <div className="data d-flex justify-content-between align-items-center">
        <div className="item d-flex  flex-column ">
          <span className="d-flex align-items-center">
            <ArrowUpwardIcon fontSize={"smaller"} color={"success"} />
            86
          </span>
          <small>from prev. moth</small>
        </div>
        <div className="items d-flex justify-content-between ">
          <div className="mini-item d-flex flex-column">
            <span>2.456</span>
            <small className="text-muted">Impressions</small>
          </div>
          <div className="mini-item d-flex flex-column">
            <span>1,283</span>
            <small className="text-muted">Reach</small>
          </div>
          <div className="mini-item d-flex flex-column">
            <span>1,283</span>
            <small className="text-muted">Growth</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataAnalytics;
