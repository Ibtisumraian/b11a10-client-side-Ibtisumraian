import React from 'react';
import { motion } from "framer-motion";

const FoodBankSection = ({ theme }) => {
  return (
    <div className="my-24 w-11/12 mx-auto">
      {/* Section Heading */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className={`text-3xl sm:text-5xl font-bold   fontRokkitt py-6 sm:py-12 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
          Our Mission: <span className="text-[#005A52] dark:text-[#56c9c1]">Food Bank</span>
        </h1>
        <p className={`max-w-3xl mx-auto text-base sm:text-xl px-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
          Fighting hunger, one plate at a time. We believe food is a right, not a privilege.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl shadow-lg">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            className="w-full h-full object-cover rounded-t-2xl lg:rounded-tr-none lg:rounded-bl-2xl"
            src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747684954/RTM-48129-scaled_ljhc7o.webp"
            alt="Volunteers serving food"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className={`flex flex-col justify-center items-center text-center gap-6 p-8 lg:p-12 ${
            theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-[#D0E5E0] text-[#003934]"
          }`}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold fontRokkitt">
            More Than Just Meals
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Every day, we provide over{" "}
            <span className="font-semibold text-[#005A52] dark:text-[#56c9c1]">
              600+ nutritious meals
            </span>{" "}
            to underprivileged communities. Our food bank supports local shelters,
            families in crisis, and those affected by unemployment or disability.
          </p>
          <p className="text-base sm:text-lg">
            Powered by volunteers and your support, we're on a mission to ensure no
            one in our community goes to bed hungry.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FoodBankSection;
