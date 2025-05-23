import React, { use, useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';
import { Typewriter } from 'react-simple-typewriter'
import Swal from 'sweetalert2';

const RecipeDetails = () => {
    useEffect(() => {
             window.scrollTo(0, 0)        
         }, [])
    const { user, theme } = use(AuthContext)
    const [likeCount, setLikeCount] = useState("")
    const recipe = useLoaderData()
    const like = parseInt(recipe.like_count)
    useEffect(() => {
        setLikeCount(like)
    }, [like])
    
    const handleLikeButton = () => {
        const email = recipe.userEmail
        if (user.email === email) {
            return Swal.fire({
                icon: "error",
                title: "You Can Not Like Your Own Recipe!",
            });
        }
        // const newLike = likeCount + 1
        setLikeCount(likeCount + 1)
        // recipe.like_count = likeCount
        const newLikeCount = {
            id: recipe._id,
            like_count: likeCount + 1
        }
        fetch('https://recipe-book-server-six.vercel.app/recipes', {
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
        <div className={`${theme === "dark" ? "bg-[#0f1b28]" : "bg-[#F6F4F1]"}`}>
            <div className='text-center py-5'>
                <h1 className='text-3xl h-[100px] sm:h-fit md:text-4xl lg:text-5xl p-6  font-bold fontRokkitt'>
                    <span className={`${theme === "dark" ? "text-white" : "text-[#005A52]"}`}>
                    <Typewriter
                        words={[`${likeCount} people interested in this recipe`]}
                        loop={Infinity} 
                        cursor
                        cursorStyle='||'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    </span>
                </h1>
                </div>
            <div className={`w-11/12 sm:w-9/12 mb-8 mx-auto 2xl:flex 2xl:justify-between  rounded-2xl p-6 sm:p-16 ${theme === "dark" ? "bg-gray-800" : "bg-[#D0E5E0]"}`}>
                <div>
                    <img className='w-full 2xl:w-[600px] h-[225px] sm:h-[400px] rounded-xl' src={recipe.photo} alt="" />
                </div>
                <div className='2xl:flex justify-center items-center gap-8'>
                    <div>
                        
                        <div className='flex flex-col gap-2 sm:gap-6 mt-2 sm:mt-6 2xl:w-[350px] 2xl:ml-4'>
                        <div className={` p-8 rounded-xl ${theme === "dark" ? "bg-[#0f1b28]" : "bg-white"}`}>
                            <h1 className=' text-lg font-bold'>Ingredients</h1>
                            <p>{recipe.ingredients}</p>
                        </div>
                        <div className={` p-8 rounded-xl ${theme === "dark" ? "bg-[#0f1b28]" : "bg-white"}`}>
                            <h1 className=' text-lg font-bold'>Instructions</h1>
                            <p>{recipe.instructions}</p>
                        </div>
                    </div>
                    </div>
                        <div className={` py-4 px-8 rounded-xl flex justify-between flex-wrap 2xl:flex-col mt-2 sm:mt-6  gap-3 ${theme === "dark" ? "bg-[#0f1b28]" : "bg-white"}`}>
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
                                <p className='text-[#005A52] flex items-center gap-2.5'><FaHeart /> <span className=''>{ likeCount}</span></p>
                            </div>
                        
                            <div className=' hidden 2xl:block'>
                                <button onClick={handleLikeButton} className={`btn w-full  hover:bg-[#005A52] hover:text-white flex items-center justify-center gap-2 ${theme === "dark" ? "border border-[#56c9c1] text-[#56c9c1]" : "text-[#005A52]"}`}>Like <FaHeart /></button>
                            </div>
                        </div>
                            <div className='mt-2 sm:mt-6 block 2xl:hidden'>
                                <button onClick={handleLikeButton} className={`btn w-full  hover:bg-[#005A52] hover:text-white flex items-center justify-center gap-2 ${theme === "dark" ? "border border-[#56c9c1] text-[#56c9c1]" : "text-[#005A52]"}`}>Like <FaHeart /></button>
                            </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;