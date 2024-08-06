import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllFood from "../Pages/AllFood/AllFood";
import MyProfile from "../Pages/Profile/MyProfile";
import Gallery from "../Pages/Gallery/Gallery";
import ErrorPage from "../Pages/Error/ErrorPage";
import SingleFood from "../Pages/Food/SingleFood";
import { getSingleFood } from "../api/foods";
import SignUp from "../Pages/SignUp/SignUp";
import About from "../Pages/About/About";

export const Router = createBrowserRouter([
  // main route
    {
      path: "/",
      element: <MainLayout/>,
      // error page
      errorElement:<ErrorPage/>,
      // children route
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/all-foods',
          element:<AllFood/>
        },
        {
    path:'/all-foods/:id',
    element:<SingleFood/>,
    loader:({params}) => getSingleFood(params.id)
        },
        {
          path:'/my-profile',
          element:<MyProfile/>
        },
        {
          path:'/gallery',
          element:<Gallery/>
        },
        {
          path:'/sign-up',
     element:<SignUp/>
        }
        ]
    },
  ]);