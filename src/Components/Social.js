import React from "react";
import { SocialIcon } from "react-social-icons";
import { useSelector, useDispatch } from "react-redux";
import "./social.css";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { updateSocial, removeSocial, addSocial } from "../redux/actions/socialActions";

function Social() {
  const socials = useSelector((state) => state.social);
  const dispatch = useDispatch();

  return (
    <div className="social">
      {/* {arr.map((i) => (<SocialIcon url={i}/>))} */}

      {
          socials.selected.map((social) => (
            <div className="social-input">
            <SocialIcon style = {{height: '2.5em', width: '2.5em'}} url={social.website} onClick={(event) => {
                event.preventDefault();
            }} />
            <input style = {{flex: '1'}} key = {social.socialID} value = {social.value} placeholder={social.website + "/profile"} onChange={(e) => dispatch(updateSocial(social.socialID, e.target.value))}/>
            <Button onClick = {() => {
                dispatch(removeSocial(social.socialID))
            }}>
              <CloseIcon style={{color: '#DDDDDD'}}/>
            </Button>
          </div>
          ))
      }

      {/* <p>Select socials to add</p> */}
      <div className="social-icons">
        <span>Select Social Handles to Add</span>
        <div className="icon-list">
            {socials.otherSocials.map((social) => (
                <Button onClick={(event) => {
                    event.preventDefault();
                    dispatch(addSocial(social.socialID))
                }}>
                    <SocialIcon  style = {{height: '2.5em', width: '2.5em'}} url={social.website} />
                </Button>
            ))}
        </div>

      </div>
    </div>
  );
}

export default Social;
