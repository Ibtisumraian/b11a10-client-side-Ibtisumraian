import React, { useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import TopRecipes from '../../components/TopRecipes/TopRecipes';
import { useLoaderData } from 'react-router';

const Home = () => {
    // const [topRecipes, setTopRecipes] = useState()
    const topRecipes = useLoaderData()
    console.log(topRecipes);
    
     useEffect(() => {
         window.scrollTo(0, 0)        
     }, [])
    
    useEffect(() => {
    fetch('https://recipe-book-server-six.vercel.app/recipes')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      
    })
    }, []);
    
    console.log(topRecipes);
    

    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <TopRecipes topRecipes={topRecipes}></TopRecipes>
            </div>
            <div>
                <div className='mt-24 w-9/12 mx-auto'>
                    <h1 className='text-5xl font-bold fontRokkitt py-12'>Food Bank</h1>
                </div>
                <div className='w-9/12 mx-auto grid grid-cols-2 mb-24'>
                    <div>
                        <img className='rounded-tl-2xl rounded-bl-2xl' src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747684954/RTM-48129-scaled_ljhc7o.webp" alt="" />
                    </div>
                    <div className='bg-[#D0E5E0] flex flex-col justify-center items-center gap-4  rounded-tr-2xl rounded-br-2xl'>
                        <h1 className='text-3xl font-bold fontRokkitt '>We Have A Food Bank</h1>
                        <p className='text-xl'>We donate 600 homemade meals every single day to the vulnerable.</p>
                        <button className='btn'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='bg-[#D3D3D3] py-24 mb-32'>
                <div className='w-9/12 mx-auto grid grid-cols-2 gap-6 '>
                    <div className='flex flex-col justify-center gap-9'>
                        <h1 className='text-5xl font-bold fontRokkitt'>The Recipe Books Team</h1>
                        <p>Recipe Book is your go-to destination for delicious, easy-to-follow recipes created with home cooks in mind. With a growing collection of over 3,000 handpicked dishes, cooking tips, and meal ideas, we help food lovers around the world explore and enjoy home cooking every day. Our team of passionate food enthusiasts—including chefs, writers, testers, and photographers—work together to bring you trusted, flavorful recipes that you can count on.</p>
                        <button className='btn w-fit'>Learn More</button>
                    </div>
                    <div className='grid grid-cols-4 gap-6 p-6 rounded-2xl bg-[url(https://res.cloudinary.com/dd4np04jl/image/upload/v1747329942/13_cvgu8u.jpg)]'>
                        <div className=' flex flex-col justify-center items-center'>
                            <div className="avatar">
                            <div className="mask mask-squircle w-24">
                                <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
                            </div>
                            </div>
                            <h1>Elena Max</h1>
                            <h1> elena@gmail.com</h1>
                        </div>

                        <div className=' flex flex-col justify-center items-center'>
                            <div className="avatar">
                            <div className="mask mask-squircle w-24">
                                <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
                            </div>
                            </div>
                            <h1>Elena Max</h1>
                            <h1> elena@gmail.com</h1>
                        </div>

                        <div className=' flex flex-col justify-center items-center'>
                            <div className="avatar">
                            <div className="mask mask-squircle w-24">
                                <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
                            </div>
                            </div>
                            <h1>Elena Max</h1>
                            <h1> elena@gmail.com</h1>
                        </div>

                        <div className=' flex flex-col justify-center items-center'>
                            <div className="avatar">
                            <div className="mask mask-squircle w-24">
                                <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
                            </div>
                            </div>
                            <h1>Elena Max</h1>
                            <h1> elena@gmail.com</h1>
                        </div>

                        <div className=' flex flex-col justify-center items-center'>
                            <div className="avatar">
                            <div className="mask mask-squircle w-24">
                                <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
                            </div>
                            </div>
                            <h1>Elena Max</h1>
                            <h1> elena@gmail.com</h1>
                        </div>

                        <div className=' flex flex-col justify-center items-center'>
                            <div className="avatar">
                            <div className="mask mask-squircle w-24">
                                <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
                            </div>
                            </div>
                            <h1>Elena Max</h1>
                            <h1> elena@gmail.com</h1>
                        </div>

                        <div className=' flex flex-col justify-center items-center'>
                            <div className="avatar">
                            <div className="mask mask-squircle w-24">
                                <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
                            </div>
                            </div>
                            <h1>Elena Max</h1>
                            <h1> elena@gmail.com</h1>
                        </div>

                        <div className=' flex flex-col justify-center items-center'>
                            <div className="avatar">
                            <div className="mask mask-squircle w-24">
                                <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
                            </div>
                            </div>
                            <h1>Elena Max</h1>
                            <h1> elena@gmail.com</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;