import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllFood from "../Pages/AllFood/AllFood";
import MyProfile from "../Pages/Profile/MyProfile";
import Gallery from "../Pages/Gallery/Gallery";
import ErrorPage from "../Pages/Error/ErrorPage";

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
          path:'/all-food',
          element:<AllFood/>
        },
        {
          path:'/my-profile',
          element:<MyProfile/>
        },
        {
          path:'/gallery',
          element:<Gallery/>
        }
        ]
    },
  ]);