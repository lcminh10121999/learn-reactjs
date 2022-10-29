import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

Cart.propTypes = {};

function Cart(props) {
  var [status, setStatus] = useState("new");

  let changeStatus = (e) => {
    // var status = document.querySelector("#change_status").value;
    setStatus(e.target.value);
  };

  return (
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-2">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
          <p>{status}</p>
          <select
            id="change_status"
            onChange={changeStatus}
            class="form-control my-2"
          >
            <option value={"new"}>new</option>
            <option value={"doing"}>doing</option>
            <option value={"done"}>done</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Cart;
