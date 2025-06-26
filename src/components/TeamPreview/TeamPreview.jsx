import { motion } from "framer-motion";
import { Link } from "react-router";

const TeamPreview = ({ theme }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  const members = [
    { name: "Owen Tan", img: "https://res.cloudinary.com/dd4np04jl/image/upload/v1748019377/1516924701389_kwvmqb.jpg" },
    { name: "Mia Lim", img: "https://res.cloudinary.com/dd4np04jl/image/upload/v1748019483/1731624321659_zuq5jk.jpg" },
    { name: "Noah Park", img: "https://res.cloudinary.com/dd4np04jl/image/upload/v1748019621/1626110104148_iyo6hi.jpg" },
    { name: "Lily Tran", img: "https://res.cloudinary.com/dd4np04jl/image/upload/v1748019760/1737670000274_imayuv.jpg" },
    { name: "Ryan Vu", img: "https://res.cloudinary.com/dd4np04jl/image/upload/v1748019889/people-2402-1H6A2446gaffney-20210923170531_sy6y6n.jpg" },
    { name: "Emma Dao", img: "https://res.cloudinary.com/dd4np04jl/image/upload/v1748020271/istockphoto-517234226-612x612_vpugax.jpg" },
    { name: "Jack Cho", img: "https://res.cloudinary.com/dd4np04jl/image/upload/v1748020486/images_dcbx12.jpg" },
    { name: "Elena Max", img: "https://res.cloudinary.com/dd4np04jl/image/upload/v1748020495/images_1_wwl883.jpg" },
  ];

  return (
    <section className={`py-24 mb-32 ${theme === "dark" ? "bg-gray-800 text-[#56c9c1]" : "bg-[#D3D3D3] text-[#003934]"}`}>
      <div className="w-11/12 lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <h1 className="text-3xl sm:text-5xl font-bold fontRokkitt text-center lg:text-left">
            The Recipe Book Team
          </h1>
          <p className={`text-sm sm:text-lg text-center lg:text-left ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
            Recipe Book is your go-to destination for delicious, easy-to-follow recipes created with home cooks in mind. Our passionate team of chefs, photographers, and developers brings every dish to life—from inspiration to your table.
          </p>
          <p className={`text-sm sm:text-lg text-center lg:text-left ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
            With over 3,000 curated meals, we're helping home cooks around the world enjoy fresh, flavorful, and fuss-free meals every day.
          </p>
          <Link to="/TeamSection" className="w-fit mx-auto lg:mx-0">
            <button
              className={`btn text-white font-semibold sm:btn-md rounded-lg px-6 ${
                theme === "dark" ? "bg-[#56c9c1]" : "bg-[#005A52]"
              }`}
            >
              Learn More
            </button>
          </Link>
        </motion.div>

        {/* RIGHT GRID */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-3 2xl:grid-cols-4 gap-4 bg-base-200 p-4 sm:p-6 rounded-2xl"
        >
          {members.map((member, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              className="flex flex-col justify-center items-center"
            >
              <div className="avatar">
                <div className="mask mask-squircle w-14 sm:w-20 2xl:w-24">
                  <img src={member.img} alt={member.name} />
                </div>
              </div>
              <h1 className="text-sm sm:text-base mt-2 text-center">{member.name}</h1>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;
