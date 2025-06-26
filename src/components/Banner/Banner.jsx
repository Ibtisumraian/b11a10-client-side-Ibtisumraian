import React, { useState, useEffect, useContext, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import { AuthContext } from '../AuthContext/AuthContext';
import { Link } from 'react-router';

const slides = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dd4np04jl/image/upload/v1747676388/slide-image-1_tsao2a.webp',
    title: 'Endless Recipes. One Place',
    description:
      "Discover a world of flavors with our curated collection of recipes. Whether you're a seasoned chef or just starting out, find inspiration for every meal and occasion.",
    btnText: 'Explore Recipes',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dv6p7mprd/image/upload/v1750930109/banner32_dulqal.png',
    title: 'Healthy & Delicious Meals',
    description:
      'Nourish your body and soul with recipes crafted for both health and flavor. From quick snacks to gourmet dinners, we have you covered.',
    btnText: 'Get Healthy Recipes',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dv6p7mprd/image/upload/v1750930948/Untitled_design_13_c29fel.png',
    title: 'Cook Like a Pro',
    description:
      'Step up your cooking game with expert tips, chef-inspired dishes, and step-by-step guides. Impress your friends and family effortlessly.',
    btnText: 'Start Cooking',
  },
];

const Banner = () => {
  const { theme } = useContext(AuthContext);
  const [current, setCurrent] = useState(0);
  const slideIntervalRef = useRef(null); // to track and reset interval

  const startAutoSlide = () => {
    slideIntervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const resetAutoSlide = () => {
    clearInterval(slideIntervalRef.current);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(slideIntervalRef.current);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    resetAutoSlide();
  };

  const slide = slides[current];

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* Dark overlay in dark mode */}
      {theme === 'dark' && (
        <div className="absolute inset-0 bg-black opacity-80"></div>
      )}

      {/* Content */}
      <div className="relative z-10 w-9/12 mx-auto flex flex-col items-start justify-center h-full px-4 text-left">
        <Fade direction="left" duration={2500} key={slide.id}>
          <h1
            className={`text-3xl  sm:text-5xl lg:text-7xl font-bold mb-4 fontRokkitt max-w-[550px] ${
              theme === 'dark' ? 'text-[#56c9c1]' : 'text-gray-600'
            }`}
          >
            {slide.title}
          </h1>
          <p className={`text-md sm:text-lg mb-6 max-w-[650px] ${
              theme === 'dark' ? 'text-white' : 'text-gray-600'
            }`}>
            {slide.description}
          </p>
          <Link to="/AllRecipes">
            <button
              className={`text-white font-semibold btn sm:btn-lg rounded-lg ${
                theme === 'dark' ? 'bg-[#56c9c1]' : 'bg-[#005A52]'
              }`}
            >
              {slide.btnText}
            </button>
          </Link>
        </Fade>
      </div>

      {/* Controls (centered at bottom) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        <button
          onClick={prevSlide}
          className="btn btn-circle btn-sm bg-[#005A52] bg-opacity-30 hover:bg-opacity-50 text-white text-xl flex items-center justify-center"
          aria-label="Previous Slide"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-circle btn-sm bg-[#005A52] bg-opacity-30 hover:bg-opacity-50 text-white text-xl flex items-center justify-center"
          aria-label="Next Slide"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Banner;
