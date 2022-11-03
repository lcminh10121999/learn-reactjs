import React from "react";
import PropTypes from "prop-types";
import "./main.css";
import ListCart from "./list_cart/ListCart";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Form from "../form/Form";
Main.propTypes = {};

function Main(props) {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<ListCart />} />
        <Route path="/create_form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default Main;
