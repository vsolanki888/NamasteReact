import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  console.log("Body Rendered");

  const [ListOfRestaurants, setRestaurantsList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 3000); // Simulate network delay
    console.log("Hello useEffect");
  }, []);
  console.log("ListOfRestaurants", ListOfRestaurants);

  const fetchData = async () => {
    try {
      const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
      console.log("data", data);
      const json = await data.json();
      console.log("json", json);
      setRestaurantsList(
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              console.log("searchText", searchText);
              const filteredRest = ListOfRestaurants.filter((rest) =>
                rest.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              filteredRest.length === 0
                ? alert("No restaurant found")
                : setFilteredRestaurants(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const topRatedRestaurants = ListOfRestaurants.filter(
              (rest) => Number(rest?.info?.avgRating) > 4.5
            );
            console.log("topRatedRestaurants", topRatedRestaurants);

            topRatedRestaurants.length === 0
              ? alert("No top rated restaurant found")
              : setFilteredRestaurants(topRatedRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="clear-filter"
          onClick={() => {
            setFilteredRestaurants(ListOfRestaurants);
            setSearchText("");
          }}
        >
          Clear Filter
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard ListOfRestaurants={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
