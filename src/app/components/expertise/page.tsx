"use client";
import React from "react";
import HtmlIcon  from "../../public/assets/skills/html-5.png";
import CssIcon  from "../../public/assets/css.png";
import JsIcon  from "../../public/assets/skills/java-script.png";
import Image from "next/image";

interface Expertise {
  name: string;
  image: any;
}

const expertise: Expertise[] = [
  { name: "Frontend Development", image: HtmlIcon },
  { name: "CMS Development", image: JsIcon },
];

const Expertise: React.FC = () => {
  return (
    <div className="bg-black w-full mt-6 h-[30%] overflow-hidden text-white p-4 rounded-xl max-w-lg mx-auto shadow-lg ">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 text-left">My Skills</h2>
    
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
