import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import AddRecipes from "../Pages/AddRecipes/AddRecipes";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AllRecipes from "../Pages/AllRecipes/Allrecipes";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import MyRecipes from "../components/MyRecipes/MyRecipes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            index: true,
            hydrateFallbackElement:<div className='  w-[90%] py-40 mx-auto flex justify-center items-center'><span className="loading loading-bars loading-xl"></span></div>,
            loader: ()=>fetch('https://recipe-book-server-six.vercel.app/TopRecipes'),
            Component: Home
        },
        {
            path: '/AddRecipes',
            element: <PrivateRoute><AddRecipes></AddRecipes></PrivateRoute>
        },
        {
          path: '/AllRecipes',
          hydrateFallbackElement:<div className='  w-[90%] py-40 mx-auto flex justify-center items-center'><span className="loading loading-bars loading-xl"></span></div>,
          loader: ()=>fetch('https://recipe-book-server-six.vercel.app/recipes'),
          Component: AllRecipes
        },
        {
          path: '/RecipeDetails/:id',
          hydrateFallbackElement:<div className='  w-[90%] py-40 mx-auto flex justify-center items-center'><span className="loading loading-bars loading-xl"></span></div>,
          loader: ({ params }) => fetch(`https://recipe-book-server-six.vercel.app/recipes/${params.id}`),
          element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>
        },
        {
          path: '/MyRecipes',
          element:<PrivateRoute><MyRecipes></MyRecipes></PrivateRoute>
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