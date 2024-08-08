import React from "react";
import ReactDOM from "react-dom/client"
import Restaurant from "./Restaurant";
import { useState,useEffect } from "react";
import { swiggy_url } from "../utils/links";
import { Link } from "react-router-dom";
const Body = () =>{
    const [restaurantsList,setRestaurantsList] = useState([]);
    const [filteredrestaurantsList,setFilteredRestaurantsList] = useState([]);
    const [searchText,setSearchText] = useState("");
    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData = async()=>{
        const data = await fetch(swiggy_url);
        const json = await data.json();
        setFilteredRestaurantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestaurantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    };
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchText(value);
        console.log(value);
        if (value === "") {
            setFilteredRestaurantsList(restaurantsList);
        } else {
            const filteredRestaurants = restaurantsList.filter((restaurant) =>
                restaurant.info.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredRestaurantsList(filteredRestaurants);
        }
    };

     return (
        <div className="body">
              <div className=" w-[350px] border">
                <input className="w-[350px] rounded-lg border border-black m-2 p-2" type="text" placeholder="Search for Your Favourite Restaurant" value={searchText}  onChange={handleSearch}/>
                </div>
            <div className="flex flex-wrap m-4 p-4"> 
            {filteredrestaurantsList.map((restaurant)=>( 
                 <Link to={"/restaurantMenu/"+restaurant?.info?.id} key={restaurant?.info?.id}> 
                <div className="border border-[#3B3A3A] rounded-lg m-4 p-4 w-[250px] bg-[#EAAC6D] hover:shadow-2xl hover:shadow-[#EC7B34]">  
                <Restaurant restaurantData ={restaurant} />
                </div>
                </Link>
            ))}
            </div>
        </div>
    )
}

export default Body;