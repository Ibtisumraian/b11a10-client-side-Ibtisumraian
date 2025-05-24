import React, { use, useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../components/AuthContext/AuthContext';

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
    console.log(recipes);

    const handleRecipeDetailsBtn = (id) => {
        navigate(`/RecipeDetails/${id}`)
    }

    const handleRecipeCategories = (e) => {
        // e.preventDefault()
        const categories = e.target.value
        // console.log(categories);
        if (categories === 'All') {
            setRecipes(originalRecipes)
        }
        else {
            const cat = originalRecipes.filter(recipe => recipe.cuisine === categories);
            setRecipes(cat)
            console.log(cat);
            
        }
        
    }


    return (
        <div className='pb-32 pt-16'>
            <div className='text-center py-10'>
                <h1 className='text-5xl font-bold fontRokkitt'>All Recipes</h1>
            </div>
            <div className='w-11/12 mx-auto mb-10'>
                <select onChange={handleRecipeCategories} defaultValue="Pick a color" className="select w-full sm:w-[320px]">
                    <option disabled>Cuisine Type</option>
                    <option>All</option>
                    <option>American</option>
                    <option>Mexican</option>
                    <option>Italian</option>
                    <option>Chinese</option>
                    <option>Indian</option>
                </select>
            </div>
            <div className=' w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4'>
            {
                recipes.map(recipe => {
                    return <div key={recipe._id} className={`card bg-base-100  shadow-sm ${theme === "dark" ? "bg-gray-800" : "bg-base-100" }`}>
                            <figure className="px-4 lg:px-10 pt-10">
                                <img
                                src={recipe.photo || "https://res.cloudinary.com/dd4np04jl/image/upload/v1748093770/placeholder_ji3q5g.jpg"}
                                alt="Shoes"
                                className="rounded-xl w-[300px] h-[200px] object-cover" />
                            </figure>
                            <div className="card-body items-center text-center">
                            <h2 className="card-title">{ recipe.title}</h2>
                            <p>{recipe.cuisine}</p>
                            <p className='text-[#005A52] flex items-center gap-2.5'><FaHeart /> <span className=''>{ recipe.like_count}</span></p>
                                <div className="card-actions">
                                <button onClick={()=>handleRecipeDetailsBtn(recipe._id)} className={`btn   ${theme === "dark" ? "border border-[#56c9c1] text-[#56c9c1]" : "bg-[#005A52] text-white"}`}>See Details</button>
                                </div>
                            </div>
                            </div>
                })
            }
        </div>
        </div>
    );
};

export default AllRecipes;