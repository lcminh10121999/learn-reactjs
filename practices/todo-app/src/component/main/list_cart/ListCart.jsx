import React from "react";
import PropTypes from "prop-types";
import Cart from "./cart/cart";

ListCart.propTypes = {};

function ListCart(props) {
  var listCart = [
    {
      title: "title 1",
      description: "description 1",
    },
    {
      title: "title 2",
      description: "description 2",
    },
    {
      title: "title 3",
      description: "description 3",
    },
    {
      title: "title 4",
      description: "description 4",
    },
    {
      title: "title 5",
      description: "description 5",
    },
    {
      title: "title 6",
      description: "description 6",
    },
    {
      title: "title 7",
      description: "description 7",
    },
    {
      title: "title 8",
      description: "description 8",
    },
  ];
  //   return listCart.map((item, index) => {
  //     return (
  //       <Cart key={index} title={item.title} description={item.description} />
  //     );
  //   });
  return (
    <div className="row">
      {listCart.map((item, index) => {
        return <Cart title={item.title} description={item.description} />;
      })}
    </div>
  );
}

export default ListCart;
