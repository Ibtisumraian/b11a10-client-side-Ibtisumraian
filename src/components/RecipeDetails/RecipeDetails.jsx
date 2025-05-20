import React, { use, useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';

const RecipeDetails = () => {
    const { user } = use(AuthContext)
    const [likeCount, setLikeCount] = useState("")
    const recipe = useLoaderData()
    const like = parseInt(recipe.like_count)
    useEffect(() => {
        setLikeCount(like)
    }, [like])
    
    const handleLikeButton = () => {
        const email = recipe.userEmail
        if (user.email === email) {
            return alert('You Can Not Like Your Own Recipe')
        }
        // const newLike = likeCount + 1
        setLikeCount(likeCount + 1)
        // recipe.like_count = likeCount
        const newLikeCount = {
            id: recipe._id,
            like_count: likeCount + 1
        }
        fetch('http://localhost:5000/recipes', {
            method: 'PATCH',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(newLikeCount)
        })
        .then(res=>res.json())
        .catch(data=>{
            console.log(data);
            
        })
        
    }
    console.log(likeCount);
    return (
        <div className='bg-[#F6F4F1]'>
            <div className='w-8/12 mx-auto flex justify-between py-24'>
                <div>
                    <img className='w-[600px] h-[400px] rounded-xl' src={recipe.photo} alt="" />
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
                                <p className='text-[#005A52] flex items-center gap-2.5'><FaHeart /> <span className='text-black'>{ likeCount}</span></p>
                            </div>
                            <div>
                                <button onClick={handleLikeButton} className='btn w-full text-[#005A52] hover:bg-[#005A52] hover:text-white flex items-center justify-center gap-2'>Like <FaHeart /></button>
                            </div>
                        
                        </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;