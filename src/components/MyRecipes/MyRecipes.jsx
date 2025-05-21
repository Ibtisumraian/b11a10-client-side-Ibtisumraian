import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
// import { useNavigate } from 'react-router';

const MyRecipes = () => {
    const { user } = use(AuthContext)
    const [recipes, setRecipe] = useState([])
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState([])

    // const navigate = useNavigate()
    console.log(modalData);

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
        // navigate(`/UpdateRecipes/${id}`)
        fetch(`https://recipe-book-server-six.vercel.app/recipes/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
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
            console.log("data after update", data);
            
        })
        console.log(userRecipe);
        
        setModal(false)
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


            {modal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className=" shadow-2xl  rounded-2xl w-full ">
           
           
           <div>
            <div className='w-[600px] mx-auto rounded-2xl my-24 py-12 bg-[#D0E5E0]'>
                <div className='text-center py-8'>
                    <h1 className='text-5xl fontRokkitt font-semibold text-white'>Add Recipes</h1>
                </div>
                <form onSubmit={handelEditFormSubmit} >
                    <div className=' flex flex-col justify-center items-center'>                        
                        <div>
                            <div >
                            <p className='text-base font-semibold py-2'>Title</p>
                            <input name='title' defaultValue={modalData.title} type="text" placeholder="Title" className="input w-[350px]" />
                        </div>                      
                        <div>
                            <p className='text-base font-semibold py-2'>URL</p>
                            <input name='photo' defaultValue={modalData.photo} type="url" placeholder="https://" className="input w-[350px]"  title="Must be valid URL" />
                        </div> 
                        </div>  
                        
                            <div>
                                <div>
                                <p className='text-base font-semibold py-2'>Ingredients</p>
                                <textarea name='ingredients' defaultValue={modalData.ingredients} className="textarea w-[350px]" placeholder="Ingredients"></textarea>
                            </div>
                            <div>
                                <p className='text-base font-semibold py-2'>Instructions</p>
                                <textarea name='instructions' defaultValue={modalData.instructions} className="textarea w-[350px]" placeholder="Instructions"></textarea>
                            </div>
                            </div>
                            
                        <div className='w-[350px] flex gap-3'>
                            <div>
                            <p className='text-base font-semibold py-2'>Cuisine</p>
                            <select name='cuisine' defaultValue={modalData.cuisine} className="select w-[170px]">
                                <option disabled={true}>{modalData.cuisine}</option>
                                <option>American</option>
                                <option>Italian</option>
                                <option>Mexican</option>
                                <option>Indian</option>
                                <option>Chinese</option>
                            </select>
                        </div>
                        
                        <div>
                            <p className='text-base font-semibold py-2'>Preparation Time</p>
                            <input name='preparation_time' defaultValue={modalData.preparation_time} type="number" placeholder="Preparation time" className="input w-[170px]" />
                        </div>
                        </div>
                        <div>
                            <p className='text-base font-semibold py-2'>Categories </p>
                            <div className='flex flex-wrap gap-6 w-[350px]'>
                                <div className='flex items-center gap-2'>
                                    <input name='categories' type="checkbox" defaultChecked={modalData?.categories?.includes('Breakfast')} defaultValue='Breakfast'  className="checkbox" />Breakfast
                                </div>
                                <div className='flex items-center gap-2'>
                                 <input name='categories' type="checkbox" defaultChecked={modalData?.categories?.includes('Lunch')} defaultValue='Lunch' className="checkbox" />Lunch     
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input name='categories' type="checkbox" defaultChecked={modalData?.categories?.includes('Dinner')} defaultValue='Dinner' className="checkbox" />Dinner
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input name='categories' type="checkbox" defaultChecked={modalData?.categories?.includes('Dessert')} defaultValue='Dessert' className="checkbox" />Dessert
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input name='categories' type="checkbox" defaultChecked={modalData?.categories?.includes('Vegan')} defaultValue='Vegan' className="checkbox" />Vegan
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-base font-semibold py-2'>Like Count</p>
                            <input name='like_count' type="number" value={modalData.like_count} placeholder="" className="input w-[350px]" />
                        </div>
                        
                        <div>
                            <button className='btn w-[350px] my-8'>Add Recipe</button>
                        </div>
                    </div>                   
                </form>              
            </div>
        </div>
        
        
        
            <div className="flex justify-end ">
              
              <button
                className="bg-[#7BA7E3] text-white btn"
                onClick={()=>setModal(false)}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
        </div>
    );
};

export default MyRecipes;