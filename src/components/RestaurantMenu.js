import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log("resId", resId);

  const fetchMenu = async (resId) => {
    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurantMenu/" + resId
    );
    const json = await data.json();
    console.log("Menu Data:", json);
    setResInfo(json);
    console.log("resInfo", resInfo);
  };
  useEffect(() => {
    console.log("Restaurant Menu useEffect");
    fetchMenu(resId);
  }, []);
  const info = resInfo?.data?.cards?.[2]?.card?.card?.info ?? {};
  const { name, cuisines, costForTwoMessage } = info;
  const itemCards =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];
  console.log("itemCards", itemCards);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <p>{cuisines?.toString()}</p>
      <h2>Menu:</h2>
      <ul>
        <li>{costForTwoMessage ?? ""}</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
