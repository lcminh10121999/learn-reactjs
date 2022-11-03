import React from "react";
import PropTypes from "prop-types";
import "./style.css";

Input.propTypes = {};

function Input(props) {
  return (
    <div class="form-group d-flex">
      <label>{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        className={props.className}
      ></input>
    </div>
  );
}

export default Input;
