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
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  let changeInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log({ ...inputData, [e.target.name]: e.target.value });
  };

  let saveCart = (e) => {
    e.preventDefault(e);

    if (!inputData.title || !inputData.description || !inputData.creator) {
      setError(true);
      setMsg("khong duoc rong");
      return;
    }

    // setCartListArray([...cartListArray, inputData]);
    const path = "/";
    cartListArray.push(inputData);
    localStorage.setItem("cartListArray", JSON.stringify(cartListArray));
    navigate(path);
  };

  // let validateForm = (arr) => {
  //   if (arr.title) {

  //   }

  // };
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
          {error && inputData.title.length <= 0 ? <p>Title {msg}</p> : ""}
        </div>
        <div class="form-group d-flex">
          <label>description</label>
          <input
            type="text"
            name="description"
            onChange={changeInput}
            class="form-control"
          ></input>
          {error && inputData.description.length <= 0 ? (
            <p>Description {msg}</p>
          ) : (
            ""
          )}
        </div>
        <div class="form-group d-flex">
          <label>creator</label>
          <input
            type="text"
            name="creator"
            onChange={changeInput}
            class="form-control"
          ></input>
          {error && inputData.creator.length <= 0 ? <p>creator {msg}</p> : ""}
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
