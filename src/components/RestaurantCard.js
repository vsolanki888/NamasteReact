const { CDN_URL } = require("../utils/constant");
const RestaurantCard = (props) => {
  const { info } = props?.ListOfRestaurants;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
  } = info;

  return (
    <div className="restaurant-card">
      <img
        className="restaturant-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant logo"
      />
      <h3>{name}</h3>
      <h4>Cuisine: {cuisines.toString()}</h4>
      <h4>Star Rating: {avgRatingString}</h4>
      <h4>Cost for two: {costForTwo}</h4>
      <h4>Delivery Time: {sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
