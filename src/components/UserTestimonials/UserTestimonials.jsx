import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Home Cook, Texas",
    rating: 5,
    review: "Recipe Book has completely transformed my dinner routines! The steps are clear, and the results are always delicious.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Alex Chen",
    location: "Aspiring Chef, California",
    rating: 4,
    review: "Love the variety of cuisines and the simplicity. It's like having a personal cookbook curated just for me!",
    img: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "Lina Patel",
    location: "Food Blogger, India",
    rating: 5,
    review: "This platform is a goldmine! I’m impressed by the quality and consistency of the recipes.",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "David Lee",
    location: "Single Dad, New York",
    rating: 5,
    review: "As someone new to cooking, Recipe Book made it easy and fun. My kids love the meals I prepare now!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const UserTestimonials = ({ theme }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      className={`py-24 ${
        theme === "dark" ? "bg-gray-800 text-white " : "bg-[#F6F4F1] text-gray-800"
      }`}
    >
      <div className="w-11/12 mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold fontRokkitt mb-4">What Our Users Say</h2>
        <p className="text-base sm:text-xl text-gray-500 dark:text-gray-300">
          Real stories from home cooks who found joy in the kitchen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-8 w-11/12 mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className={`p-6 rounded-2xl shadow-lg border ${
              theme === "dark"
                ? "bg-[#0f1b28] border-[#1f2e3a]"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="text-left">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.location}</p>
              </div>
            </div>

            <p className="text-sm mb-4">{t.review}</p>

            <div className="flex">
              {[...Array(t.rating)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-yellow-400 ${
                    theme === "dark" ? "drop-shadow-md" : ""
                  }`}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UserTestimonials;
