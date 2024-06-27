import React from "react";
import { useSelector } from "react-redux";
import TopPickCard from "../components/TopPickCard";

function Cart() {
  const items = useSelector((store) => store.items.items);

  if (!items.length) {
    return (
      <div className="restaurant-container">
        <h2>Please select some items to add into the cart </h2>
      </div>
    );
  }

  return (
    <div className="restaurant-container">
      {items.map((obj) => {
        return <TopPickCard obj={obj} type="delete" />;
      })}
    </div>
  );
}

export default Cart;
