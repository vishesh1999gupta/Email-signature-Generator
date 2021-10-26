import React from "react";
import "./template1.css";
import { useSelector } from "react-redux";
import { SocialIcon } from "react-social-icons";
import { Button } from "@mui/material";
// export const loadFile = function(file) {
// 	var image = document.getElement('.image');
// 	image.src = URL.createObjectURL(file);
// };

function Template1() {
  const form = useSelector((state) => state.main.form);
  const styling = useSelector((state) => state.style.form);
  const socials = useSelector((state) => state.social);
  const cta = useSelector((state) => state.cta.form);

  return (
    <div className="template1">
      <div
        style={{
          color: styling.featureColor,
          fontFamily: styling.fontStyle,
          fontSize:
            (parseInt(styling.fontSize) + parseInt(2)).toString() + "px",
        }}
      >
        {form.firstName + " " + form.lastName}
      </div>
      <div
        style={{
          color: styling.textColor,
          fontFamily: styling.fontStyle,
          fontSize: parseInt(styling.fontSize).toString() + "px",
        }}
      >
        {form.jobTitle}
      </div>
      <div
        style={{
          color: styling.textColor,
          fontFamily: styling.fontStyle,
          fontSize: parseInt(styling.fontSize).toString() + "px",
        }}
      >
        {form.department}
      </div>

      <div
        style={{
          color: styling.textColor,
          fontFamily: styling.fontStyle,
          fontSize: parseInt(styling.fontSize).toString() + "px",
        }}
      >
        <strong>{form.companyName}</strong>
      </div>

      <div>
        <span
          style={{
            color: styling.featureColor,
            fontFamily: styling.fontStyle,
            fontSize: parseInt(styling.fontSize).toString() + "px",
            display: parseInt(form.officePhone.length) === 0 && "none",
          }}
        >
          P:{" "}
        </span>
        <span
          style={{
            color: styling.textColor,
            fontFamily: styling.fontStyle,
            fontSize: parseInt(styling.fontSize).toString() + "px",
          }}
        >
          {form.officePhone}
        </span>
        <span
          style={{
            color: styling.featureColor,
            fontFamily: styling.fontStyle,
            fontSize: parseInt(styling.fontSize).toString() + "px",
            display: parseInt(form.mobileNumber.length) === 0 && "none",
          }}
        >
          {" "}
          M:{" "}
        </span>
        <span
          style={{
            color: styling.textColor,
            fontFamily: styling.fontStyle,
            fontSize: parseInt(styling.fontSize).toString() + "px",
          }}
        >
          {form.mobileNumber}
        </span>
      </div>
      <div>
        <span
          style={{
            color: styling.featureColor,
            fontFamily: styling.fontStyle,
            fontSize: parseInt(styling.fontSize).toString() + "px",
            display: parseInt(form.officeFax.length) === 0 && "none",
          }}
        >
          F:{" "}
        </span>
        <span
          style={{
            color: styling.textColor,
            fontFamily: styling.fontStyle,
            fontSize: parseInt(styling.fontSize).toString() + "px",
          }}
        >
          {form.officeFax}
        </span>
      </div>
      <div>
        <span
          style={{
            color: styling.featureColor,
            fontFamily: styling.fontStyle,
            fontSize: parseInt(styling.fontSize).toString() + "px",
            display: parseInt(form.address.length) === 0 && "none",
          }}
        >
          A:{" "}
        </span>
        <span
          style={{
            color: styling.textColor,
            fontFamily: styling.fontStyle,
            fontSize: parseInt(styling.fontSize).toString() + "px",
          }}
        >
          {form.address}
        </span>
      </div>
      <div>
        <span
          style={{
            color: "white",
            fontFamily: styling.fontStyle,
            fontSize: parseInt(styling.fontSize).toString() + "px",
            display: parseInt(form.addressLine2.length) === 0 && "none",
          }}
        >
          A:{" "}
        </span>
        <span
          style={{
            color: styling.textColor,
            fontFamily: styling.fontStyle,
            fontSize: parseInt(styling.fontSize).toString() + "px",
          }}
        >
          {form.addressLine2}
        </span>
      </div>
      <div>
        <span
          style={{
            color: styling.featureColor,
            fontFamily: styling.fontStyle,
            fontSize: parseInt(styling.fontSize).toString() + "px",
            display: parseInt(form.website.length) === 0 && "none",
          }}
        >
          W:{" "}
        </span>
        <span
          style={{
            color: styling.linkColor,
            fontFamily: styling.fontStyle,
            fontSize: parseInt(styling.fontSize).toString() + "px",
          }}
        >
          {form.website}
        </span>
      </div>
      <div>
        <span
          style={{
            color: styling.featureColor,
            fontFamily: styling.fontStyle,
            fontSize: parseInt(styling.fontSize).toString() + "px",
            display: parseInt(form.email.length) === 0 && "none",
          }}
        >
          E:{" "}
        </span>
        <span
          style={{
            color: styling.linkColor,
            fontFamily: styling.fontStyle,
            fontSize: parseInt(styling.fontSize).toString() + "px",
          }}
        >
          {form.email}
        </span>
      </div>

      {/* Image */}
      <div>
        {form.image && (
          <img
            alt="image"
            src={form.image}
            height={styling.avatarSize.toString() + "px"}
            style={{ borderRadius: styling.avatarRadius }}
          />
        )}
      </div>

      {/* CTA */}

      <div>
        {cta.image && cta.imageView && (
          <a href={cta.link.length === 0 ? "#" : cta.link} target="_blank">
            <img
              alt={cta.altText}
              src={cta.image}
              height={styling.ctaImageSize}
              style={{ borderRadius: styling.ctaImageRadius }}
            />
          </a>
        )}

        {
          !cta.imageView && cta.text.length > 0 && (
            <Button style={{
              backgroundColor: cta.backgroundColor,
              color: cta.textColor,
              borderRadius: "25px",
              fontSize:  parseInt(cta.textSize).toString() + "px",
              fontFamily: cta.textStyle,
              padding: "0.5em"

            }}>
              {cta.text}
            </Button>
          )
        }
      </div>

      {/* Socials  */}
      <div className="icons">
        {socials.selected.map((social) => (
          <SocialIcon
            style={{
              display: parseInt(social.value.length) === 0 && "none",
              height: styling.iconSize,
              width: styling.iconSize,
              marginRight: "0.2em",
            }}
            key={social.socialID}
            url={social.value}
          />
        ))}
      </div>
    </div>
  );
}

export default Template1;
