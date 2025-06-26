import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const teamMembers = [
  {
    name: "Owen Tan",
    role: "Head Chef",
    img: "https://res.cloudinary.com/dd4np04jl/image/upload/v1748019377/1516924701389_kwvmqb.jpg",
    bio: "Owen brings over 15 years of professional kitchen experience and leads our recipe development with a passion for global flavors and local ingredients.",
  },
  {
    name: "Mia Lim",
    role: "Food Photographer",
    img: "https://res.cloudinary.com/dd4np04jl/image/upload/v1748019483/1731624321659_zuq5jk.jpg",
    bio: "Mia turns each dish into visual art. With a background in editorial photography, she captures every detail to make your mouth water.",
  },
  {
    name: "Noah Park",
    role: "Nutrition Expert",
    img: "https://res.cloudinary.com/dd4np04jl/image/upload/v1748019621/1626110104148_iyo6hi.jpg",
    bio: "With a degree in Dietetics, Noah ensures our meals not only taste amazing but also align with modern dietary and nutritional guidelines.",
  },
  {
    name: "Lily Tran",
    role: "Recipe Tester",
    img: "https://res.cloudinary.com/dd4np04jl/image/upload/v1748019760/1737670000274_imayuv.jpg",
    bio: "Lily rigorously tests each recipe to make sure instructions are clear, results are consistent, and flavors hit just right.",
  },
  {
    name: "Ryan Vu",
    role: "Content Writer",
    img: "https://res.cloudinary.com/dd4np04jl/image/upload/v1748019889/people-2402-1H6A2446gaffney-20210923170531_sy6y6n.jpg",
    bio: "Ryan crafts compelling food stories and recipe intros that keep readers engaged and informed, blending culture with cuisine.",
  },
  {
    name: "Emma Dao",
    role: "Social Media Manager",
    img: "https://res.cloudinary.com/dd4np04jl/image/upload/v1748020271/istockphoto-517234226-612x612_vpugax.jpg",
    bio: "Emma shares our creations with the world. She manages campaigns, connects with followers, and grows our food-loving community.",
  },
  {
    name: "Jack Cho",
    role: "UX Designer",
    img: "https://res.cloudinary.com/dd4np04jl/image/upload/v1748020486/images_dcbx12.jpg",
    bio: "Jack designs seamless and beautiful user experiences, ensuring our website feels just as good as our food tastes.",
  },
  {
    name: "Elena Max",
    role: "Full-Stack Developer",
    img: "https://res.cloudinary.com/dd4np04jl/image/upload/v1748020495/images_1_wwl883.jpg",
    bio: "Elena codes the platform from front to back, making sure our recipes load fast and our tools run smoothly on every device.",
  },
];

const TeamSection = () => {
    // const [showDetails, setShowDetails] = useState(false);
    const { theme } = use(AuthContext)

return (
    <section
      className={`py-24 px-4 sm:px-10 ${
        theme === "dark" ? "bg-gray-800 text-[#56c9c1] border-b-2 border-b-white  " : "bg-[#f3f3f3] text-[#003934]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold fontRokkitt text-center mb-4">
          Meet Our Team
        </h2>
        <p className="text-center max-w-2xl mx-auto text-base sm:text-lg mb-12">
          The people behind your favorite recipes — dedicated professionals who blend creativity, science, and flavor to make cooking joyful.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-md transition duration-300 hover:scale-[1.02] ${
                theme === "dark" ? "bg-[#0f1b28] text-white" : "bg-white"
              }`}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-[#56c9c1]"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-[#56c9c1] font-medium">{member.role}</p>
                <p className="text-sm sm:text-base">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
