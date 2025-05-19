import React from 'react';

const Banner = () => {
    return (
        <div>
         <div className="relative  bg-[url('https://res.cloudinary.com/dd4np04jl/image/upload/v1747676388/slide-image-1_tsao2a.webp')] bg-cover bg-center bg-no-repeat h-[717px]" >
      
      <div className="relative w-9/12 mx-auto flex flex-col items-start justify-center h-full  text-black px-4">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 text-[#333333] fontRokkitt">Endless Recipes. <br /> One Place</h1>
        <p className="text-lg md:text-base mb-6">Discover a world of flavors with our curated collection of recipes. <br /> Whether you're a seasoned chef or just starting out, <br /> find inspiration for every meal and occasion.</p>
        <button className="bg-[#005A52] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition">Explore Recipes</button>
      </div>
    </div>
        </div>
    );
};

export default Banner;