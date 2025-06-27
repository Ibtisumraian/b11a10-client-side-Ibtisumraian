import React, { useContext } from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaPhoneAlt,
  FaSmile
} from 'react-icons/fa';
import { AuthContext } from '../AuthContext/AuthContext';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const ContactUs = () => {
  const { theme } = useContext(AuthContext);
  const isDark = theme === 'dark';

  return (
    <section className={`px-6 py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-[#F7F7F7] text-[#333]'}`}>
      <div className="max-w-6xl mx-auto space-y-24">

        {/* 🌟 Header */}
        <motion.div
          className="text-center space-y-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className={`text-4xl font-extrabold ${isDark ? 'text-white' : 'text-[#005A52]'}`}>
            Let’s Cook Up a Connection!
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Whether it's feedback, ideas, or just foodie love — we’d love to hear from you!  
            Got a question about recipes, want to share your culinary creations, or simply want to say hello?  
            Reach out anytime, and let’s make cooking even more delightful together.
          </p>
        </motion.div>

        {/* 💌 Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          {[
            {
              icon: <FaEnvelope />,
              title: 'Email',
              desc: 'recipebook@email.com',
              bg: isDark ? 'bg-gray-800' : 'bg-[#E0F4F2]',
              iconColor: 'text-green-400'
            },
            {
              icon: <FaPhoneAlt />,
              title: 'Call Us',
              desc: '+880 1234 567 890',
              bg: isDark ? 'bg-gray-800' : 'bg-[#FFF5D9]',
              iconColor: 'text-yellow-400'
            },
            {
              icon: <FaSmile />,
              title: 'Say Hello',
              desc: 'DM us anytime on socials',
              bg: isDark ? 'bg-gray-800' : 'bg-[#F4FBF9]',
              iconColor: 'text-green-400'
            }
          ].map(({ icon, title, desc, bg, iconColor }, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-200 text-center ${bg}`}
            >
              <div className={`text-3xl mb-3 flex justify-center ${iconColor}`}>
                {icon}
              </div>
              <h4 className="text-xl font-semibold mb-1">{title}</h4>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{desc}</p>
            </div>
          ))}
        </motion.div>

        {/* 🌐 Social Media */}
        <motion.div
          className="text-center space-y-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-[#005A52]'}`}>
            Find Us Online
          </h3>
          <div className={`flex justify-center gap-6 text-3xl ${isDark ? 'text-gray-300' : 'text-[#005A52]'}`}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><FaInstagram /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><FaGithub /></a>
          </div>
        </motion.div>

        {/* 📣 Call-to-Action */}
        <motion.div
          className={`rounded-xl w-11/12 sm:w-8/12 mx-auto px-8 py-12 text-center shadow-xl ${isDark ? 'bg-gray-800 text-white' : 'bg-[#005A52] text-white'}`}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-3">Got a Secret Recipe? </h3>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Send it our way — or let’s collaborate on something delicious together.
          </p>
          <div
            className={`inline-block font-semibold px-6 py-3 rounded-full transition duration-200
            ${isDark ? 'bg-green-900/20 text-green-300' : 'bg-[#E0F4F2] text-[#005A52]'}`}
          >
            Email Us Now <br />
            recipebook@email.com
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactUs;
