import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaRegHeart, FaRegUserCircle, FaRegStar, FaCrown } from 'react-icons/fa';
import { AuthContext } from '../AuthContext/AuthContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

const DashboardHome = () => {
  const { user, theme } = useContext(AuthContext);
  const [recipes, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  const totalLikes = recipes.reduce((sum, item) => sum + (item.like_count || 0), 0);

  useEffect(() => {
    setLoading(true);
    fetch(`https://recipe-book-server-six.vercel.app/user/${user.email}`)
      .then(res => res.json())
      .then(data => setRecipe(data))
      .finally(() => setLoading(false));
  }, [user]);

  const cardStyle = `rounded-xl p-6 sm:p-8 shadow-lg flex items-center gap-6 ${
    theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
  }`;

  const motionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, amount: 0.3 }
  };

  const isEmpty = recipes.length === 0;

  return (
    <div className={`p-4 sm:p-8 min-h-screen ${theme === 'dark' ? 'bg-[#0f1b28]' : 'bg-[#F6F4F1]'}`}>
      {/* Welcome */}
      <motion.div {...motionProps} className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold fontRokkitt">
          Welcome back,{' '}
          <span className={theme === 'dark' ? 'text-[#56c9c1]' : 'text-[#005A52]'}>
            {user?.displayName || 'Chef'}
          </span>
          !
        </h1>
        <p className="text-sm sm:text-lg text-gray-400 mt-2">Here's a quick overview of your activity</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <motion.div {...motionProps} className={cardStyle}>
          <FaRegHeart className="text-3xl text-[#56c9c1]" />
          <div>
            <h2 className="text-xl font-semibold">Saved Recipes</h2>
            <p className="text-sm text-gray-400">
              {loading ? 'Loading...' : `${recipes.length || 0} saved`}
            </p>
          </div>
        </motion.div>

        <motion.div {...motionProps} className={cardStyle}>
          <FaRegStar className="text-3xl text-yellow-400" />
          <div>
            <h2 className="text-xl font-semibold">Total Likes</h2>
            <p className="text-sm text-gray-400">{loading ? 'Loading...' : `${totalLikes || 0} likes`}</p>
          </div>
        </motion.div>

        <motion.div {...motionProps} className={cardStyle}>
          <FaCrown className="text-3xl text-purple-500" />
          <div>
            <h2 className="text-xl font-semibold">Subscription</h2>
            <p className="text-sm text-gray-400">Free Plan</p>
          </div>
        </motion.div>

        <motion.div {...motionProps} className={cardStyle}>
          <FaRegUserCircle className="text-3xl text-[#56c9c1]" />
          <div>
            <h2 className="text-xl font-semibold">Account Status</h2>
            <p className="text-sm text-gray-400">Verified</p>
          </div>
        </motion.div>
      </div>

      {/* Likes Bar Chart */}
      <motion.div
        {...motionProps}
        className={`mt-12 rounded-xl p-6 sm:p-8 shadow-lg ${
          theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">📊 Likes per Recipe</h2>
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center h-48 text-gray-400">
            <span className="text-4xl"></span>
            <p className="mt-2">No recipes to display chart</p>
          </div>
        ) : (
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={recipes}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#444' : '#ccc'} />
                <XAxis dataKey="title" tick={{ fill: theme === 'dark' ? '#ccc' : '#333' }} />
                <YAxis tick={{ fill: theme === 'dark' ? '#ccc' : '#333' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: theme === 'dark' ? '#333' : '#fff',
                    borderRadius: '8px',
                    border: '1px solid #ccc'
                  }}
                />
                <Bar dataKey="like_count" fill="#56c9c1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </motion.div>

      {/* Top Performing Recipe */}
      <motion.div
        {...motionProps}
        className={`mt-12 rounded-xl p-6 sm:p-8 shadow-lg ${
          theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">🌟 Your Top Performing Recipe</h2>
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center h-48 text-gray-400">
            <span className="text-4xl"></span>
            <p className="mt-2">No recipe performance data yet</p>
          </div>
        ) : (
          (() => {
            const topRecipe = [...recipes].sort((a, b) => b.like_count - a.like_count)[0];
            return (
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <img
                  src={topRecipe.photo}
                  alt={topRecipe.title}
                  className="w-full sm:w-48 h-32 object-cover rounded-lg shadow"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{topRecipe.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Cuisine: {topRecipe.cuisine} | Likes: {topRecipe.like_count}
                  </p>
                  <p className="text-sm mt-2 text-gray-500 dark:text-gray-300 line-clamp-2">
                    {topRecipe.instructions}
                  </p>
                </div>
              </div>
            );
          })()
        )}
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        {...motionProps}
        className={`mt-12 rounded-xl p-6 sm:p-8 shadow-lg ${
          theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">🕒 Recent Activity</h2>
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center h-48 text-gray-400">
            <span className="text-4xl"></span>
            <p className="mt-2">You haven't added any recipes yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...recipes]
              .slice(-2)
              .reverse()
              .map(recipe => (
                <motion.div
                  key={recipe._id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-lg shadow-md flex gap-4 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                  }`}
                >
                  <img
                    src={recipe.photo}
                    alt={recipe.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">{recipe.title}</h3>
                    <p className="text-sm text-gray-400">
                      {recipe.cuisine} | {recipe.preparation_time} mins
                    </p>
                    <p className="text-xs mt-1 text-gray-500 dark:text-gray-300 line-clamp-2">
                      {recipe.instructions}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default DashboardHome;
