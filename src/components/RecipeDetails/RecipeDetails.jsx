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
        setLikeCount(likeCount + 1)
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
        .then(()=>{
            
            
        })
        
    }
    return (
        <div className={`pb-16 ${theme === "dark" ? "bg-[#0f1b28]" : "bg-[#F6F4F1]"}`}>
            {/* Dynamic Heading */}
            <div className="text-center py-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold fontRokkitt">
                <span className={`${theme === "dark" ? "text-white" : "text-[#005A52]"}`}>
                    <Typewriter
                    words={[`${likeCount} people interested in this recipe`]}
                    loop={Infinity}
                    cursor
                    cursorStyle="||"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    />
                </span>
                </h1>
            </div>

            {/* Main Content Container */}
            <div className={`w-11/12 sm:w-9/12 mx-auto rounded-2xl p-6 sm:p-12 2xl:flex 2xl:gap-8 ${theme === "dark" ? "bg-gray-800" : "bg-[#D0E5E0]"}`}>
                
                {/* Recipe Image */}
                <div className="2xl:w-[600px]">
                <img
                    className="w-full h-[225px] sm:h-[400px] object-cover rounded-xl shadow-md"
                    src={recipe.photo || "https://res.cloudinary.com/dd4np04jl/image/upload/v1748093770/placeholder_ji3q5g.jpg"}
                    alt="Recipe"
                />
                </div>

                {/* Recipe Details */}
                <div className="flex-1 mt-6 2xl:mt-0 flex flex-col gap-6">

                {/* Ingredients & Instructions */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <div className={`p-6 rounded-xl shadow-sm ${theme === "dark" ? "bg-[#0f1b28] text-white" : "bg-white text-black"}`}>
                    <h2 className="text-xl font-semibold mb-2"> Ingredients</h2>
                    <p>{recipe.ingredients}</p>
                    </div>
                    <div className={`p-6 rounded-xl shadow-sm ${theme === "dark" ? "bg-[#0f1b28] text-white" : "bg-white text-black"}`}>
                    <h2 className="text-xl font-semibold mb-2"> Instructions</h2>
                    <p>{recipe.instructions}</p>
                    </div>
                </div>

                {/* Metadata Section */}
                <div className={`p-6 rounded-xl shadow-sm flex flex-wrap justify-between gap-4 ${theme === "dark" ? "bg-[#0f1b28] text-white" : "bg-white text-black"}`}>
                    <div>
                    <h3 className="font-semibold"> Cuisine Type</h3>
                    <p>{recipe.cuisine}</p>
                    </div>
                    <div>
                    <h3 className="font-semibold">⏱ Preparation Time</h3>
                    <p>{recipe.preparation_time} minutes</p>
                    </div>
                    <div>
                    <h3 className="font-semibold"> Categories</h3>
                    <ul className="list-disc list-inside">
                        {recipe.categories.map((cat, index) => (
                        <li key={index}>{cat}</li>
                        ))}
                    </ul>
                    </div>
                    <div>
                    <h3 className="font-semibold"> Like Count</h3>
                    <p className="flex items-center gap-2 text-[#005A52]">
                        <FaHeart /> {likeCount}
                    </p>
                    </div>
                </div>

                {/* Like Button */}
                <div className="mt-4 w-full">
                    <button
                    onClick={handleLikeButton}
                    className={`btn w-full  px-6 py-2 text-lg font-semibold rounded-xl transition-all duration-300 ease-in-out hover:bg-[#005A52] hover:text-white flex items-center justify-center gap-2 ${theme === "dark" ? "border border-[#56c9c1] text-[#56c9c1]" : "text-[#005A52]"}`}
                    >
                    Like <FaHeart />
                    </button>
                </div>
                </div>
            </div>
            </div>

    );
};

export default RecipeDetails;