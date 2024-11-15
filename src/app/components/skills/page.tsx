"use client";
import React from "react";
import HtmlIcon from "../../public/assets/skills/html-5.png";
import CssIcon from "../../public/assets/skills/css1.png";
import JsIcon from "../../public/assets/skills/java-script.png";
import TsIcon from "../../public/assets/skills/typescript.png";
import ReactIcon from "../../public/assets/skills/react.png";
import NextIcon from "../../public/assets/skills/nextjs.png";
import bootstrapIcon from "../../public/assets/skills/bootStrap.png";
import tailwindIcon from "../../public/assets/skills/tailwind.png";
import WordpressIcon from "../../public/assets/skills/wp.png";
import Shopify from "../../public/assets/skills/shopify.png";

import Image from "next/image";

interface Skill {
  name: string;
  image: any;
}

const skills: Skill[] = [
  { name: "HTML", image: HtmlIcon },
  { name: "CSS", image: CssIcon },
  { name: "JavaScript", image: JsIcon },
  { name: "Typescript", image: TsIcon },
  { name: "ReactJs", image: ReactIcon },
  { name: "NextJs", image: NextIcon },
  { name: "bootstrap", image: bootstrapIcon },
  { name: "tailwind", image: tailwindIcon },
  { name: "Wordpress", image: WordpressIcon },
  { name: "Shopify", image: Shopify },
  { name: "", image: "" },
  { name: "", image: "" },
];

const SkillsBox: React.FC = () => {
  return (
    <div className="bg-black w-full h-[35%] overflow-hidden text-white p-4 rounded-xl max-w-lg mx-auto shadow-lg ">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 text-left">My Skills</h2>

      {/* Skills List */}
      <ul
        className="h-[100%] overflow-scroll pr-1"
        style={{
          "scrollBehavior" : "smooth",
          "scrollbarWidth" : "none",
          "borderRight": "solid 2px white"

        }}
      >
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-1 rounded-lg hover:bg-white hover:text-black transition"
          >
            {/* Skill Name */}
            <span className="text-lg font-semibold">{skill.name}</span>

            {/* Skill Image */}
            <Image
              src={skill.image}
              alt={skill.name}
              width={30}
              height={30}
              className=" object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsBox;
