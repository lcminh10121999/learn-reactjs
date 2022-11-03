import React from "react";
import PropTypes from "prop-types";
import Input from "../input/Input";
import Button from "../button/button";
import { useNavigate } from "react-router-dom";
// import { listCart } from "../cartArray";
import { useState } from "react";

function Form(props) {
  let navigate = useNavigate();
  //* check null listCart
  var listCart = localStorage.getItem("cartListArray")
    ? (listCart = JSON.parse(localStorage.getItem("cartListArray")))
    : (listCart = []);
  console.log(listCart);

  const [cartListArray, setCartListArray] = useState(listCart);
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    creator: "",
    status: "new",
  });

  let changeInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log({ ...inputData, [e.target.name]: e.target.value });
  };

  let saveCart = (e) => {
    e.preventDefault();
    // setCartListArray([...cartListArray, inputData]);
    const path = "/";
    cartListArray.push(inputData);
    localStorage.setItem("cartListArray", JSON.stringify(cartListArray));
    navigate(path);
  };
  return (
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 my-2">
      <form action="" onSubmit={saveCart}>
        {/* <Input
        label="Title"
        className="form-control"
        type="text"
        name="title"
        onChange={changeInput}
      />
      <Input
        label="Description"
        className="form-control"
        type="text"
        name="description"
        onChange={changeInput}
      />
      <Input
        label="Creator"
        className="form-control"
        type="text"
        name="creator"
        onChange={changeInput}
      /> */}

        <div class="form-group d-flex">
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={changeInput}
            class="form-control"
          ></input>
        </div>
        <div class="form-group d-flex">
          <label>description</label>
          <input
            type="text"
            name="description"
            onChange={changeInput}
            class="form-control"
          ></input>
        </div>
        <div class="form-group d-flex">
          <label>creator</label>
          <input
            type="text"
            name="creator"
            onChange={changeInput}
            class="form-control"
          ></input>
        </div>
        <div className="">
          <Button value="Save" className="btn btn-success mx-2" />
        </div>
      </form>
    </div>
  );
}

Form.propTypes = {};

export default Form;
