import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  console.log("Body Rendered");

  const [ListOfRestaurants, setRestaurantsList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000); // Simulate network delay
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
          ?.restaurants,
      );
      setFilteredRestaurants(
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );
  }

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="search-input"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log("searchText", searchText);
              const filteredRest = ListOfRestaurants.filter((rest) =>
                rest.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              filteredRest.length === 0
                ? alert("No restaurant found")
                : setFilteredRestaurants(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <div className="search p-4 m-4">
          <button
            className="px-4 py-2 bg-yellow-100 rounded-lg"
            onClick={() => {
              const topRatedRestaurants = ListOfRestaurants.filter(
                (rest) => Number(rest?.info?.avgRating) > 4.5,
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
            className="px-4 py-2 bg-red-100 m-4 rounded-lg"
            onClick={() => {
              setFilteredRestaurants(ListOfRestaurants);
              setSearchText("");
            }}
          >
            Clear Filter
          </button>
          <label className="px-4 py-2">User Name:</label>
          <input
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            className="border-2 border-gray-300 rounded-lg p-2"
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <PromotedRestaurantCard ListOfRestaurants={restaurant} />
            ) : (
              <RestaurantCard ListOfRestaurants={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
