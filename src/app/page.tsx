// import Main from "./(client)/home/page";
import React from "react";
import Image from "next/image";
import RecentProjects from "./components/projectSection/page";
import SkillsBox from "./components/skills/page";
import Expertise from "./components/expertise/page";
import Experience from "./components/experience/page";
import iamge from "./public/assets/bottomImage.png";

export default function Home() {
  return (
    
    <div className="h-full overflow-scroll" style={{ scrollbarWidth: "none" }}>
      <h1
        className="text-2xl p-2 outline-1 font-medium"
        style={{ textShadow: "0.5px 0.5px 2px white" }}
      >
        Crafting pixel-perfect interfaces and bringing designs to life, one line
        of code at a time.
      </h1>
      <div className="p-3  ">
        <div className="flex gap-5">
          <div className="w-[65%] h-full gap-5 flex flex-col ">
            <RecentProjects />
            <Experience />
          </div>
          <div className="w-[35%]  flex flex-col ">
            <SkillsBox />
            <Expertise />
            <div className="h-[100%]">
                <Image
                  src={iamge}
                  alt={""}
                  className=" object-contain"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
