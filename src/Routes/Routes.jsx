import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayOut";

export const router = createBrowserRouter([
    {
      path: '/',
      Component: MainLayout,
      errorElement: <p>404 page not found</p>,
      children: [
        {
            index:true,
            Component: Home
        },
        {
          path: '/favourites',
          element: <p>Favourites items</p>
        },
        {
          path: '/about',
          element: <p>This is an about page</p>,
        }
      ]
    },
  
  
  ])