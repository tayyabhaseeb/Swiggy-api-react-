import { useParams } from "react-router";
import { IMG_URL } from "../constants";
import useRestaurant from "../hooks/useRestaurant";
import TopPickCard from "../components/TopPickCard";

function RestaurantPage() {
  const { id } = useParams();

  const [restaurant, restaurantTopPicks] = useRestaurant(id);

  // console.log(restaurantTopPicks);

  return (
    <div className="restaurant-container">
      <div className="container-one">
        {/* <img
          src={`${IMG_URL}${restaurant.cloudinaryImageId}`}
          alt="dishImage"
          className="rest-img"
        /> */}
        <h2>{restaurant.name}</h2>
        <p>
          <span className="bold">Location of Restaurant :</span>{" "}
          {restaurant.city}
        </p>
        <p>
          <span className="bold">Cost for 2 people dinning :</span>{" "}
          {restaurant.costForTwoMessage}
        </p>
        <p>
          <span className="bold">Average Rating :</span> {restaurant.avgRating}
        </p>
      </div>
      <div className="container-two">
        <h2>Recommended Items</h2>
        {restaurantTopPicks.map((obj) => {
          return <TopPickCard obj={obj} key={obj.card.info.id} />;
        })}
      </div>
    </div>
  );
}

export default RestaurantPage;
