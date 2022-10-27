import React from "react";
import PropTypes from "prop-types";

Search.propTypes = {};

function Search(props) {
  return (
    <div className="form-group my-2 d-flex">
      <input type="text" className="form-control" placeholder="Search"></input>
      <input type="submit" value="Search" className="btn btn-success mx-2" />
    </div>
  );
}

export default Search;
