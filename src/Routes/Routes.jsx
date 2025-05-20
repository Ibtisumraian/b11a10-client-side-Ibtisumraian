import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import AddRecipes from "../Pages/AddRecipes/AddRecipes";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AllRecipes from "../Pages/AllRecipes/Allrecipes";

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
            element: <PrivateRoute><AddRecipes></AddRecipes></PrivateRoute>
        },
        {
          path: '/AllRecipes',
          hydrateFallbackElement:<div className='  w-[90%] py-40 mx-auto flex justify-center items-center'><span className="loading loading-bars loading-xl"></span></div>,
          loader:()=>fetch('http://localhost:5000/recipes'),
          Component: AllRecipes
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