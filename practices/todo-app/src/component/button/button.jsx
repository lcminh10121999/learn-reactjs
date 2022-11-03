import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {};

function Button(props) {
  return (
    <input type="submit" value={props.value} className={props.className} />
  );
}

export default Button;
