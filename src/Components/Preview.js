import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import "./preview.css";
import Template1 from "./Template1";
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
          <Template1 />
        </div>
      </div>
      <div style={{ width: "600px", height: "400px" }}>
        <Carousel
          style={{ width: "600px", height: "400px" }}
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
            src="https://i.ibb.co/NLgwLFK/medium-monogram-v1.png"
            style={{ padding: "21px 0em" }}
          ></img>
          <img
            src="https://i.ibb.co/n8NznCj/whatsapp.png"
            style={{ padding: "21px 0em" }}
          ></img>
          <img
            src="https://i.ibb.co/h7Tf9D2/telegram-app-v1.png"
            style={{ padding: "21px 0em" }}
          ></img>
          <img
            src="https://i.ibb.co/Wk1q26M/reddit.png"
            style={{ padding: "21px 0em" }}
          ></img>
        </Carousel>
      </div>
    </div>
  );
}

export default Preview;
