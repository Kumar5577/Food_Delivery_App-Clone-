import React from "react";
import { useState, useEffect } from "react";
import { menu_url } from "../utils/links";
import { useParams } from "react-router-dom";
import ItemsSection from "./ItemsSection";
const RestaurantMenu = () => {
  const {resId} = useParams();
  const [restaurantName, setRestaurantName] = useState("");
  const [itemList, setItemList] = useState([]);
 
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(menu_url+resId);
    const json = await data.json();
    setRestaurantName(json?.data?.cards[0]?.card?.card?.text);
    const itemss = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => c?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    setItemList(itemss);

    console.log(itemList);
  };
  return (
    <div className="">
    <div className="flex flex-col items-center">
      <div className=" text-2xl m-2 p-2">
      <h1 className=" text-black font-bold">{restaurantName}</h1>
      </div>
      <div className="">
        {itemList.map((item,index) => (
          (<ItemsSection key={index} items={item}/>)
        ))}
      </div>
      
    </div>
    </div>
  );
};
export default RestaurantMenu;
