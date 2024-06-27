import React from "react";
import { IMG_URL } from "../constants";
import { useDispatch } from "react-redux";
import { add, remove } from "../store/slices/itemsSlice";

function TopPickCard({ obj, type }) {
  const { id, imageId, name, price, description } = obj.card.info;
  const dispatch = useDispatch();

  function addItems() {
    dispatch(add(obj));
  }

  function removeItems() {
    dispatch(remove(id));

    console.log("Delete");
  }

  return (
    <div className="topCard">
      <div className="topCard-cont-one">
        <p className="bold">{name}</p>
        <p className="bold"> ₹{price / 100}</p>
        <p>{description}</p>
      </div>

      <div className="topCard-cont-two">
        <img src={`${IMG_URL}${imageId}`} alt="" width="100px" height="100px" />
        {type === "delete" ? (
          <button className="button-56" onClick={removeItems}>
            Remove
          </button>
        ) : (
          <button className="button-56" onClick={addItems}>
            Add
          </button>
        )}
      </div>
    </div>
  );
}

export default TopPickCard;
