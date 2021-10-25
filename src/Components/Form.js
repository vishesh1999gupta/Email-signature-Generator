import React from "react";
import Information from "./Information";
import Preview from "./Preview";
import './form.css';

function Form() {
    return (
      <div className="form">
        <Information/>
        <Preview/>
      </div>
    );
  }
  
  export default Form;