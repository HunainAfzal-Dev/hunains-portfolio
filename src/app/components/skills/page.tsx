"use client";
import React from "react";
import HtmlIcon  from "../../public/assets/html.png";
import CssIcon  from "../../public/assets/css.png";
import JsIcon  from "../../public/assets/javascript.png";
import Image from "next/image";

interface Skill {
  name: string;
  image: any;
}

const skills: Skill[] = [
  { name: "HTML", image: HtmlIcon },
  { name: "CSS", image: CssIcon },
  { name: "JavaScript", image: JsIcon },
  { name: "HTML", image: HtmlIcon },
  { name: "CSS", image: CssIcon },
  { name: "JavaScript", image: JsIcon },
  { name: "HTML", image: HtmlIcon },
  { name: "CSS", image: CssIcon },
  { name: "JavaScript", image: JsIcon },
  { name: "HTML", image: HtmlIcon },
  { name: "CSS", image: CssIcon },
  { name: "JavaScript", image: JsIcon },
  { name: "React", image: "/images/react.png" },
  { name: "TypeScript", image: "/images/typescript.png" },
];

const SkillsBox: React.FC = () => {
  return (
    <div className="bg-black w-full h-full text-white p-4 rounded-xl max-w-lg mx-auto shadow-lg ">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 text-left">My Skills</h2>
    
      {/* Skills List */}
      <ul className="h-[40%] overflow-scroll">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-1 rounded-lg hover:bg-gray-600 transition"
          >
            {/* Skill Name */}
            <span className="text-lg font-semibold">{skill.name}</span>

            {/* Skill Image */}
            <Image
              src={skill.image}
              alt={skill.name}
              width={10}
              height={10}
              className="w-10 h-10 object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsBox;
