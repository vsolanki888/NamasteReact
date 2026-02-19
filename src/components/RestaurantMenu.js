import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  // const fetchMenu = async (resId) => {
  //   const data = await fetch(
  //     "https://namastedev.com/api/v1/listRestaurantMenu/" + resId
  //   );
  //   const json = await data.json();
  //   console.log("Menu Data:", json);
  //   setResInfo(json);
  //   console.log("resInfo", resInfo);
  // };
  // useEffect(() => {
  //   console.log("Restaurant Menu useEffect");
  //   fetchMenu(resId);
  // }, []);
  const info = resInfo?.data?.cards?.[2]?.card?.card?.info ?? {};
  const { name, cuisines, costForTwoMessage } = info;
  const itemCards =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];
  console.log("itemCards", itemCards);
  console.log("resInfo?.data", resInfo?.data);
  const categories = itemCards.filter(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );
  console.log("categories", categories);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center py-2">
      <h1 className="py-2 font-bold text-2xl">{name}</h1>
      <p className="text-lg font-bold">
        {cuisines?.join(", ")}-{costForTwoMessage}
      </p>
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={showIndex === index ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
