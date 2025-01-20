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

    <div className="h-full overflow-scroll relative" style={{ scrollbarWidth: "none" }}>
      <h1
        className="text-white w-full  bg-black/80 text-xl md:text-2xl rounded-xl p-2 outline-1 font-medium fixed z-10">
        Crafting pixel-perfect interfaces and bringing designs to life, one line
        of code at a time.
      </h1>
      <div className="px-3 flex flex-col md:flex-row gap-5 mt-28 w-full">
        <div className="md:w-[65%] h-full gap-5 flex flex-col">
          <RecentProjects />
          <Experience />
        </div>
        <div className="w-[35%] h-full flex flex-col ">
          <SkillsBox />
          <Expertise />
          <div className="">
            <Image
              src={iamge}
              alt={"bottom image"}
              className="  object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
