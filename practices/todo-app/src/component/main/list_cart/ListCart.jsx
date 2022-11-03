import React from "react";
import PropTypes from "prop-types";
import Cart from "./cart/cart";
import Form from "../../form/Form";
// import { listCart } from "../../cartArray";
ListCart.propTypes = {};

function ListCart(props) {
  //* check null listCart
  var listCart = localStorage.getItem("cartListArray")
    ? (listCart = JSON.parse(localStorage.getItem("cartListArray")))
    : (listCart = []);

  // var listCart = [
  //   {
  //     title: "title 1",
  //     description: "description 1",
  //     status: "new",
  //   },
  //   {
  //     title: "title 2",
  //     description: "description 2",
  //     status: "new",
  //   },
  //   {
  //     title: "title 3",
  //     description: "description 3",
  //     status: "new",
  //   },
  //   {
  //     title: "title 4",
  //     description: "description 4",
  //     status: "new",
  //   },
  //   {
  //     title: "title 5",
  //     description: "description 5",
  //     status: "new",
  //   },
  //   {
  //     title: "title 6",
  //     description: "description 6",
  //     status: "new",
  //   },
  //   {
  //     title: "title 7",
  //     description: "description 7",
  //     status: "new",
  //   },
  //   {
  //     title: "title 8",
  //     description: "description 8",
  //     status: "new",
  //   },
  // ];

  // var CartItem = function (title, description, creator) {
  //   (index = 0),
  //     (title = title),
  //     (description = description),
  //     (creator = creator);
  // };

  return (
    <div className="row">
      {listCart.map((item, index) => {
        return (
          <Cart
            key={index}
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
