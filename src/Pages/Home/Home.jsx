import React, { use, useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import TopRecipes from '../../components/TopRecipes/TopRecipes';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../components/AuthContext/AuthContext';

const Home = () => {
    // const [topRecipes, setTopRecipes] = useState()
    const { theme } = use(AuthContext)
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
        <div className={` ${theme == "dark" && "bg-[#0f1b28]"}`}>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <TopRecipes topRecipes={topRecipes}></TopRecipes>
            </div>
            <div>
                <div className='mt-24 w-11/12 mx-auto'>
                    <h1 className='text-3xl sm:text-5xl font-bold fontRokkitt py-6 sm:py-12'>Food Bank</h1>
                </div>
                <div className='w-11/12 lg:w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 mb-24'>
                    <div>
                        <img className='rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none lg:rounded-bl-2xl' src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747684954/RTM-48129-scaled_ljhc7o.webp" alt="" />
                    </div>
                    <div className={` flex flex-col justify-center items-center text-center gap-4 p-8 rounded-bl-2xl lg:rounded-bl-none lg:rounded-tr-2xl rounded-br-2xl ${ theme == "dark" ? "bg-gray-800 text-[#56c9c1]" : "bg-[#D0E5E0] text-white"}`}>
                        <h1 className='text-xl sm:text-3xl font-bold fontRokkitt '>We Have A Food Bank</h1>
                        <p className={`text-md sm:text-xl ${theme === "dark" && "text-white"}`}>We donate 600 homemade meals every single day to the vulnerable.</p>
                        <button className={`btn btn-sm sm:btn-md w-fit ${theme === "dark" && "border border-[#56c9c1] text-[#56c9c1]"}`}>Learn More</button>
                    </div>
                </div>
            </div>
            <div className={`py-24 mb-32 ${theme == "dark" ? "bg-gray-800 text-[#56c9c1]" : "bg-[#D3D3D3]"}`}>
                <div className='w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                    <div className='flex flex-col justify-center gap-9'>
                        <h1 className='text-3xl sm:text-5xl font-bold fontRokkitt text-center lg:text-left'>The Recipe Books Team</h1>
                        <p className={`text-sm sm:text-lg text-center lg:text-left ${theme === "dark" && "text-white"}`}>Recipe Book is your go-to destination for delicious, easy-to-follow recipes created with home cooks in mind. With a growing collection of over 3,000 handpicked dishes, cooking tips, and meal ideas, we help food lovers around the world explore and enjoy home cooking every day. Our team of passionate food enthusiasts—including chefs, writers, testers, and photographers—work together to bring you trusted, flavorful recipes that you can count on.</p>
                        <button className={`btn btn-sm sm:btn-md mx-auto lg:mx-0 w-fit ${theme === "dark" && "border border-[#56c9c1] text-[#56c9c1]"}`}>Learn More</button>
                    </div>
                    <div className='grid grid-cols-3 2xl:grid-cols-4 gap-3 lg:gap-0 p-3 2xl:p-6 rounded-2xl bg-[url(https://res.cloudinary.com/dd4np04jl/image/upload/v1747329942/13_cvgu8u.jpg)]'>
                        <div className=' flex flex-col justify-center items-center'>
                            <div className="avatar">
                            <div className="mask mask-squircle w-13 sm:w-18 2xl:w-24">
                                <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1748019377/1516924701389_kwvmqb.jpg" />
                            </div>
                            </div>
                            <h1 className='text-sm sm:text-base'>Owen Tan</h1>
                            
                        </div>

                        <div className=' flex flex-col justify-center items-center'>
                            <div className="avatar">
                            <div className="mask mask-squircle w-13 sm:w-18 2xl:w-24">
                                <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1748019483/1731624321659_zuq5jk.jpg" />
                            </div>
                            </div>
                            <h1 className='text-sm sm:text-base'>Mia Lim</h1>
                            
                        </div>

                        <div className=' flex flex-col justify-center items-center'>
                            <div className="avatar">
                            <div className="mask mask-squircle w-13 sm:w-18 2xl:w-24">
                                <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1748019621/1626110104148_iyo6hi.jpg" />
                            </div>
                            </div>
                            <h1 className='text-sm sm:text-base'>Noah Park</h1>
                            
                        </div>

                        <div className=' flex flex-col justify-center items-center'>
                            <div className="avatar">
                            <div className="mask mask-squircle w-13 sm:w-18 2xl:w-24">
                                <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1748019760/1737670000274_imayuv.jpg" />
                            </div>
                            </div>
                            <h1 className='text-sm sm:text-base'>Lily Tran</h1>
                           
                        </div>

                        <div className=' flex flex-col justify-center items-center'>
                            <div className="avatar">
                            <div className="mask mask-squircle w-13 sm:w-18 2xl:w-24">
                                <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1748019889/people-2402-1H6A2446gaffney-20210923170531_sy6y6n.jpg" />
                            </div>
                            </div>
                            <h1 className='text-sm sm:text-base'>Ryan Vu</h1>
                            
                        </div>

                        <div className=' flex flex-col justify-center items-center'>
                            <div className="avatar">
                            <div className="mask mask-squircle w-13 sm:w-18 2xl:w-24">
                                <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1748020271/istockphoto-517234226-612x612_vpugax.jpg" />
                            </div>
                            </div>
                            <h1 className='text-sm sm:text-base text-center'>Emma Dao</h1>
                            
                        </div>

                        <div className=' flex flex-col justify-center items-center'>
                            <div className="avatar">
                            <div className="mask mask-squircle w-13 sm:w-18 2xl:w-24">
                                <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1748020486/images_dcbx12.jpg" />
                            </div>
                            </div>
                            <h1 className='text-sm sm:text-base'>Jack Cho</h1>
                            
                        </div>

                        <div className=' flex flex-col justify-center items-center'>
                            <div className="avatar">
                            <div className="mask mask-squircle w-13 sm:w-18 2xl:w-24">
                                <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1748020495/images_1_wwl883.jpg" />
                            </div>
                            </div>
                            <h1 className='text-sm sm:text-base'>Elena Max</h1>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;