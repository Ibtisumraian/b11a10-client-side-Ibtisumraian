import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';

const MyRecipes = () => {
    const { user } = use(AuthContext)
    const [recipes, setRecipe] = useState([])
    console.log(recipes);

    useEffect(() => {
        fetch(`https://recipe-book-server-six.vercel.app/user/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setRecipe(data)
        })
    },[user])
    
    const handleLikeButton = () => {
        alert("You Can Not Like Your Own Recipe")
    }
    const handleEditButton = (id) => {
        console.log(id)
        
    }
    const handleDeleteButton = (id) => {
        console.log(id)
    }
    return (
        <div className='bg-[#F6F4F1]'>
            <div className='text-center py-12'>
                <h1 className='text-5xl font-bold fontRokkitt'>My Recipes</h1>
            </div>
            {
                recipes.map(recipe => {
                    return <div className='w-8/12 mx-auto 2xl:flex 2xl:justify-between  pb-24'>
                <div>
                    <img className='w-[500px] h-[400px] rounded-xl' src={recipe.photo} alt="" />
                </div>
                <div className='flex items-center gap-8 '>
                    <div>
                        
                        <div className='flex flex-col gap-8 max-w-[350px]'>
                        <div className='bg-white p-8 rounded-xl'>
                            <h1 className=' text-lg font-bold'>Ingredients</h1>
                            <p>{recipe.ingredients}</p>
                        </div>
                        <div className='bg-white p-8 rounded-xl'>
                            <h1 className=' text-lg font-bold'>Instructions</h1>
                            <p>{recipe.instructions}</p>
                        </div>
                    </div>
                    </div>
                        <div className='flex items-center'>
                            <div className='bg-white py-4 px-8 rounded-xl flex flex-col gap-3'>
                            <div>
                                <h1 className=' text-lg font-bold'>Cuisine Type</h1>
                                <p>{ recipe.cuisine}</p>
                            </div>
                            <div>
                                <h1 className=' text-lg font-bold'>Preparation Time</h1>
                                <p>{ recipe.preparation_time} minute</p>
                            </div>
                            <div>
                                <h1 className=' text-lg font-bold'>Categories</h1>
                                <ul>
                                    {
                                        recipe.categories.map((cat, index) => <li key={index}>{ cat}</li>)
                                    }
                                </ul>
                            </div>
                            <div>
                                <h1 className=' text-lg font-bold'>Like Count</h1>
                                <p className='text-[#005A52] flex items-center gap-2.5'><FaHeart /> <span className='text-black'>{ recipe.like_count}</span></p>
                            </div>
                            {/* <div>
                                <button onClick={handleLikeButton} className='btn w-full text-[#005A52] hover:bg-[#005A52] hover:text-white flex items-center justify-center gap-2'>Like <FaHeart /></button>
                            </div> */}
                        </div>
                         
                                <div className='flex flex-col gap-4 ml-4'>
                                <button onClick={handleLikeButton} className='btn bg-[#005A52] text-white text-xl w-fit'><FaHeart /></button>
                                <button onClick={()=>handleEditButton(recipe._id)}  className='btn bg-[#3C393B] text-white text-xl w-fit'><MdEdit /></button>
                                <button onClick={()=>handleDeleteButton(recipe._id)} className='btn bg-[#bbad34] text-white text-xl w-fit'><MdDelete /></button>
                                </div>
                        </div>
                </div>
            </div>
                })
            }
        </div>
    );
};

export default MyRecipes;