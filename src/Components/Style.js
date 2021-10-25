import React from "react";
import "./style.css";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { changeStyleInput } from "../redux/actions/styleActions";
import Slider from "@mui/material/Slider";


function Style() {
  const form = useSelector((state) => state.style.form);

  const dispatch = useDispatch();

  return (
    <div className="style">
      <Grid container rowSpacing={1}>
        <Grid item xs={12} sm={12} md={12}>
          <div className="style-input">
            <label>Text Color</label>
            <div className="color-input">
              <input
                style={{ flex: "0.9", padding: "0.5em" }}
                value={form.textColor}
                onChange={(event) => {
                  dispatch(changeStyleInput("textColor", event.target.value));
                }}
              />
              <input
                style={{ flex: "0.1", height: "2.3em" }}
                type="color"
                value={form.textColor}
                onChange={(event) => {
                  dispatch(changeStyleInput("textColor", event.target.value));
                }}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <div className="style-input">
            <label>Feature Color</label>
            <div className="color-input">
              <input
                style={{ flex: "0.9", padding: "0.5em" }}
                value={form.featureColor}
                onChange={(event) => {
                  dispatch(
                    changeStyleInput("featureColor", event.target.value)
                  );
                }}
              />
              <input
                style={{ flex: "0.1", height: "2.3em" }}
                type="color"
                value={form.featureColor}
                onChange={(event) => {
                  dispatch(
                    changeStyleInput("featureColor", event.target.value)
                  );
                }}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <div className="style-input">
            <label>Link Color</label>
            <div className="color-input">
              <input
                style={{ flex: "0.9", padding: "0.5em" }}
                value={form.linkColor}
                onChange={(event) => {
                  dispatch(changeStyleInput("linkColor", event.target.value));
                }}
              />
              <input
                style={{ flex: "0.1", height: "2.3em" }}
                type="color"
                value={form.linkColor}
                onChange={(event) => {
                  dispatch(changeStyleInput("linkColor", event.target.value));
                }}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="style-input">
            <label>Font Size</label>
            <select className="select-input" value={form.fontSize} onChange={(event) => {
                dispatch(changeStyleInput('fontSize', event.target.value))
            }}>
              <option value={12}>Small</option>
              <option value={14}>Medium</option>
              <option value={16}>Large</option>
            </select>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="style-input">
            <label>Font Style</label>
            <select style={{fontFamily: form.fontStyle}} className="select-input" value={form.fontStyle} onChange={(event) => {
                dispatch(changeStyleInput('fontStyle', event.target.value))
            }}>
              <option value="Arial" style={{fontFamily: "Arial"}}>Arial</option>
              <option value="Times New Roman" style={{fontFamily: "Times New Roman"}}>Times New Roman</option>
              <option value="Georgia" style={{fontFamily: "Georgia"}}>Georgia</option>
              <option value="Monospace" style={{fontFamily: "Monospace"}}>Monospace</option>
            </select>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="style-input">
            <label>Avatar Size</label>
            <Slider
              value={form.avatarSize}
              min={50}
              max={180}
              onChange={(event) => {
                dispatch(
                  changeStyleInput("avatarSize", parseInt(event.target.value))
                );
              }}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="style-input">
            <label>Avatar Radius</label>
            <select className="select-input" value={form.avatarRadius} onChange={(event) => {
                dispatch(changeStyleInput('avatarRadius', event.target.value))
            }}>
              <option value="0%">Square</option>
              <option value="10%">Rounded Corners</option>
              <option value="50%">Circle</option>
            </select>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="style-input">
            <label>CTA Image Size</label>
            <Slider
              value={form.ctaImageSize}
              min={50}
              max={180}
              onChange={(event) => {
                dispatch(
                  changeStyleInput("ctaImageSize", parseInt(event.target.value))
                );
              }}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="style-input">
            <label>CTA Image Radius</label>
            <select className="select-input" value={form.ctaImageRadius} onChange={(event) => {
                dispatch(changeStyleInput('ctaImageRadius', event.target.value))
            }}>
              <option value="Square">Square</option>
              <option value="Rounded Corners">Rounded Corners</option>
              <option value="Circle">Circle</option>
            </select>
          </div>
        </Grid>
        {/* Social Icons */}
        <Grid item xs={12} sm={12} md={6}>
          <div className="style-input">
            <label>Icon Size</label>
            <Slider
              value={form.iconSize}
              min={20}
              max={40}
              onChange={(event) => {
                dispatch(
                  changeStyleInput("iconSize", parseInt(event.target.value))
                );
              }}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Style;
