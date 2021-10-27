import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./social.css";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import {
  updateSocial,
  removeSocial,
  addSocial,
} from "../redux/actions/socialActions";

function Social() {
  const socials = useSelector((state) => state.social);
  const dispatch = useDispatch();

  return (
    <div className="social">
      {socials.selected.map((social) => (
        <div className="social-input">
          <img
            src={social.source}
            style={{ height: "2.5em", width: "2.5em" }}
          ></img>
          <input
            style={{ flex: "1" }}
            key={social.socialID}
            value={social.value}
            placeholder={social.website + "/profile"}
            onChange={(e) =>
              dispatch(updateSocial(social.socialID, e.target.value))
            }
          />
          <Button
            onClick={() => {
              dispatch(removeSocial(social.socialID));
            }}
          >
            <CloseIcon style={{ color: "#DDDDDD" }} />
          </Button>
        </div>
      ))}

      <div className="social-icons">
        <span>Select Social Handles to Add</span>
        <div className="icon-list">
          {socials.otherSocials.map((social) => (
            <img
              src={social.source}
              style={{ height: "2.5em", width: "2.5em" }}
              onClick={(event) => dispatch(addSocial(social.socialID))}
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Social;
