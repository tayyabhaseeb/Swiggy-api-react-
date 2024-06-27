import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import { ShimmerPostItem } from "react-shimmer-effects";
import useStorage from "../hooks/useStorage";
import Shimmer from "../components/Shimmer";

function Body() {
  const [inputValue, setInputValue] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [storedValue, setStoredValue] = useStorage();

  const filterArr = () => {
    const filtered = restaurantData.filter((obj) => {
      return obj.info.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilteredData(filtered);

    setStoredValue((prevArr) => [...prevArr, inputValue]);
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((res) => res.json())
      .then((data) => {
        const restaurants =
          data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        setRestaurantData(restaurants);
        setFilteredData(restaurants);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="body-container">
      <Search
        inputValue={inputValue}
        setInputValue={setInputValue}
        setFilteredData={setFilteredData}
        filterArr={filterArr}
      />

      <div className="cards-parent-container">
        {loading
          ? Array.from({ length: 10 }).map((_, index) => {
              return <Shimmer key={index} />;
            })
          : filteredData.map((obj) => {
              return loading ? (
                <Shimmer key={obj.info.id} />
              ) : (
                <Card obj={obj} key={obj.info.id} />
              );
            })}
      </div>
    </div>
  );
}

export default Body;

//  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// Why we cannot make useEffect() callback function async and we can make componentDidMount async ?

// componentDidMount will be called after first render
// componentDidUpdate will be called after every re-render
// componentWillUnmount will be called as long as our component unmounted from the DOM
// A lot of things we need to clear when we are leaving the page
