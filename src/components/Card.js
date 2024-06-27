import React from "react";
import { Link } from "react-router-dom";
import { IMG_URL } from "../constants";

function Card({ obj }) {
  const { name, cloudinaryImageId, cuisines, sla, id } = obj.info;

  return (
    <div className="card">
      <Link to={`/restaurant/${id}`}>
        <img
          alt="imageOfRestaurant"
          // src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          src={`${IMG_URL}${cloudinaryImageId}`}
          className="card-image"
        />

        <h2>{name}</h2>
        <p className="cusine">{cuisines.join(",")}</p>
        <h6>{sla.lastMileTravelString}</h6>
      </Link>
    </div>
  );
}

export default Card;
