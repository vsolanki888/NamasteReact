import restaurantsList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants..." />
        <button>Search</button>
      </div>
      <div className="restaurant-container">
        {restaurantsList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantsList={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
