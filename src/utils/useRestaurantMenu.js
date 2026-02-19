import { useEffect, useState } from "react";
import { MENU_API } from "./constant";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const fetchMenu = async (resId) => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log("Menu Data:", json);
    setResInfo(json);
  };
  useEffect(() => {
    console.log("Restaurant Menu useEffect");
    fetchMenu(resId);
  }, []);
  return resInfo;
};

export default useRestaurantMenu;
