import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./information.css";
import Main from './Main.js';
import Social from "./Social";
import Style from "./Style";

function Information() {
  const [section, setSection] = useState("main");

  return (
    <div className="information">
      <div className="info-title">
        <h2>Your Information</h2>
        <Button style={{ textTransform: "capitalize" }}>
          <div className="reset-form">Reset Form</div>
        </Button>
      </div>
      <div className="section-header">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            className={section === "main" && "selected"}
            onClick={() => setSection("main")}
          >
            MAIN
          </Button>
          <Button
            className={section === "social" && "selected"}
            onClick={() => setSection("social")}
          >
            SOCIAL
          </Button>
          <Button
            className={section === "style" && "selected"}
            onClick={() => setSection("style")}
          >
            STYLE
          </Button>
          <Button
            className={section === "cta" && "selected"}
            onClick={() => setSection("cta")}
          >
            CTA
          </Button>
          <Button
            className={section === "addons" && "selected"}
            onClick={() => setSection("addons")}
          >
            ADDONS
          </Button>
        </ButtonGroup>
      </div>
      {
          section === 'main' && <Main/>
      }
      {
          section === 'social' && <Social/>
      }
      {
        section === 'style' && <Style/>
      }

      
    </div>
  );
}

export default Information;
