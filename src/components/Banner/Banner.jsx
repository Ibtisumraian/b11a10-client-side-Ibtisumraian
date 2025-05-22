import React, { use } from 'react';
import { Fade } from 'react-awesome-reveal'
import { AuthContext } from '../AuthContext/AuthContext';
const Banner = () => {
  const { theme } = use(AuthContext)
    return (
        <div>
          <div className={`relative bg-cover bg-center bg-no-repeat h-[717px] ${theme == "dark" ? "bg-[url('https://res.cloudinary.com/dd4np04jl/image/upload/v1747928645/ChatGPT_Image_May_22_2025_09_43_46_PM_jdktdn.png')]" : "bg-[url('https://res.cloudinary.com/dd4np04jl/image/upload/v1747676388/slide-image-1_tsao2a.webp')]"}`} >
      
          <div className="relative w-9/12 mx-auto flex flex-col items-start justify-center h-full px-4">
            <Fade direction="left" duration={2500} >
              <h1 className={`text-3xl sm:text-5xl lg:text-7xl font-bold mb-4  fontRokkitt ${theme === "dark" ? " text-[#56c9c1]" : "text-[#333333]"}`}>Endless Recipes. <br /> One Place</h1>
              <p className="text-md sm:text-lg mb-6">Discover a world of flavors with our curated collection of recipes. <br /> Whether you're a seasoned chef or just starting out, <br /> find inspiration for every meal and occasion.</p>
              <button className="bg-[#005A52]  text-white font-semibold btn sm:btn-lg rounded-lg ">Explore Recipes</button>
        </Fade>
            </div>
          </div>
        </div>
    );
};

export default Banner;