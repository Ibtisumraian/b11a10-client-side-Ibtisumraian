import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { AuthContext } from '../AuthContext/AuthContext';
import { Link } from 'react-router';

const faqs = [
  {
    question: 'How can I add a new recipe?',
    answer:
      "Go to the Recipes page and click on 'Add New Recipe'. Fill out the details and save.",
  },
  {
    question: 'Can I edit or delete recipes?',
    answer:
      'Yes! Open any recipe and use the edit or delete buttons to modify or remove it.',
  },
  {
    question: 'Is there a mobile app available?',
    answer:
      'Not yet, but our web app is fully responsive and works great on mobile devices.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Support = () => {
  const { theme } = useContext(AuthContext);
  const isDark = theme === 'dark';
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main
      className={`min-h-screen py-20 px-6 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-[#F7F7F7] text-[#333]'
      }`}
    >
      <div className="max-w-5xl mx-auto space-y-24">
        {/* Header */}
        <motion.header
          className="text-center max-w-3xl mx-auto space-y-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1
            className={`text-4xl font-extrabold ${
              isDark ? 'text-white' : 'text-[#005A52]'
            }`}
          >
            Need Help? We’ve Got You!
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Whether you have questions or need guidance, our support page has
            everything you need to get cooking with confidence.
          </p>
        </motion.header>

        {/* FAQ Section */}
        <section>
          <motion.h2
            className={`text-3xl font-bold mb-8 border-b-4 pb-2 ${
              isDark
                ? 'border-gray-700 text-white'
                : 'border-[#005A52] text-[#005A52]'
            }`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className={`rounded-xl p-6 shadow-md ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className={`w-full text-left flex justify-between items-center font-semibold text-lg ${
                    isDark
                      ? 'text-white hover:text-gray-300'
                      : 'text-[#005A52] hover:text-[#007F70]'
                  } focus:outline-none`}
                >
                  {faq.question}
                  <span
                    className={`text-3xl font-bold transition-transform duration-300 ${
                      openIndex === idx ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                {openIndex === idx && (
                  <p
                    className={`mt-4 text-base ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {faq.answer}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <motion.h2
            className={`text-3xl font-bold mb-8 border-b-4 pb-2 ${
              isDark
                ? 'border-gray-700 text-white'
                : 'border-[#005A52] text-[#005A52]'
            }`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
              className={`rounded-xl p-6 shadow-md ${
                isDark ? 'bg-gray-800 text-white' : 'bg-[#005A52] text-white'
              }`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p>
                <a
                  href="mailto:support@recipebook.com"
                  className={`underline ${
                    isDark ? 'hover:text-gray-400' : 'hover:text-[#FFF5D9]'
                  }`}
                >
                  support@recipebook.com
                </a>
              </p>
            </motion.div>

            <motion.div
              className={`rounded-xl p-6 shadow-md ${
                isDark ? 'bg-gray-800 text-white' : 'bg-[#005A52] text-white'
              }`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <p>
                <a
                  href="tel:+1234567890"
                  className={`underline ${
                    isDark ? 'hover:text-gray-400' : 'hover:text-[#FFF5D9]'
                  }`}
                >
                  +1 (234) 567-890
                </a>
              </p>
            </motion.div>
          </div>
          <motion.div
            className="mt-6 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link to="/UnderConstruction">
              <h1
                className={`inline-block px-6 py-3 rounded-full font-semibold ${
                  isDark
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-[#80C9B5] text-[#005A52] hover:bg-[#6AB79C]'
                } transition`}
              >
                Live Chat Support
              </h1>
            </Link>
          </motion.div>
        </section>

        {/* Resources */}
        <section>
          <motion.h2
            className={`text-3xl font-bold mb-6 border-b-4 pb-2 ${
              isDark
                ? 'border-gray-700 text-white'
                : 'border-[#005A52] text-[#005A52]'
            }`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Helpful Resources
          </motion.h2>
          <motion.ul
            className={`list-disc list-inside space-y-3 text-lg ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <li>
              <Link to="/UnderConstruction" className="underline hover:text-[#007F70]">
                Recipe Book Documentation
              </Link>
            </li>
            <li>
              <Link to="/UnderConstruction" className="underline hover:text-[#007F70]">
                Video Tutorials
              </Link>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-[#007F70]"
              >
                Follow us on Twitter
              </a>
            </li>
          </motion.ul>
        </section>

        {/* Quote */}
        <motion.section
          className={`text-center italic pt-8 border-t ${
            isDark
              ? 'border-gray-700 text-gray-400'
              : 'border-[#005A52] text-[#005A52]'
          }`}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>
            “Cooking is like love. It should be entered into with abandon or
            not at all.” – Harriet Van Horne
          </p>
        </motion.section>
      </div>
    </main>
  );
};

export default Support;
