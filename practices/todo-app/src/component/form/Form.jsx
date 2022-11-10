import React from "react";
import PropTypes from "prop-types";
import Input from "../input/Input";
import Button from "../button/button";
import { useNavigate } from "react-router-dom";
// import { listCart } from "../cartArray";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import productApi from "../../Api/todo";

function Form(props) {
  let navigate = useNavigate();

  const defaultValue = {
    title: "",
    description: "",
    creator: "",
    status: "new",
    id: uuidv4(),
  };
  const [inputData, setInputData] = useState(defaultValue);

  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  let changeInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  let saveCart = async (e) => {
    e.preventDefault(e);
    // if (!inputData.title || !inputData.description || !inputData.creator) {
    //   setError(true);
    //   setMsg("khong duoc rong");
    //   return;
    // }

    const path = "/";
    var a = await productApi.add(inputData);
    // navigate(path);
  };

  return (
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 my-2">
      <form action="" onSubmit={saveCart}>
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
