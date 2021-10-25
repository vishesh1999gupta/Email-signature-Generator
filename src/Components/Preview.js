import React from "react";
import "./preview.css";
import Template1 from "./Template1";

function Preview() {
  return (
    <div className="preview">
      <div className="preview-title">
        <h2>Signature Preview</h2>
      </div>
      <div className="preview-container">
        <div
          style={{
            width: "100%",
            padding: "0.8em",
            backgroundColor: "#B7B3B7",
            color: "white",
            borderRadius: "5px 5px 0px 0px",
          }}
        >
          New Email
        </div>
        <div
          style={{
            width: "100%",
            padding: "0.8em",
            backgroundColor: "white",
            color: "#B7B3B7",
            borderRadius: "5px 5px 0px 0px",
          }}
        >
          To:
        </div>
        <div
          style={{
            width: "100%",
            padding: "0.8em",
            backgroundColor: "white",
            color: "#B7B3B7",
            borderRadius: "5px 5px 0px 0px",
            borderBottom: "1px solid #B7B3B7",
            borderTop: "1px solid #B7B3B7"
          }}
        >
          Subject:
        </div>
        <div className="preview-box">
          <Template1/>
        </div>
      </div>
    </div>
  );
}

export default Preview;
