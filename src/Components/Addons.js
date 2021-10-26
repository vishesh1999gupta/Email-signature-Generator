import React, { useState } from "react";
import "./addons.css";
import { useSelector, useDispatch } from "react-redux";
import { changeADDONSInput } from "../redux/actions/addonsAction";
import { Slider } from "@mui/material";




function Addons() {
    
  //   const [selector, setSelector] = useState(false);
  const form = useSelector((state) => state.addons.form);
//   console.log(form["data"][form.selected]["editable"])
  const dispatch = useDispatch();
  return (
    <div className="addons">
      <div className="addons-row">
        <label>Type</label>
        <select
          className="select-input"
          value={form.selected}
          onChange={(event) => {
            dispatch(changeADDONSInput("selected", event.target.value));
          }}
        >
          <option value="confidentiality">Confidentiality</option>
          <option value="environmental">Environmental</option>
          <option value="custom">Custom Disclaimer</option>
        </select>
      </div>

      <div className="addons-row">
        <textarea disabled={!form["data"][form.selected]["editable"]}
            onChange={(event) => dispatch(changeADDONSInput("custom", event.target.value))}

            value = {form["data"][form.selected]["content"]}
        >
            
        </textarea>
      </div>


      <div className="addons-row">
        <label>Font Size</label>
        <select
          className="select-input"
          value={form.fontSize}
          onChange={(event) => {
            dispatch(changeADDONSInput("fontSize", event.target.value));
          }}
        >
          <option value={10}>Extra Small</option>
          <option value={12}>Small</option>
          <option value={14}>Medium</option>
        </select>
      </div>

      <div className="addons-row">
            <label>Width</label>
            <Slider
              value={form.width}
              min={200}
              max={800}
              onChange={(event) => {
                dispatch(
                  changeADDONSInput("width", parseInt(event.target.value))
                );
              }}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </div>
    </div>
  );
}

export default Addons;
