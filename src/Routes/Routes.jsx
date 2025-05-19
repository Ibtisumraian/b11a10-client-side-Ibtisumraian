import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import AddRecipes from "../Pages/AddRecipes/AddRecipes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path: '/AddRecipes',
            element: <AddRecipes></AddRecipes>
        }
    ]
  },
]);