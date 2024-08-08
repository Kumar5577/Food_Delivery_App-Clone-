import React, { useContext } from "react";
import ReactDOM from "react-dom/client"
import { default_image_url, restaurant_image_url, restaurantL_logo_url } from "../utils/links";
import UserName from "../utils/UserName";



const Restaurant = (props) =>{
    const {loggedIn_user} = useContext(UserName);
    const {restaurantData} = props;
    const{name,cuisines,cloudinaryImageId,avgRating,costForTwo,locality} = restaurantData?.info;
    return (
        <div className="flex flex-wrap">
            <img className="w-[100%] rounded-lg" alt = "logo" src={cloudinaryImageId  ? restaurant_image_url+cloudinaryImageId : default_image_url }/>
            <h4 className="font-bold"><span className="text-red-600 font-bold underline">Restaurant Name:</span>{" "+name}</h4>
            <h4 className="font-bold"><span className="text-red-600 font-bold underline">Cuisines:</span>{" "+cuisines.join(", ")}</h4>
            <h4 className="font-bold"><span className="text-red-600 font-bold underline">Rating:</span>{" "+avgRating} Stars</h4>
            <h4 className="font-bold"><span className="text-red-600 font-bold underline">Price:</span>{" "+costForTwo}</h4>
            <h4 className="font-bold"><span className="text-red-600 font-bold underline">Location:</span>{" "+locality}</h4>
            <h4 className="font-bold"><span className="text-red-600 font-bold underline">User:</span> {loggedIn_user}</h4>
        </div>
    )
}
export default Restaurant;