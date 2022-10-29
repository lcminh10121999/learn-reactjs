import React from "react";
import PropTypes from "prop-types";
import "./main.css";
import ListCart from "./list_cart/ListCart";
Main.propTypes = {};

function Main(props) {
  return (
    <div className="main">
      <ListCart />
    </div>
  );
}

export default Main;
