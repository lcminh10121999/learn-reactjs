import React from "react";
import PropTypes from "prop-types";
import "./main.css";
import Cart from "./list_cart/cart/cart";
Main.propTypes = {};

function Main(props) {
  return (
    <div className="main">
      <div class="row">
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-2">
          <Cart />
        </div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-2">
          <Cart />
        </div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-2">
          <Cart />
        </div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-2">
          <Cart />
        </div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-2">
          <Cart />
        </div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-2">
          <Cart />
        </div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-2">
          <Cart />
        </div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-2">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default Main;
