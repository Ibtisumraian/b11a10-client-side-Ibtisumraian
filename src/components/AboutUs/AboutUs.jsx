import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const AboutUs = () => {
  const { theme } = useContext(AuthContext);
  const isDark = theme === 'dark';

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Intro */}
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            About Recipe Book
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Recipe Book is your all-in-one cooking companion — designed for food lovers of every skill level. We help you discover, save, and organize recipes that bring joy to your table.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          className={`${isDark ? 'bg-green-900/20' : 'bg-green-100'} rounded-2xl p-8 md:p-12 shadow-md`}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-green-400' : 'text-green-700'}`}>
            Our Mission
          </h3>
          <p className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            We believe great meals start with great ideas. Our mission is to simplify the cooking journey by making it easier to find inspiration, follow step-by-step guides, and preserve the recipes that matter to you — whether they’re family classics or new discoveries.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-semibold text-center mb-10 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            What Makes Us Special
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '🍳',
                title: 'Curated Recipes',
                desc: 'Explore a wide range of tried-and-true recipes across global cuisines.'
              },
              {
                icon: '🔍',
                title: 'Advanced Search',
                desc: 'Quickly find recipes using filters like category, ingredients, or cooking time.'
              },
              {
                icon: '❤️',
                title: 'Favorites & Likes',
                desc: 'Like your top picks and build your own personalized recipe library.'
              },
              {
                icon: '🌓',
                title: 'Dark Mode Support',
                desc: 'Cook comfortably day or night with a beautiful light & dark interface.'
              },
              {
                icon: '📱',
                title: 'Mobile-Friendly',
                desc: 'Use Recipe Book from any device — optimized for desktop, tablet, and mobile.'
              },
              {
                icon: '🌍',
                title: 'Community Powered',
                desc: 'Join a vibrant cooking community sharing flavors, feedback, and love for food.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl shadow hover:shadow-md transition duration-200 ${
                  isDark ? 'bg-gray-800' : 'bg-gray-50'
                }`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h4 className={`font-semibold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  {feature.title}
                </h4>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community CTA */}
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Join the Recipe Book Community
          </h3>
          <p className={`text-lg max-w-2xl mx-auto mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Share your favorite dishes, discover exciting new recipes, and cook alongside a community that celebrates good food.
          </p>
          <Link to='/AllRecipes'><motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#005A52] hover:bg-[#005A5299] text-white px-6 py-3 rounded-full font-medium transition duration-200"
          >
            Explore Recipes
          </motion.button></Link>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
