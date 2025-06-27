import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyRecipes = () => {
    const { user, theme } = use(AuthContext)
    const [recipes, setRecipe] = useState([])
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState([])

    useEffect(() => {
        fetch(`https://recipe-book-server-six.vercel.app/user/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setRecipe(data)
        })
    },[user])
    
    const handleEditButton = (id) => {
    
        fetch(`https://recipe-book-server-six.vercel.app/recipes/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setModalData(data)
        })
        setModal(true)
    }

    const handelEditFormSubmit = (e) => {
        e.preventDefault()
        const userEmail = user.email
        const form = e.target
        const formData = new FormData(form)
        const categories = formData.getAll('categories')
        const recipeData = Object.fromEntries(formData.entries());
        recipeData.categories = categories
        recipeData.like_count= parseInt(recipeData.like_count)
        const userRecipe = { ...recipeData, userEmail }
        fetch(`https://recipe-book-server-six.vercel.app/recipes/${modalData._id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(userRecipe)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Recipe Updated Successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            fetch(`https://recipe-book-server-six.vercel.app/user/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setRecipe(data)
        })
        })
        
        setModal(false)
    }
    const handleDeleteButton = (id) => {
        
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://recipe-book-server-six.vercel.app/recipes/${id}`, {
                        method: 'DELETE'
                        })
                        .then(res=>res.json())
                        .then(data=>{
                            if (data.deletedCount) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                        });
                                window.location.reload()
                                const deletedRecipe = recipes.filter(recipe => recipe._id !== id)
                                setRecipe(deletedRecipe)
                            }
                            
                })
            
        }
        });
    }
    return (
        <div className={` flex flex-col gap-8 min-h-screen ${theme === "dark" ? "bg-[#0f1b28]" : "bg-[#F6F4F1]"}`}>
            <div className='text-center pt-12'>
                <h1 className='text-5xl font-bold fontRokkitt'>My Recipes</h1>
            </div>
            
                {recipes.length === 0 ? (
                <div
                    className={`flex flex-col items-center justify-center py-20 mx-auto max-w-lg rounded-xl shadow-lg ${
                    theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                    }`}
                >
                    <img
                    src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png" // cute empty box icon
                    alt="No recipes"
                    className="w-24 h-24 mb-6 opacity-70"
                    />
                    <h2 className="text-2xl font-semibold mb-2">No Recipes Found</h2>
                    <p className="text-center max-w-xs text-gray-500 mb-6">
                    You haven't added any recipes yet. Start adding some delicious recipes to see them here!
                    </p>
                    <Link to='/DashboardRoute/AddRecipes'><button
                    onClick={() => {/* your add recipe logic or navigation here */}}
                    className="btn bg-[#56c9c1] hover:bg-[#3ea6a1] text-white px-6 py-3 rounded-xl shadow-lg transition"
                    >
                    Add Your First Recipe
                    </button></Link>
                </div>
                ) : (
                recipes.map(recipe => {
                    return (
                    <div
                        key={recipe._id}
                        className={`w-full max-w-6xl mx-auto mb-12 rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col xl:flex-row gap-6 shadow-lg ${
                        theme === 'dark' ? 'bg-gray-800' : 'bg-[#D0E5E0]'
                        }`}
                    >
                        {/* Left Side - Image */}
                        <div className="w-full xl:w-[40%] flex justify-center items-center">
                        <img
                            className="w-full h-48 sm:h-64 md:h-full object-cover rounded-xl shadow-md"
                            src={
                            recipe.photo ||
                            'https://res.cloudinary.com/dd4np04jl/image/upload/v1748093770/placeholder_ji3q5g.jpg'
                            }
                            alt="Recipe"
                        />
                        </div>

                        {/* Right Side - Content */}
                        <div className="flex-1 flex flex-col justify-between gap-6">
                        {/* Ingredients & Instructions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div
                            className={`p-4 sm:p-6 rounded-xl shadow-sm ${
                                theme === 'dark' ? 'bg-[#0f1b28] text-white' : 'bg-white text-black'
                            }`}
                            >
                            <h2 className="text-lg font-semibold mb-2">Ingredients</h2>
                            <p className="text-sm sm:text-base">{recipe.ingredients}</p>
                            </div>
                            <div
                            className={`p-4 sm:p-6 rounded-xl shadow-sm ${
                                theme === 'dark' ? 'bg-[#0f1b28] text-white' : 'bg-white text-black'
                            }`}
                            >
                            <h2 className="text-lg font-semibold mb-2">Instructions</h2>
                            <p className="text-sm sm:text-base">{recipe.instructions}</p>
                            </div>
                        </div>

                        {/* Meta Info */}
                        <div
                            className={`p-4 sm:p-6 rounded-xl shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${
                            theme === 'dark' ? 'bg-[#0f1b28] text-white' : 'bg-white text-black'
                            }`}
                        >
                            <div>
                            <h3 className="text-sm sm:text-lg font-semibold">Cuisine Type</h3>
                            <p className="text-sm sm:text-base">{recipe.cuisine}</p>
                            </div>
                            <div>
                            <h3 className="text-sm sm:text-lg font-semibold">Prep Time</h3>
                            <p className="text-sm sm:text-base">{recipe.preparation_time} mins</p>
                            </div>
                            <div>
                            <h3 className="text-sm sm:text-lg font-semibold">Categories</h3>
                            <ul className="list-disc list-inside text-sm sm:text-base">
                                {recipe.categories.map((cat, index) => (
                                <li key={index}>{cat}</li>
                                ))}
                            </ul>
                            </div>
                            <div>
                            <h3 className="text-sm sm:text-lg font-semibold">Likes</h3>
                            <p className="text-[#005A52] flex items-center gap-2.5">
                                <FaHeart /> <span>{recipe.like_count}</span>
                            </p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="grid grid-cols-2 gap-4">
                            <button
                            onClick={() => handleDeleteButton(recipe._id)}
                            className="btn bg-[#bbad34] text-white text-xl p-3 rounded-xl shadow hover:scale-105 transition-transform"
                            >
                            <MdDelete />
                            </button>
                            <button
                            onClick={() => handleEditButton(recipe._id)}
                            className="btn bg-[#3C393B] text-white text-xl p-3 rounded-xl shadow hover:scale-105 transition-transform"
                            >
                            <MdEdit />
                            </button>
                        </div>
                        </div>
                    </div>
                    );
                })
                )}
  


            {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 p-4 sm:p-8">
            <div className={`w-full max-w-3xl max-h-screen overflow-y-auto rounded-2xl shadow-2xl ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-[#D0E5E0] text-gray-900'}`}>
                
                {/* Header */}
                <div className="text-center py-8 border-b border-gray-300 dark:border-gray-700">
                <h1 className="text-3xl sm:text-5xl fontRokkitt font-semibold">Update Recipe</h1>
                </div>

                <form onSubmit={handelEditFormSubmit} className="px-6 sm:px-12 py-6">
                <div className="space-y-6">

                    {/* Title & Photo */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-semibold block mb-2">Title</label>
                        <input name="title" defaultValue={modalData.title} type="text" placeholder="Title" className="input w-full" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold block mb-2">Photo URL</label>
                        <input name="photo" defaultValue={modalData.photo} type="url" placeholder="https://" className="input w-full" />
                    </div>
                    </div>

                    {/* Ingredients & Instructions */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-semibold block mb-2">Ingredients</label>
                        <textarea name="ingredients" defaultValue={modalData.ingredients} className="textarea w-full" rows={4}></textarea>
                    </div>
                    <div>
                        <label className="text-sm font-semibold block mb-2">Instructions</label>
                        <textarea name="instructions" defaultValue={modalData.instructions} className="textarea w-full" rows={4}></textarea>
                    </div>
                    </div>

                    {/* Cuisine & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-semibold block mb-2">Cuisine</label>
                        <select name="cuisine" defaultValue={modalData.cuisine} className="select w-full">
                        <option disabled>{modalData.cuisine}</option>
                        <option>American</option>
                        <option>Italian</option>
                        <option>Mexican</option>
                        <option>Indian</option>
                        <option>Chinese</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-semibold block mb-2">Preparation Time (min)</label>
                        <input name="preparation_time" defaultValue={modalData.preparation_time} type="number" className="input w-full" />
                    </div>
                    </div>

                    {/* Categories */}
                    <div>
                    <label className="text-sm font-semibold block mb-2">Categories</label>
                    <p className={`text-xs mb-2  ${
                        theme === 'dark' ? 'text-[#56c9c1]' : 'text-gray-800'
                    }`}>
                        Previously selected: {modalData?.categories?.map((cat, i) => (
                        <span className="font-bold" key={i}>{cat}{i < modalData.categories.length - 1 ? ', ' : ''}</span>
                        ))}
                    </p>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'].map(cat => (
                        <label key={cat} className="flex items-center gap-2 text-sm">
                            <input
                            name="categories"
                            type="checkbox"
                            defaultChecked={modalData?.categories?.includes(cat)}
                            value={cat}
                            className="checkbox"
                            />
                            {cat}
                        </label>
                        ))}
                    </div>
                    </div>

                    {/* Like Count */}
                    <div>
                    <label className="text-sm font-semibold block mb-2">Like Count</label>
                    <input name="like_count" type="number" Value={modalData.like_count} readOnly className="input w-full" />
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                    <button type="submit" className="btn bg-[#56c9c1] text-white w-full sm:w-40">Update</button>
                    <button type="button" onClick={() => setModal(false)} className="btn w-full sm:w-40 bg-gray-400 text-white">Cancel</button>
                    </div>
                </div>
                </form>
            </div>
            </div>

      )}
        </div>
    );
};

export default MyRecipes;