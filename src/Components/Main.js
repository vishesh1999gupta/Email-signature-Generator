import React, { useState } from "react";
import "./main.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import UploadIcon from "@mui/icons-material/Upload";
import { useSelector, useDispatch } from "react-redux";
import { changeMainInput } from "../redux/actions/mainActions";
import axios from "axios";
// import { loadFile } from "./Template1";

const Input = styled("input")({
  display: "none",
});

function Main() {
  const [open, setOpen] = useState(false);
  const form = useSelector((state) => state.main.form);

  const dispatch = useDispatch();

  // const [image, setImage] = useState(null);
  const handleAvatarClick = (image) => {
    axios.post("http://localhost:4000/image-upload", image).then((res) => {
      // console.log(res.data)
      dispatch(
        changeMainInput("image", "http://localhost:4000/uploads/" + res.data)
      );
      setOpen(true);
      setTimeout(function () {
        setOpen(false);
      }, 3000);
    });
  };

  return (
    <div className="main">
      <Grid container rowSpacing={1}>
        <Grid item xs={12} sm={12} md={6}>
          <div className="main-input">
            <label>
              First Name
              <span className="star">*</span>
            </label>
            <input
              value={form.firstName}
              onChange={(e) =>
                dispatch(changeMainInput("firstName", e.target.value))
              }
              required
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="main-input">
            <label>Last Name</label>
            <input
              value={form.lastName}
              onChange={(e) =>
                dispatch(changeMainInput("lastName", e.target.value))
              }
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="main-input">
            <label>Mobile Number</label>
            <input
              value={form.mobileNumber}
              onChange={(e) =>
                dispatch(changeMainInput("mobileNumber", e.target.value))
              }
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="main-input">
            <label>
              Email
              <span className="star">*</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                dispatch(changeMainInput("email", e.target.value))
              }
              required
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="main-input">
            <label>Job Title</label>
            <input
              value={form.jobTitle}
              onChange={(e) =>
                dispatch(changeMainInput("jobTitle", e.target.value))
              }
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="main-input">
            <label>Department</label>
            <input
              value={form.department}
              onChange={(e) =>
                dispatch(changeMainInput("department", e.target.value))
              }
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <div className="main-input">
            <label>Company Name</label>
            <input
              value={form.companyName}
              onChange={(e) =>
                dispatch(changeMainInput("companyName", e.target.value))
              }
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="main-input">
            <label>Website</label>
            <input
              value={form.website}
              onChange={(e) =>
                dispatch(changeMainInput("website", e.target.value))
              }
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="main-input">
            <label>Office Phone</label>
            <input
              value={form.officePhone}
              onChange={(e) =>
                dispatch(changeMainInput("officePhone", e.target.value))
              }
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="main-input">
            <label>Office Fax</label>
            <input
              value={form.officeFax}
              onChange={(e) =>
                dispatch(changeMainInput("officeFax", e.target.value))
              }
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <div className="main-input">
            <label>Address</label>
            <input
              value={form.address}
              onChange={(e) =>
                dispatch(changeMainInput("address", e.target.value))
              }
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <div className="main-input">
            <label>Address 2</label>
            <input
              value={form.addressLine2}
              onChange={(e) =>
                dispatch(changeMainInput("addressLine2", e.target.value))
              }
            />
          </div>
        </Grid>
        <Grid style={{ margin: "0em 0.9em" }} item xs={12} sm={12} md={12}>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e) => {
                const formData = new FormData();
                formData.append(
                  "my-image-file",
                  e.target.files[0],
                  e.target.files[0].name
                );
                handleAvatarClick(formData);
              }}
            />
            <Button variant="contained" component="span">
              <UploadIcon />
              Upload Image
            </Button>
          </label>
        </Grid>
      </Grid>

      <p>Min Dimensions: 500px X 500px</p>
      <p>Max Dimensions: 800px X 800px</p>
      <p>File Formats Supported: JPG, JPEG, PNG, BMP, GIF(with animations)</p>

      {/* Alert Button Part */}
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
              Image Uploaded Successfully!
            </Alert>
          </Collapse>
        </Box>
      </div>
    </div>
  );
}

export default Main;
