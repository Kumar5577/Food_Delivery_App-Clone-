import React, { Children, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About"
import RestaurantsList from "./components/RestaurantsList";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { useContext } from "react";
import UserName from "./utils/UserName";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const AppLayout = ()=>{
  const[loggedIn_user,setLoggedIn_user] = useState("Ramya")
    const userName = useContext(UserName);
    userName.name = loggedIn_user;
    return (
        <Provider store={appStore}>
        <UserName.Provider value={value={loggedIn_user,setLoggedIn_user}}>
        <div className="p-0 m-0 bg-orange-200">
        <Header />
        <Outlet />
        </div>
        </UserName.Provider>
        </Provider>
    )
}
const appRouter = createBrowserRouter([
    {
    path:'/',
    element :<AppLayout />,
    children :[
        {
            path:"/",
            element:<Body />
        },
        {
            path:"/home",
            element:<Body />
        },
        {
            path:"/restaurants",
            element:<RestaurantsList />
        },
        {
            path:"/about",
            element:<About />
        },
        {
            path:"/restaurantMenu/:resId",
            element : <RestaurantMenu />
        },
        {
            path:"/cart",
            element : <Cart />
        }
    ],
    errorElement : <Error />
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
