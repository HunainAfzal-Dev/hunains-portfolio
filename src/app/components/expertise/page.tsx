"use client";
import frontEnd  from "../../public/assets/front-end-programming.png";
import Wordpress  from "../../public/assets/develop.png";
import Image, { StaticImageData } from "next/image";

interface Expertise {
  name: string;
  image: StaticImageData;
}

const expertise: Expertise[] = [
  { name: "Frontend Development", image: frontEnd },
  { name: "CMS Development", image: Wordpress },
];

const Expertise: React.FC = () => {
  return (
    <div className="bg-white/5 w-full mt-6 h-[30%] overflow-hidden text-white p-4 rounded-xl max-w-lg mx-auto shadow-lg ">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 text-left">My Expertise</h2>
    
      {/* Skills List */}
      <ul className="h-[100%] overflow-scroll" style={{
        scrollbarWidth: "none",
      }}>
        {expertise.map((epert, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-1 rounded-lg hover:bg-white hover:text-black  transition"
          >
            {/* Skill Name */}
            <span className="text-lg font-semibold">{epert.name}</span>

            {/* Skill Image */}
            <Image
              src={epert.image}
              alt={epert.name}
              width={30}
              height={30}
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expertise;
