import React from 'react';
import { Link, useLocation } from 'react-router';
import { FaRegistered } from "react-icons/fa6";

const PageNotFound = () => {
    const location = useLocation()
    return (
        <div>
            <div
                className="hero  min-h-screen bg-cover bg-no-repeat"
                style={{
                    backgroundImage:
                    "url(https://res.cloudinary.com/dd4np04jl/image/upload/v1747935012/May_22_2025_11_27_57_PM_wdfptq.png)",
                }}
                >
                <div className=""></div>
                <div className="hero-content text-center">
                    <div className=' mx-auto flex flex-col justify-center items-center gap-8 pt-8 text-center'> 
            <h1 className='text-3xl sm:text-7xl font-bold text-[#56c9c1] '>404</h1>
            <h1 className='text-3xl sm:text-5xl font-bold text-[#56c9c1] '>Page Not Found!!</h1>
            <h1 className=' text-[#56c9c1] text-base sm:text-xl'>Oops! The page you're looking for doesn't exist.</h1>
                <h1 className='text-white text-sm sm:text-base  flex justify-center items-center gap-2'><FaRegistered /> There is no page on the path name : { location.pathname}</h1>
            <Link to='/'>
            <button className=' btn text-base sm:text-2xl text-white bg-[#005A52] sm:py-7 sm:px-8 rounded-3xl'>Visit Home Page</button>
            </Link>
        </div>
                </div>
                </div>
        </div>
    );
};

export default PageNotFound;