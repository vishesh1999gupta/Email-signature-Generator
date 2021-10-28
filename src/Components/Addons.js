import React from "react";
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
        <textarea
          disabled={!form["data"][form.selected]["editable"]}
          onChange={(event) =>
            dispatch(changeADDONSInput("custom", event.target.value))
          }
          value={form["data"][form.selected]["content"]}
        ></textarea>
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
          max={675}
          onChange={(event) => {
            dispatch(changeADDONSInput("width", parseInt(event.target.value)));
          }}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </div>
      <div className="addons-row">
        <div className="app-badge">
          <img
          alt="apple"
            src="https://www.linkpicture.com/q/apple_10.png"
            style={{ height: "2.5em" }}
          ></img>
          <input
            style={{ flex: "1" }}
            value={form.appleBadge}
            placeholder="https://itunes.apple.com/ru/apple/id"
            onChange={(e) =>
              dispatch(changeADDONSInput("appleBadge", e.target.value))
            }
          />
        </div>
      </div>
      <div className="addons-row">
        <div className="app-badge">
          <img
          alt="amazon"
            src="https://www.linkpicture.com/q/amazon.png"
            style={{ height: "2.5em" }}
          ></img>
          <input
            style={{ flex: "1" }}
            value={form.amazonBadge}
            placeholder={"https://www.amazon.com/"}
            onChange={(e) =>
              dispatch(changeADDONSInput("amazonBadge", e.target.value))
            }
          />
        </div>
      </div>
      <div className="addons-row">
        <div className="app-badge">
          <img
          alt="google playstore"
            src="https://www.linkpicture.com/q/playstore_3.png"
            style={{ height: "2.5em" }}
          ></img>
          <input
            style={{ flex: "1" }}
            value={form.googlePlayBadge}
            placeholder="https://play.google.com/"
            onChange={(e) =>
              dispatch(changeADDONSInput("googlePlayBadge", e.target.value))
            }
          />
        </div>
      </div>
      <div className="addons-row">
        <div className="app-badge">
          <img
            alt="google business"
            src="https://www.linkpicture.com/q/googlebusiness.png"
            style={{ height: "2.5em"}}
          ></img>
          <input
            style={{ flex: "1" }}
            value={form.googleBusinessBadge}
            placeholder="https://business.google.com"
            onChange={(e) =>
              dispatch(changeADDONSInput("googleBusinessBadge", e.target.value))
            }
          />
        </div>
      </div>
      <div className="addons-row">
        <div className="app-badge">
          <img
            alt="ebay"
            src="https://www.linkpicture.com/q/ebay.png"
            style={{ height: "2.5em"}}
          ></img>
          <input
            style={{ flex: "1" }}
            value={form.ebayBadge}
            placeholder="https://ebay.com/"
            onChange={(e) =>
              dispatch(changeADDONSInput("ebayBadge", e.target.value))
            }
          />
        </div>
      </div>
      <div className="addons-row">
        <label>Badge Height</label>
        <Slider
          value={form.badgeHeight}
          min={40}
          max={65}
          onChange={(event) => {
            dispatch(changeADDONSInput("badgeHeight", parseInt(event.target.value)));
          }}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </div>
      <div className="addons-row">
        <label>Badge Padding Top</label>
        <Slider
          value={form.badgePaddingTop}
          min={10}
          max={50}
          onChange={(event) => {
            dispatch(changeADDONSInput("badgePaddingTop", parseInt(event.target.value)));
          }}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </div>
    </div>
  );
}

export default Addons;
