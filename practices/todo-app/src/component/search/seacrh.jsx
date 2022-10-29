import React from "react";
import PropTypes from "prop-types";
import Button from "../button/button";

Search.propTypes = {};

function Search(props) {
  return (
    <div className="form-group my-2 d-flex">
      <input type="text" className="form-control" placeholder="Search"></input>
      <Button value={"Search"} />
    </div>
  );
}

export default Search;
