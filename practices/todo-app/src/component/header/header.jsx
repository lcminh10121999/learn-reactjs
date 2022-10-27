import React from "react";
import PropTypes from "prop-types";
import "./header.css";
import Search from "../search/seacrh";
import Button from "../button/button";

Header.propTypes = {};

function Header(props) {
  return (
    <div className="container-fluid header">
      <div class="row">
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <Button />
        </div>
        <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Header;
