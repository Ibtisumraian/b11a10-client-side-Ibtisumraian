import React, { use } from 'react';
import { AuthContext } from '../../components/AuthContext/AuthContext';
import Swal from 'sweetalert2';

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
        console.log(userRecipe);
        fetch('https://recipe-book-server-six.vercel.app/recipes', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userRecipe)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
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
        <div>
            <div className={`w-fit mx-auto rounded-2xl my-24 p-6 sm:p-12  ${theme === "dark" ? "bg-gray-800" : "bg-[#D0E5E0]"}`}>
                <div className='text-center py-8'>
                    <h1 className='text-4xl sm:text-5xl fontRokkitt font-semibold text-white'>Add Recipes</h1>
                </div>
                <form onSubmit={handleAddRecipe} >
                    <div className=' flex flex-col justify-center items-center'>                        
                        <div>
                            <div >
                            <p className='text-sm sm:text-base font-semibold py-2'>Title</p>
                            <input required name='title' type="text" placeholder="Title" className="input w-full" />
                        </div>                      
                        <div>
                            <p className='text-sm sm:text-base font-semibold py-2'>URL</p>
                            <input required name='photo' type="text" placeholder="https://" className="input w-[250px] sm:w-[350px]"  title="Must be valid URL" />
                        </div> 
                        </div>  
                        
                            <div>
                                <div>
                                <p className='text-sm sm:text-base font-semibold py-2'>Ingredients</p>
                                <textarea required name='ingredients' className="textarea w-[250px] sm:w-[350px]" placeholder="Ingredients"></textarea>
                            </div>
                            <div>
                                <p className='text-sm sm:text-base font-semibold py-2'>Instructions</p>
                                <textarea required name='instructions' className="textarea w-[250px] sm:w-[350px]" placeholder="Instructions"></textarea>
                            </div>
                            </div>
                            
                        <div className='w-[250px] sm:w-[350px] flex gap-3'>
                            <div>
                            <p className='text-sm sm:text-base font-semibold py-2'>Cuisine</p>
                            <select required name='cuisine' defaultValue="Select type" className="select w-[120px] sm:w-[170px]">
                                <option disabled={true}>Select type</option>
                                <option>American</option>
                                <option>Italian</option>
                                <option>Mexican</option>
                                <option>Indian</option>
                                <option>Chinese</option>
                            </select>
                        </div>
                        
                        <div>
                            <p className='text-sm sm:text-base font-semibold py-2'>Preparation Time</p>
                            <input required name='preparation_time' type="number" placeholder="Preparation time" className="input w-[120px] sm:w-[170px]" />
                        </div>
                        </div>
                        <div>
                            <p className='text-sm sm:text-base font-semibold py-2'>Categories </p>
                            <div className='flex flex-wrap gap-6 w-[250px] sm:w-[350px]'>
                                <div className='flex items-center gap-2 text-sm sm:text-base'>
                                    <input  name='categories' type="checkbox" defaultValue='Breakfast'  className="checkbox" />Breakfast
                                </div>
                                <div className='flex items-center gap-2 text-sm sm:text-base'>
                                 <input name='categories' type="checkbox" defaultValue='Lunch' className="checkbox" />Lunch     
                                </div>
                                <div className='flex items-center gap-2 text-sm sm:text-base'>
                                    <input name='categories' type="checkbox" defaultValue='Dinner' className="checkbox" />Dinner
                                </div>
                                <div className='flex items-center gap-2 text-sm sm:text-base'>
                                    <input name='categories' type="checkbox" defaultValue='Dessert' className="checkbox" />Dessert
                                </div>
                                <div className='flex items-center gap-2 text-sm sm:text-base'>
                                    <input name='categories' type="checkbox" defaultValue='Vegan' className="checkbox" />Vegan
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm sm:text-base font-semibold py-2'>Like Count</p>
                            <input required name='like_count' type="number" value={0} placeholder="" className="input w-[250px] sm:w-[350px]" />
                        </div>
                        
                        <div>
                            <button className='btn w-[250px] sm:w-[350px] my-8'>Add Recipe</button>
                        </div>
                    </div>                   
                </form>              
            </div>
        </div>
    );
};

export default AddRecipes;