import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllFood from "../Pages/AllFood/AllFood";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/all-food',
          element:<AllFood/>
        }
      ]
    },
  ]);