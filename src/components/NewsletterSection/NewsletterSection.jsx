import { useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const NewsletterSection = ({ theme }) => {
  const [showModal, setShowModal] = useState(false);

  const handleSubscribeClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handlePlanSelect = (plan) => {
    Swal.fire({
      icon: 'success',
      title: `Subscribed to ${plan} Plan!`,
      text: 'Thanks for joining our newsletter.',
      confirmButtonColor: '#005A52',
      background: theme === 'dark' ? '#1f2e3a' : '#fff',
      color: theme === 'dark' ? '#56c9c1' : '#000',
    });
    setShowModal(false);
  };

  return (
    <section className={`py-24 px-4 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-[#D0E5E0] text-gray-900"}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-11/12 sm:w-10/12 lg:w-9/12 mx-auto text-center max-w-4xl"
      >
        <h2 className="text-3xl sm:text-5xl font-bold fontRokkitt mb-6">
          Stay in the Loop
        </h2>
        <p className="text-base sm:text-lg mb-8">
          Get the best recipes, food stories, and kitchen hacks delivered straight to your inbox.
        </p>

        <form onSubmit={handleSubscribeClick} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className={`w-full sm:w-[300px] px-5 py-3 rounded-full outline-none text-sm shadow-md transition-all duration-300 ${
              theme === "dark"
                ? "bg-gray-800 text-white placeholder-gray-400"
                : "bg-white text-gray-700 placeholder-gray-500"
            }`}
          />
          <button
            type="submit"
            className={`px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-300 ${
              theme === "dark"
                ? "bg-[#56c9c1] text-black hover:bg-[#3bb3aa]"
                : "bg-[#005A52] text-white hover:bg-[#004740]"
            }`}
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-400 dark:text-gray-500">
          You can unsubscribe at any time. We respect your privacy.
        </p>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 bg-opacity-50 flex justify-center items-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`rounded-2xl p-8 w-full max-w-md shadow-xl ${
              theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Choose a Subscription Plan</h2>
            <div className="grid gap-4">
              {["Weekly", "Monthly", "Occasional"].map((plan) => (
                <button
                  key={plan}
                  onClick={() => handlePlanSelect(plan)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    theme === "dark"
                      ? "bg-[#56c9c1] text-black hover:bg-[#3bb3aa]"
                      : "bg-[#005A52] text-white hover:bg-[#004740]"
                  }`}
                >
                  {plan} Plan
                </button>
              ))}
              <button
                onClick={() => setShowModal(false)}
                className="text-sm underline mt-2 text-center"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default NewsletterSection;
