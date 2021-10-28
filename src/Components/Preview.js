import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import "./preview.css";
import Template1 from "./Template1";
import Template2 from "./Template2";
import Template3 from "./Template3";
import Template4 from "./Template4";
import Template5 from "./Template5";
import Template6 from "./Template6";
import Template7 from "./Template7";
import Template8 from "./Template8";
import Template9 from "./Template9";
import Template10 from "./Template10";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function copyToClipboard(e, textAreaRef, setOpen) {
  // console.log(e.currentTarget.textContent)
  // console.log(textAreaRef.current.innerText)
  navigator.clipboard.writeText(textAreaRef.current.innerHTML);
  setOpen(true);
  setTimeout(function () {
    setOpen(false);
  }, 3000);
  // textAreaRef.current.select();
  document.execCommand("copy");
  // This is just personal preference.
  // I prefer to not show the the whole text area selected.
  e.target.focus();
  // setCopySuccess('Copied!');
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Preview() {
  const [open, setOpen] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [template, setTemplate] = useState(1);
  const textAreaRef = useRef(null);
  return (
    <div className="preview">
      <div className="alert">
        <Box sx={{ width: "100%" }}>
          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {alertContent}
            </Alert>
          </Collapse>
        </Box>
      </div>
      <div className="preview-title">
        <h2>Signature Preview</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button
            style={{ textTransform: "capitalize" }}
            onClick={(e) => {
              setAlertContent("Source Code Copied Succesfully!");
              copyToClipboard(e, textAreaRef, setOpen);
            }}
          >
            <div className="reset-form">Source Code</div>
          </Button>
          <Button
            style={{ textTransform: "capitalize" }}
            onClick={(e) => {
              setAlertContent("Preview Copied Succesfully!");
              copyToClipboard(e, textAreaRef, setOpen);
            }}
          >
            <div className="reset-form">Copy Signature</div>
          </Button>
        </div>
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
            borderTop: "1px solid #B7B3B7",
          }}
        >
          Subject:
        </div>
        <div className="preview-box" ref={textAreaRef}>
          {template === 1 && <Template1 />}
          {template === 2 && <Template2 />}
          {template === 3 && <Template3 />}
          {template === 4 && <Template4 />}
          {template === 5 && <Template5 />}
          {template === 6 && <Template6 />}
          {template === 7 && <Template7 />}
          {template === 8 && <Template8 />}
          {template === 9 && <Template9 />}
          {template === 10 && <Template10 />}
        </div>
      </div>
      <div style={{ width: "45em", height: "30em" }}>
        <Carousel
          style={{ width: "45em", height: "20em" }}
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <img
          alt="template"
            src="./images/template1.jpg"
            style={{ padding: "1em 4em", margin: "5em", height: "8em", width: "7em", border: template === 1 ? "2px solid #0385DB" : "1px solid #DDDDDD"  }}
            onClick = {() => setTemplate(1)}
          ></img>
          <img
          alt="template"
            src="./images/template2.jpg"
            style={{ padding: "1em 4em", margin: "5em", height: "8em", width: "8em", border: template === 2 ? "2px solid #0385DB" : "1px solid #DDDDDD" }}
            onClick = {() => setTemplate(2)}
          ></img>
          <img
          alt="template"
            src="./images/template3.jpg"
            style={{ padding: "1em 4em", margin: "5em", height: "8em", width: "8em", border: template === 3 ? "2px solid #0385DB" : "1px solid #DDDDDD" }}
            onClick = {() => setTemplate(3)}
          ></img>
          <img
          alt="template"
            src="./images/template4.jpg"
            style={{ padding: "1em 0em", margin: "5em", height: "8em",width: "8em", border: template === 4 ? "2px solid #0385DB" : "1px solid #DDDDDD" }}
            onClick = {() => setTemplate(4)}
          ></img>
          <img
          alt="template"
            src="./images/template5.jpg"
            style={{ padding: "1em 0em", margin: "5em", height: "8em", border: template === 5 ? "2px solid #0385DB" : "1px solid #DDDDDD" }}
            onClick = {() => setTemplate(5)}
          ></img>
          <img
          alt="template"
            src="./images/template6.jpg"
            style={{ padding: "1em 0em", margin: "5em", height: "8em", border: template === 6 ? "2px solid #0385DB" : "1px solid #DDDDDD" }}
            onClick = {() => setTemplate(6)}
          ></img>
          <img
          alt="template"
            src="./images/template7.jpg"
            style={{ padding: "1em 0em", margin: "5em", height: "8em", border: template === 7 ? "2px solid #0385DB" : "1px solid #DDDDDD" }}
            onClick = {() => setTemplate(7)}
          ></img>
          <img
          alt="template"
            src="./images/template8.jpg"
            style={{ padding: "1em 0em", margin: "5em", height: "8em", border: template === 8 ? "2px solid #0385DB" : "1px solid #DDDDDD" }}
            onClick = {() => setTemplate(8)}
          ></img>
          <img
            alt="template"
            src="./images/template9.jpg"
            style={{ padding: "1em 0em", margin: "5em", height: "8em", border: template === 9 ? "2px solid #0385DB" : "1px solid #DDDDDD" }}
            onClick = {() => setTemplate(9)}
          ></img>
          <img
            alt="template"
            src="./images/template10.jpg"
            style={{ padding: "1em 0em", margin: "5em", height: "8em", border: template === 10 ? "2px solid #0385DB" : "1px solid #DDDDDD" }}
            onClick = {() => setTemplate(10)}
          ></img>
        </Carousel>
      </div>
    </div>
  );
}

export default Preview;
