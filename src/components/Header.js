import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { logo_url } from "../utils/links";
import { Link } from "react-router-dom";
import UserName from "../utils/UserName";
import { useSelector } from "react-redux";


const Header = () => {
  const {loggedIn_user,setLoggedIn_user} = useContext(UserName);
  const cart = useSelector((store)=>store.cart.items)
  const [logBtn, setLogBtn] = useState("Login");
  const btnClicked = () => {
    logBtn === "Login" ? setLogBtn("Logout") : setLogBtn("Login");
  };
  return (
    <div className=" border border-gray-100 rounded-lg mb-2 p-8 flex justify-between bg-[#EAAC6D] ">
      <div className="">
        <img src={logo_url} alt="logo-pic" className="w-[7.5rem] rounded-lg "/>
      </div>
      <div className="">
        <ul className=" flex justify-between ">
          <li className=""><input className="m-2 p-2 w-[7.5rem] border-2 border-black rounded-lg" type="text" onChange={(e)=>setLoggedIn_user(e.target.value.toUpperCase())}/></li>
          <li className="font-bold m-2 p-2 hover:shadow-xl hover:shadow-[#EC7B34] hover:rounded-lg ">{loggedIn_user}</li>
          <Link className=" hover:shadow-xl hover:shadow-[#EC7B34] hover:rounded-lg " to={"/home"}>
            <li className="m-2 p-2 ">Home</li>
          </Link>
          <Link className=" hover:shadow-xl hover:shadow-[#EC7B34] hover:rounded-lg " to={"/restaurants"}>
            <li className="m-2 p-2 ">Restaurant List</li>
          </Link>
          <Link className=" hover:shadow-xl hover:shadow-[#EC7B34] hover:rounded-lg " to={"/about"}>
            <li className="m-2 p-2 ">About Us</li>
          </Link>
          <Link className=" hover:shadow-xl hover:shadow-[#EC7B34] hover:rounded-lg " to={"/cart"}>
            <li className="m-2 p-2 ">Cart({cart.length})</li>
          </Link>
          <button className="m-2 p-2 hover:shadow-xl hover:shadow-[#EC7B34] hover:rounded-lg" onClick={btnClicked}>
            {logBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
