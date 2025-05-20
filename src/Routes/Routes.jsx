import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import AddRecipes from "../Pages/AddRecipes/AddRecipes";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";

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
        },
        {
          path: '/Signin',
          Component: SignIn
        },
        {
          path: '/Signup',
          Component: SignUp
        }
    ]
  },
]);