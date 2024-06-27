import { useEffect, useState } from "react";
import useOnline from "./useOnline";

function useRestaurant(id) {
  const [restaurant, setRestaurant] = useState({});
  const [restaurantTopPicks, setRestaurantTopPicks] = useState([]);

  const isOnline = useOnline;

  useEffect(() => {
    isOnline && getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await res.json();
    setRestaurant(data.data.cards[2].card.card.info);
    setRestaurantTopPicks(
      data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
  };

  return [restaurant, restaurantTopPicks];
}

export default useRestaurant;
