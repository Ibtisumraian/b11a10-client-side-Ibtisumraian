import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router';

const MyRecipes = () => {
    const { user, theme } = use(AuthContext)
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
    
    // const handleLikeButton = () => {
    //     Swal.fire({
    //                     icon: "error",
    //                     title: "You Can Not Like Your Own Recipe!",
    //                 });
    // }
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
            console.log(data);
            setRecipe(data)
        })
        })
        console.log(userRecipe);
        
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
        <div className={` flex flex-col gap-8 ${theme === "dark" ? "bg-[#0f1b28]" : "bg-[#F6F4F1]"}`}>
            <div className='text-center pt-12'>
                <h1 className='text-5xl font-bold fontRokkitt'>My Recipes</h1>
            </div>
            {
                recipes.map(recipe => {
                    return <div key={recipe._id}
                className={`w-11/12 sm:w-9/12 mb-8 mx-auto 2xl:flex 2xl:justify-between  rounded-2xl p-6 sm:p-16 ${theme === "dark" ? "bg-gray-800" : "bg-[#D0E5E0]"}`}>
                <div className='flex items-center justify-center mb-2'>
                    <img className='w-full 2xl:w-[600px] h-[225px] sm:h-[400px] rounded-xl' src={recipe.photo || "https://res.cloudinary.com/dd4np04jl/image/upload/v1748093770/placeholder_ji3q5g.jpg"} alt="" />
                </div>
                <div className='2xl:flex justify-center items-center gap-8 '>
                    <div>
                        
                        <div className='flex flex-col gap-2 sm:gap-8 2xl:w-[350px] 2xl:ml-4'>
                        <div className={` p-8 rounded-xl ${theme === "dark" ? "bg-[#0f1b28]" : "bg-white"}`}>
                            <h1 className=' text-base sm:text-lg font-bold'>Ingredients</h1>
                            <p className='text-sm sm:text-base'>{recipe.ingredients}</p>
                        </div>
                        <div className={` p-8 rounded-xl ${theme === "dark" ? "bg-[#0f1b28]" : "bg-white"}`}>
                            <h1 className=' text-base sm:text-lg font-bold'>Instructions</h1>
                            <p className='text-sm sm:text-base'>{recipe.instructions}</p>
                        </div>
                    </div>
                    </div>
                        <div className=' 2xl:flex items-center sm:gap-8 my-2 sm:my-8'>
                            <div className={` py-4 px-8 rounded-xl flex justify-between flex-wrap 2xl:flex-col   gap-3 ${theme === "dark" ? "bg-[#0f1b28]" : "bg-white"}`}>
                            <div>
                                <h1 className=' text-sm sm:text-lg font-bold'>Cuisine Type</h1>
                                <p className='text-sm sm:text-base'>{ recipe.cuisine}</p>
                            </div>
                            <div>
                                <h1 className=' text-sm sm:text-lg font-bold'>Preparation Time</h1>
                                <p className='text-sm sm:text-base'>{ recipe.preparation_time} minute</p>
                            </div>
                            <div>
                                <h1 className=' text-sm sm:text-lg font-bold'>Categories</h1>
                                <ul className='text-sm sm:text-base'>
                                    {
                                        recipe.categories.map((cat, index) => <li key={index}>{ cat}</li>)
                                    }
                                </ul>
                            </div>
                            <div>
                                <h1 className=' text-sm sm:text-lg font-bold'>Like Count</h1>
                                <p className='text-[#005A52] flex items-center  gap-2.5'><FaHeart /> <span className=''>{ recipe.like_count}</span></p>
                            </div>
                            {/* <div>
                                <button onClick={handleLikeButton} className='btn w-full text-[#005A52] hover:bg-[#005A52] hover:text-white flex items-center justify-center gap-2'>Like <FaHeart /></button>
                            </div> */}
                        </div>
                         
                                <div className='flex justify-around 2xl:flex 2xl:flex-col gap-4 ml-4 mt-7'>
                                {/* <button onClick={handleLikeButton} className='btn bg-[#005A52] text-white text-xl w-fit'><FaHeart /></button> */}
                                <button onClick={()=>handleEditButton(recipe._id)}  className='btn bg-[#3C393B] text-white text-xl w-fit'><MdEdit /></button>
                                <button onClick={()=>handleDeleteButton(recipe._id)} className='btn bg-[#bbad34] text-white text-xl w-fit'><MdDelete /></button>
                                </div>
                        </div>
                </div>
            </div>
                })
            }


            {modal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 ">
          <div className=" shadow-2xl  w-full max-h-screen ">
           
           
           <div>
            <div className={`w-fit max-h-[90vh] overflow-y-auto mx-auto rounded-2xl my-12 p-6 sm:p-12 ${theme === "dark" ? "bg-gray-800" : "bg-[#D0E5E0]"}`}>
                <div className='text-center py-8'>
                    <h1 className='text-3xl sm:text-5xl fontRokkitt font-semibold text-white'>Update Recipes</h1>
                </div>
                <form onSubmit={handelEditFormSubmit} >
                    <div className=' flex flex-col justify-center items-center'>                        
                      <div className=' gap-4'>
                            <div>
                              <div>
                            <div >
                            <p className='text-sm sm:text-base font-semibold py-2'>Title</p>
                            <input name='title' defaultValue={modalData.title} type="text" placeholder="Title" className="input w-[250px] sm:w-[350px]" />
                        </div>                      
                        <div>
                            <p className='text-sm sm:text-base font-semibold py-2'>URL</p>
                            <input name='photo' defaultValue={modalData.photo} type="url" placeholder="https://" className="input w-[250px] sm:w-[350px]"  title="Must be valid URL" />
                        </div> 
                        </div>  
                        
                            <div>
                                <div>
                                <p className='text-sm sm:text-base font-semibold py-2'>Ingredients</p>
                                <textarea name='ingredients' defaultValue={modalData.ingredients} className="textarea w-[250px] sm:w-[350px]" placeholder="Ingredients"></textarea>
                            </div>
                            <div>
                                <p className='text-sm sm:text-base font-semibold py-2'>Instructions</p>
                                <textarea name='instructions' defaultValue={modalData.instructions} className="textarea w-[250px] sm:w-[350px]" placeholder="Instructions"></textarea>
                            </div>
                            </div>
                      </div>
                            
                        <div>
                                <div className='w-[250px] sm:w-[350px] flex gap-3'>
                            <div>
                            <p className='text-sm sm:text-base font-semibold py-2'>Cuisine</p>
                            <select name='cuisine' defaultValue={modalData.cuisine} className="select w-[120px] sm:w-[170px]">
                                <option disabled={true}>{modalData.cuisine}</option>
                                <option>American</option>
                                <option>Italian</option>
                                <option>Mexican</option>
                                <option>Indian</option>
                                <option>Chinese</option>
                            </select>
                        </div>
                        
                        <div>
                            <p className='text-sm sm:text-base font-semibold py-2'>Preparation Time</p>
                            <input name='preparation_time' defaultValue={modalData.preparation_time} type="number" placeholder="Preparation time" className="input w-[120px] sm:w-[170px]" />
                        </div>
                        </div>
                        <div>
                            <p className='text-sm sm:text-base font-semibold pt-2'>Categories </p>
                            <p className='text-sm mb-4'>Your selected categories was <br /> {modalData?.categories?.map((cat, index) => <span className='font-bold' key={index}>{ cat}, </span>)}</p>
                            <div className='flex flex-wrap gap-6 w-[250px] sm:w-[350px]'>
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
                            <p className='text-sm sm:text-base font-semibold py-2'>Like Count</p>
                            <input name='like_count' type="number" value={modalData.like_count} placeholder="" className="input w-[250px] sm:w-[350px]" />
                        </div>
                        </div>
                      </div>
                        
                        <div>
                            <button className='btn w-[250px] sm:w-[350px] my-8'>Update Recipe</button>
                        </div>
                    </div>                   
                </form>              
            </div>
        </div>
        
        
        
            {/* <div className="flex justify-end ">
              
              <button
                className="bg-[#7BA7E3] text-white btn"
                onClick={()=>setModal(false)}>
                Confirm
              </button>
            </div> */}
          </div>
        </div>
      )}
        </div>
    );
};

export default MyRecipes;