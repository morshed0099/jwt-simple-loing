import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Singup from "../pages/Singup";

export const router=createBrowserRouter([{
    path:"/",
    element:<Main />,
    children:[
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/login",
            element:<Login />
        },
        {
            path:'/signup',
            element:<Singup />
        }
    ]
}])