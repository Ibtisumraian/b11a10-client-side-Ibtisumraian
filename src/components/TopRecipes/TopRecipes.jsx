import React from 'react';
import { FaHeart } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router';

const TopRecipes = ({ topRecipes }) => {
    const navigate = useNavigate()
    const handleRecipeDetails = (id) => {
        console.log(id);
        navigate(`/RecipeDetails/${id}`)
    }
    return (
        <div className='w-9/12 mx-auto '>
            <div className='text-center my-10'>
                <h1 className='text-5xl font-bold fontRokkitt'>Top Recipes</h1>
            </div>
            <div className='grid grid-cols-3 gap-8'>

            {
                topRecipes.map(recipe=>{
                    return <div key={recipe._id} className="card bg-base-100 w-full shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                    src={recipe.photo}
                    alt="Shoes"
                    className="rounded-xl w-[370px] h-[245px]" />
                </figure>
                <div className="card-body text-center items-center">
                            <h2 className="">{ recipe.title}</h2>
                            <p>{ recipe.cuisine}</p>
                            <p className='text-[#005A52] w-fit flex items-center justify-center gap-3 text-xl'><FaHeart /> <span className=' text-2xl'>{ recipe.like_count}</span></p>
                    <div className="card-actions">
                    <button onClick={()=>handleRecipeDetails(recipe._id)} className="btn btn-wide bg-[#005A52] text-white mx-auto">View Details</button>
                    </div>
                </div>
            </div>
                })
            }
            
             
            </div>
            <div className='flex justify-center my-8'>
                 <Link to='/AllRecipes'><button className="bg-[#005A52] text-white font-semibold px-6 py-3 rounded-lg ">See All Recipes</button></Link>
            </div>
        </div>
    );
};

export default TopRecipes;