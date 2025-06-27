import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const { theme } = useContext(AuthContext);
  const isDark = theme === 'dark';

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Intro */}
        <div className="text-center">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            About Recipe Book
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Recipe Book is your all-in-one cooking companion — designed for food lovers of every skill level. We help you discover, save, and organize recipes that bring joy to your table.
          </p>
        </div>

        {/* Mission */}
        <div className={`${isDark ? 'bg-green-900/20' : 'bg-green-100'} rounded-2xl p-8 md:p-12 shadow-md`}>
          <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-green-400' : 'text-green-700'}`}>
            Our Mission
          </h3>
          <p className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            We believe great meals start with great ideas. Our mission is to simplify the cooking journey by making it easier to find inspiration, follow step-by-step guides, and preserve the recipes that matter to you — whether they’re family classics or new discoveries.
          </p>
        </div>

        {/* Features */}
        <div>
          <h3 className={`text-2xl font-semibold text-center mb-10 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            What Makes Us Special
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Curated Recipes',
                desc: 'Explore a wide range of tried-and-true recipes across global cuisines.'
              },
              {
                title: 'Advanced Search',
                desc: 'Quickly find recipes using filters like category, ingredients, or cooking time.'
              },
              {
                title: 'Favorites & Likes',
                desc: 'Like your top picks and build your own personalized recipe library.'
              },
              {
                title: 'Dark Mode Support',
                desc: 'Cook comfortably day or night with a beautiful light & dark interface.'
              },
              {
                title: 'Mobile-Friendly',
                desc: 'Use Recipe Book from any device — optimized for desktop, tablet, and mobile.'
              },
              {
                title: 'Community Powered',
                desc: 'Join a vibrant cooking community sharing flavors, feedback, and love for food.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl shadow hover:shadow-md transition duration-200 ${
                  isDark ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <h4 className={`font-semibold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  {feature.title}
                </h4>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Community CTA */}
        <div className="text-center">
          <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Join the Recipe Book Community
          </h3>
          <p className={`text-lg max-w-2xl mx-auto mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Share your favorite dishes, discover exciting new recipes, and cook alongside a community that celebrates good food.
          </p>
          <Link to='/AllRecipes'><motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#005A52] cursor-pointer hover:bg-[#005A5299] text-white px-6 py-3 rounded-full font-medium transition duration-200"
          >
            Explore Recipes
          </motion.button></Link>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
