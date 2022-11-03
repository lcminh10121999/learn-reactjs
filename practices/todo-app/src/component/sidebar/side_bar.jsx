import React from "react";
import PropTypes from "prop-types";
import "./side_bar.css";
import { Outlet, Link } from "react-router-dom";
SideBar.propTypes = {};

function SideBar(props) {
  return (
    <div className="side_bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create_form">From Create</Link>
        </li>
        <li>Create ABC</li>
      </ul>
    </div>
  );
}

export default SideBar;
