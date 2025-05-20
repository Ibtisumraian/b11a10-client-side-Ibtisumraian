import React, { use } from 'react';
import { AuthContext } from '../../components/AuthContext/AuthContext';

const AddRecipes = () => {
    const { user } = use(AuthContext);
    const handleAddRecipe = (e) => {
        e.preventDefault()
        const userEmail = user.email
        const form = e.target
        const formData = new FormData(form)
        const categories = formData.getAll('categories')
        const recipeData = Object.fromEntries(formData.entries());
        recipeData.categories = categories
        const userRecipe = { ...recipeData, userEmail }
        console.log(userRecipe);
        
    }
    return (
        <div>
            <div className='w-4/12 mx-auto rounded-2xl my-24 py-12 bg-[#D0E5E0]'>
                <div className='text-center py-8'>
                    <h1 className='text-5xl fontRokkitt font-semibold text-white'>Add Recipes</h1>
                </div>
                <form onSubmit={handleAddRecipe} >
                    <div className=' flex flex-col justify-center items-center'>                        
                        <div>
                            <div >
                            <p className='text-base font-semibold py-2'>Title</p>
                            <input name='title' type="text" placeholder="Title" className="input w-[350px]" />
                        </div>                      
                        <div>
                            <p className='text-base font-semibold py-2'>URL</p>
                            <input name='photo' type="url" placeholder="https://" className="input w-[350px]"  title="Must be valid URL" />
                        </div> 
                        </div>  
                        
                            <div>
                                <div>
                                <p className='text-base font-semibold py-2'>Ingredients</p>
                                <textarea name='ingredients' className="textarea w-[350px]" placeholder="Ingredients"></textarea>
                            </div>
                            <div>
                                <p className='text-base font-semibold py-2'>Instructions</p>
                                <textarea name='instructions' className="textarea w-[350px]" placeholder="Instructions"></textarea>
                            </div>
                            </div>
                            
                        <div className='w-[350px] flex gap-3'>
                            <div>
                            <p className='text-base font-semibold py-2'>Cuisine</p>
                            <select name='cuisine' defaultValue="Select type" className="select w-[170px]">
                                <option disabled={true}>Select type</option>
                                <option>Italian</option>
                                <option>Mexican</option>
                                <option>Indian</option>
                                <option>Chinese</option>
                            </select>
                        </div>
                        
                        <div>
                            <p className='text-base font-semibold py-2'>Preparation Time</p>
                            <input name='preparation_time' type="number" placeholder="Preparation time" className="input w-[170px]" />
                        </div>
                        </div>
                        <div>
                            <p className='text-base font-semibold py-2'>Categories </p>
                            <div className='flex flex-wrap gap-6 w-[350px]'>
                                <div className='flex items-center gap-2'>
                                    <input name='categories' type="checkbox" defaultValue='Breakfast'  className="checkbox" />Breakfast
                                </div>
                                <div className='flex items-center gap-2'>
                                 <input name='categories' type="checkbox" defaultValue='Lunch' className="checkbox" />Lunch     
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input name='categories' type="checkbox" defaultValue='Dinner' className="checkbox" />Dinner
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input name='categories' type="checkbox" defaultValue='Dessert' className="checkbox" />Dessert
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input name='categories' type="checkbox" defaultValue='Vegan' className="checkbox" />Vegan
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-base font-semibold py-2'>Like Count</p>
                            <input name='like_count' type="number" defaultValue='0' placeholder="" className="input w-[350px]" />
                        </div>
                        
                        <div>
                            <button className='btn w-[350px] my-8'>Add Recipe</button>
                        </div>
                    </div>                   
                </form>              
            </div>
        </div>
    );
};

export default AddRecipes;