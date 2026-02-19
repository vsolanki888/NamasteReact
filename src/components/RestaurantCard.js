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
    <div className="m-4 p-4 w-[250px] rounded-xl bg-[#f0f0f0] hover:bg-[#e0e0e0] cursor-pointer">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant logo"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>Cuisine: {cuisines.toString()}</h4>
      <h4>Star Rating: {avgRatingString}</h4>
      <h4>Cost for two: {costForTwo}</h4>
      <h4>Delivery Time: {sla.deliveryTime} mins</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-500 text-white p-1 rounded-lg m-2">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
