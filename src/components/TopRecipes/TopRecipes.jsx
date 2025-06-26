import React, { use } from 'react';
import { FaHeart } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';
import { motion } from 'framer-motion';

const TopRecipes = ({ topRecipes }) => {
    const { theme } = use(AuthContext)
    const navigate = useNavigate()
    const handleRecipeDetails = (id) => {
        navigate(`/RecipeDetails/${id}`)
    }
    return (
        <div className='w-9/12 lg:w-11/12 mx-auto '>
            <div className='text-center my-10'>
                <h1 className={`text-3xl sm:text-5xl text-gray-600 font-bold fontRokkitt ${theme == "dark" && "text-[#56c9c1]"}`}>Top Recipes</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>

            {
                topRecipes.map(recipe=>{
                    return <motion.div
                                key={recipe._id}
                                initial={{ opacity: 1, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                viewport={{ once: true, amount: 0.2 }}
                                className={`w-full rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-300 ${
                                    theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                                }`}
                                >
                                {/* Image */}
                                <div className="relative">
                                    <img
                                    src={
                                        recipe.photo ||
                                        'https://res.cloudinary.com/dd4np04jl/image/upload/v1748093770/placeholder_ji3q5g.jpg'
                                    }
                                    alt="Recipe"
                                    className="w-full h-56 object-cover"
                                    />
                                    <div className="absolute top-3 left-3 bg-[#005A5299] text-white font-semibold text-xs px-3 py-1 rounded-full shadow-md">
                                    {recipe.cuisine}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col gap-3 text-center">
                                    <h2 className="text-xl font-bold fontRokkitt">{recipe.title}</h2>

                                    <div className="flex items-center justify-center gap-2 text-[#005A52] dark:text-[#56c9c1]">
                                    <FaHeart className="text-lg" />
                                    <span className="text-lg font-semibold">Likes : {recipe.like_count}</span>
                                    </div>

                                    <button
                                    onClick={() => handleRecipeDetails(recipe._id)}
                                    className={`mt-2 btn w-full btn-sm sm:btn-md rounded-full transition-all duration-200 ${
                                        theme === 'dark'
                                        ? 'border border-[#56c9c1] text-[#56c9c1] hover:bg-[#56c9c1] hover:text-white'
                                        : 'bg-[#005A52] text-white hover:bg-[#00796b]'
                                    }`}
                                    >
                                    View Details
                                    </button>
                                </div>
                                </motion.div>


                })
            }
            
             
            </div>
            <div className="flex justify-center my-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Link
                    to="/AllRecipes"
                    className={`cursor-pointer text-white font-semibold btn btn-md md:btn-lg rounded-lg ${
                        theme === 'dark' ? 'bg-[#56c9c1]' : 'bg-[#005A52]'
                    }`}
                    >
                    See All Recipes
                    </Link>
                </motion.div>
                </div>
        </div>
    );
};

export default TopRecipes;