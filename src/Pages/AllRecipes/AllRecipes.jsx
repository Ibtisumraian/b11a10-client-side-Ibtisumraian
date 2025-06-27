import React, { use, useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../components/AuthContext/AuthContext';
import { motion } from 'framer-motion';
import { MdOutlineArrowDropDown } from 'react-icons/md';

const AllRecipes = () => {
    const { theme } = use(AuthContext)
    const initialRecipes = useLoaderData()
    const [recipes, setRecipes] = useState([])
    const [originalRecipes, setOriginalRecipes] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0) 
        setRecipes(initialRecipes)
        setOriginalRecipes(initialRecipes)
         }, [initialRecipes])
    const navigate = useNavigate()
    const handleRecipeDetailsBtn = (id) => {
        navigate(`/RecipeDetails/${id}`)
    }

    const handleRecipeCategories = (e) => {
        const categories = e.target.value
        if (categories === 'All') {
            setRecipes(originalRecipes)
        }
        else {
            const cat = originalRecipes.filter(recipe => recipe.cuisine === categories);
            setRecipes(cat)
            
        }
        
    }

    const handleMostLike = () => {
        fetch('https://recipe-book-server-six.vercel.app/Descending')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
        
    }

    const handleLessLike = () => {
        fetch('https://recipe-book-server-six.vercel.app/Ascending')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    }


    return (
        <div className='pb-32 pt-16'>
            <div className='text-center py-10'>
                <h1 className='text-5xl font-bold fontRokkitt'>All Recipes</h1>
            </div>
            <div className='w-11/12 mx-auto mb-10 flex items-center gap-6'>
                <div>
                    <select onChange={handleRecipeCategories} defaultValue="Pick a color" className="select w-full sm:w-[190px]">
                    <option disabled>Cuisine Type</option>
                    <option>All</option>
                    <option>American</option>
                    <option>Mexican</option>
                    <option>Italian</option>
                    <option>Chinese</option>
                    <option>Indian</option>
                </select>
                </div>

                <div>
                    <div className="dropdown dropdowns-start">
                        <div tabIndex={0} role="button" className="w-full sm:max-w-[190px] border border-gray-300 py-2 px-3 text-sm rounded-sm hover:cursor-pointer m-1 flex justify-between items-center gap-1 sm:gap-3">Sort Recipes <MdOutlineArrowDropDown className='text-lg' /></div>
                        <ul tabIndex={0} className="dropdown-content border border-white menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={()=>setRecipes(initialRecipes)}><a>All</a></li>
                            <li onClick={handleMostLike}><a>Sort by most likes</a></li>
                            <li onClick={handleLessLike}><a>Sort by least likes</a></li>
                        </ul>
                        </div>
                </div>
            </div>
            <div className=' w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4'>
            {
                recipes.map(recipe => {
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
                                    <p>{recipe.instructions}</p>
                                    <button
                                    onClick={() => handleRecipeDetailsBtn(recipe._id)}
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
        </div>
    );
};

export default AllRecipes;