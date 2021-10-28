import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

function Template3() {
  const form = useSelector((state) => state.main.form);
  const styling = useSelector((state) => state.style.form);
  const socials = useSelector((state) => state.social);
  const cta = useSelector((state) => state.cta.form);
  const addons = useSelector((state) => state.addons.form);

  return (
    <div className="template" style={{ paddingTop: "2em", lineHeight: "1.6" }}>
      {/* First and Last Name */}
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

      {/* Image */}

      <div>
        {form.image && (
          <img
            alt="avatar"
            src={form.image}
            height={styling.avatarSize.toString() + "px"}
            style={{ borderRadius: styling.avatarRadius, paddingTop: "0.3em" }}
          />
        )}
      </div>

      {/* Job Title */}
      <div
        style={{
          color: styling.textColor,
          fontFamily: styling.fontStyle,
          fontSize: parseInt(styling.fontSize).toString() + "px",
        }}
      >
        {form.jobTitle}
      </div>

      {/* Job Department */}
      <div
        style={{
          color: styling.textColor,
          fontFamily: styling.fontStyle,
          fontSize: parseInt(styling.fontSize).toString() + "px",
        }}
      >
        {form.department}
      </div>

      {/* Company Name */}
      <div
        style={{
          color: styling.textColor,
          fontFamily: styling.fontStyle,
          fontSize: parseInt(styling.fontSize).toString() + "px",
        }}
      >
        <strong>{form.companyName}</strong>
      </div>

      {/* Mobile and office phone */}
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

      {/* Fax  */}
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

      {/* Address Line 1 */}
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

      {/* Address Line 2 */}
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

      {/* Website */}
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

      {/* Email */}
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



      {/* Socials  */}
      <div className="icons" style={{ display: "flex", flexDirection: "row" }}>
        {socials.selected.map((social) => (
          <a
            href={social.value}
            style={{ display: parseInt(social.value.length) === 0 && "none" }}
          >
            <img
              alt="social"
              src={social.source}
              key={social.socialID}
              style={{ height: styling.iconSize, width: styling.iconSize }}
            ></img>
          </a>
        ))}
      </div>

      {/* CTA */}

      <div>
        {cta.image && cta.imageView && (
          <a href={cta.link.length === 0 ? "#" : cta.link} rel="noopener noreferrer" target="_blank">
            <img
              alt={cta.altText}
              src={cta.image}
              height={styling.ctaImageSize}
              style={{
                borderRadius: styling.ctaImageRadius,
                paddingTop: "0.3em",
              }}
            />
          </a>
        )}

        

        {!cta.imageView && cta.text.length > 0 && (
          <Button
            style={{
              backgroundColor: cta.backgroundColor,
              color: cta.textColor,
              borderRadius: "25px",
              fontSize: parseInt(cta.textSize - 2).toString() + "px",
              fontFamily: cta.textStyle,
              padding: "0.6em",
            }}
          >
            {cta.text}
          </Button>
        )}
      </div>

       {/* Badges */}

       <div>
      {addons.amazonBadge.length > 0 && (
          <a href={addons.amazonBadge} rel="noopener noreferrer" target="_blank">
            <img
              alt="badgeImage"
              src="https://www.linkpicture.com/q/amazon.png"
              height={addons.badgeHeight}
              style={{
                paddingTop: addons.badgePaddingTop,
                paddingLeft: "0.5em"
              }}
            />
          </a>
        )}
        {addons.appleBadge.length > 0 && (
          <a href={addons.appleBadge} rel="noopener noreferrer" target="_blank">
            <img
              alt="badgeImage"
              src="https://www.linkpicture.com/q/apple_10.png"
              height={addons.badgeHeight}
              style={{
                paddingTop: addons.badgePaddingTop,
                paddingLeft: "0.5em"
              }}
            />
          </a>
        )}
        {addons.ebayBadge.length > 0 && (
          <a href={addons.ebayBadge} rel="noopener noreferrer" target="_blank">
            <img
              alt="badgeImage"
              src="https://www.linkpicture.com/q/ebay.png"
              height={addons.badgeHeight}
              style={{
                paddingTop: addons.badgePaddingTop,
                paddingLeft: "0.5em"
              }}
            />
          </a>
        )}
        {addons.googlePlayBadge.length > 0 && (
          <a href={addons.googlePlayBadge} rel="noopener noreferrer" target="_blank">
            <img
              alt="badgeImage"
              src="https://www.linkpicture.com/q/playstore_3.png"
              height={addons.badgeHeight}
              style={{
                paddingTop: addons.badgePaddingTop,
                paddingLeft: "0.5em"
              }}
            />
          </a>
        )}
        {addons.googleBusinessBadge.length > 0 && (
          <a href={addons.googleBusinessBadge} rel="noopener noreferrer" target="_blank">
            <img
              alt="badgeImage"
              src="https://www.linkpicture.com/q/googlebusiness.png"
              height={addons.badgeHeight}
              style={{
                paddingTop: addons.badgePaddingTop,
                paddingLeft: "0.5em"
              }}
            />
          </a>
        )}
      </div>

      

      {/* Addons */}
      <div>
        <span
          style={{
            color: "grey",
            fontFamily: styling.fontStyle,
            fontSize: parseInt(addons.fontSize).toString() + "px",
          }}
        >
          <p
            style={{
              whiteSpace: "break-spaces",
              width: parseInt(addons.width).toString() + "px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              lineHeight: "100%",
            }}
          >
            {addons["data"][addons.selected]["content"]}
          </p>
        </span>
      </div>
    </div>
  );
}

export default Template3;
