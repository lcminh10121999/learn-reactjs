import React, { useState } from "react";
import PropTypes from "prop-types";
import Cart from "./cart/cart";
import Form from "../../form/Form";
import productApi from "../../../Api/todo.jsx";
import { useEffect } from "react";
ListCart.propTypes = {};

function ListCart(props) {
  const [listCart, setListCart] = useState([]);
  // useEffect(()=>{
  // async() =>{

  // }
  // },[])
  useEffect(() => {
    const getData = async () => {
      const data = await productApi.getAll();
      setListCart(data);
    };

    getData();
  }, []);

  return (
    <div className="row">
      {listCart.map((item, index) => {
        return (
          <Cart
            key={item.id}
            statusCart={item.status}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default ListCart;
