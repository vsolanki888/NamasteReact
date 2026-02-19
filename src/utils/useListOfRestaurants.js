const { useState, useEffect } = require("react");
const { List_OF_RESTAURANTS_API } = require("./constant");
const useListOfRestaurants = () => {
  const [listOfRestaurants, setRestaurantsList] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000); // Simulate network delay
    console.log("Hello useEffect");
  }, []);
  console.log("listOfRestaurants", listOfRestaurants);

  const fetchData = async () => {
    try {
      const data = await fetch(List_OF_RESTAURANTS_API);
      console.log("data", data);
      const json = await data.json();
      console.log("json", json);
      setRestaurantsList(
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return listOfRestaurants;
};

export default useListOfRestaurants;
