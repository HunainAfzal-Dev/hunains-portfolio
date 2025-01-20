"use client";
import React from "react";
import HtmlIcon from "../../public/assets/skills/html-5.png";
import CssIcon from "../../public/assets/skills/css1.png";
import JsIcon from "../../public/assets/skills/java-script.png";
import TsIcon from "../../public/assets/skills/typescript.png";
import ReactIcon from "../../public/assets/skills/react.png";
import ViteIcon from "../../public/assets/skills/vite.png";
import NextIcon from "../../public/assets/skills/nextjs.png";
import bootstrapIcon from "../../public/assets/skills/bootStrap.png";
import tailwindIcon from "../../public/assets/skills/tailwind.png";
import Firebase from "../../public/assets/skills/firebase.png";
import Github from "../../public/assets/skills/github.png";
import Npm from "../../public/assets/skills/npm.png";
import Pnpm from "../../public/assets/skills/pnpm.png";
import WordpressIcon from "../../public/assets/skills/wp.png";
import Shopify from "../../public/assets/skills/shopify.png";

import Image, { StaticImageData } from "next/image";

interface Skill {
  name: string;
  image: StaticImageData;
}

const skills: Skill[] = [
  { name: "HTML", image: HtmlIcon },
  { name: "CSS", image: CssIcon },
  { name: "JavaScript", image: JsIcon },
  { name: "Typescript", image: TsIcon },
  { name: "ReactJs", image: ReactIcon },
  { name: "ViteJs", image: ViteIcon },
  { name: "NextJs", image: NextIcon },
  { name: "Bootstrap", image: bootstrapIcon },
  { name: "Tailwind", image: tailwindIcon },
  { name: "Firebase", image: Firebase },
  { name: "Github", image: Github },
  { name: "Npm", image: Npm },
  { name: "Pnpm", image: Pnpm },
  { name: "Wordpress", image: WordpressIcon },
  { name: "Shopify", image: Shopify },
  
];

const SkillsBox: React.FC = () => {
  return (
    <div className="bg-black/80 w-full h-full overflow-hidden text-white p-4 rounded-xl max-w-lg mx-auto shadow-lg ">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 text-left">My Skills</h2>

      {/* Skills List */}
      <ul
        className="overflow-scroll pr-1 h-[200px]"
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
