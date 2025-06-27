import React, { use } from 'react';
import { AuthContext } from '../../components/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { motion } from "framer-motion";

const AddRecipes = () => {
    const { user, theme } = use(AuthContext);
    const handleAddRecipe = (e) => {
        e.preventDefault()
        const userEmail = user.email
        const userName = user.displayName
        const form = e.target
        const formData = new FormData(form)
        const categories = formData.getAll('categories')
        const recipeData = Object.fromEntries(formData.entries());
        recipeData.categories = categories
        recipeData.like_count= parseInt(recipeData.like_count)
        const userRecipe = { ...recipeData, userEmail, userName }
        fetch('https://recipe-book-server-six.vercel.app/recipes', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userRecipe)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.insertedId) {
                Swal.fire({
                    title: "Recipe Added Successfully!",
                    icon: "success"
                });
            }
            e.target.reset()
        })
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`w-full max-w-5xl mx-auto px-4 py-16 rounded-2xl shadow-lg ${
                theme === "dark" ? "bg-gray-800 text-white" : "bg-[#D0E5E0] text-black"
            }`}
            >
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl fontRokkitt font-semibold text-center mb-10"
            >
                Add a New Recipe
            </motion.h1>

            <form onSubmit={handleAddRecipe} className="space-y-8">
                {/* Title & URL */}
                <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="grid sm:grid-cols-2 gap-6"
                >
                <div>
                    <label className="block font-semibold mb-2 text-sm sm:text-base">Title</label>
                    <input required name="title" type="text" placeholder="Recipe title" className="input w-full" />
                </div>
                <div>
                    <label className="block font-semibold mb-2 text-sm sm:text-base">Image URL</label>
                    <input required name="photo" type="url" placeholder="https://image-link" className="input w-full" />
                </div>
                </motion.div>

                {/* Ingredients & Instructions */}
                <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="grid sm:grid-cols-2 gap-6"
                >
                <div>
                    <label className="block font-semibold mb-2 text-sm sm:text-base">Ingredients</label>
                    <textarea required name="ingredients" rows={4} className="textarea w-full" />
                </div>
                <div>
                    <label className="block font-semibold mb-2 text-sm sm:text-base">Instructions</label>
                    <textarea required name="instructions" rows={4} className="textarea w-full" />
                </div>
                </motion.div>

                {/* Cuisine & Time */}
                <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="grid sm:grid-cols-2 gap-6"
                >
                <div>
                    <label className="block font-semibold mb-2 text-sm sm:text-base">Cuisine Type</label>
                    <select required name="cuisine" defaultValue="Select type" className="select w-full">
                    <option disabled>Select type</option>
                    <option>American</option>
                    <option>Italian</option>
                    <option>Mexican</option>
                    <option>Indian</option>
                    <option>Chinese</option>
                    </select>
                </div>
                <div>
                    <label className="block font-semibold mb-2 text-sm sm:text-base">Preparation Time</label>
                    <input required name="preparation_time" type="number"  className="input w-full" />
                </div>
                </motion.div>

                {/* Categories */}
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                >
                <label className="block font-semibold mb-2 text-sm sm:text-base">Categories</label>
                <div className="flex flex-wrap gap-4">
                    {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 text-sm sm:text-base">
                        <input name="categories" type="checkbox" defaultValue={cat} className="checkbox" />
                        {cat}
                    </label>
                    ))}
                </div>
                </motion.div>

                {/* Like Count */}
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                >
                <label className="block font-semibold mb-2 text-sm sm:text-base">Like Count</label>
                <input
                    required
                    name="like_count"
                    type="number"
                    value={0}
                    readOnly
                    className="input w-full"
                />
                </motion.div>

                {/* Button */}
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center"
                >
                <button
                    type="submit"
                    className={`btn w-full sm:w-[300px] mt-4 ${
                    theme === 'dark' ? 'bg-[#56c9c1] text-black' : 'bg-[#005A52] text-white'
                    }`}
                >
                    Add Recipe
                </button>
                </motion.div>
            </form>
            </motion.div>

    );
};

export default AddRecipes;