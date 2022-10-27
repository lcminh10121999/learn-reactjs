import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {};

function Button(props) {
  return (
    <input
      type="submit"
      value="Button Create"
      className="btn btn-success my-2"
    />
  );
}

export default Button;
