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

    <div className=" h-full overflow-scroll relative" style={{ scrollbarWidth: "none" }}>
      <h1
        className="text-white w-full  bg-white/5 text-xl md:text-2xl rounded-xl p-2 outline-1 font-medium fixed z-10">
        Crafting pixel-perfect interfaces and bringing designs to life, one line
        of code at a time.
      </h1>
      <div className="p-3 flex flex-col md:flex-row gap-5 mt-24 w-full">
        <div className="md:w-[65%] h-full gap-5 flex flex-col">
          <RecentProjects />
          <Experience />
        </div>
        <div className="md:w-[35%] h-full flex flex-col ">
          <SkillsBox />
          <Expertise />
          <div className="">
            <Image
              src={iamge}
              alt={"bottom image"}
              className="p-16 md:px-16 md:py-4 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
