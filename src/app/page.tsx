// import Main from "./(client)/home/page";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import iamge from "./public/assets/handsome-muscular-blond-male-white-t-shirt-holds-dumbbell-grey-artistic-backgroundk 1.png";
import Main from "./(client)/home/page";
import RecentProjects from "./components/projectSection/page";
import SkillsBox from "./components/skills/page";

export default function Home() {
  return (
    <>
      <div className="p-3">
        <h1
          className="text-2xl  outline-1"
          style={{ textShadow: "0.5px 0.5px 2px white" }}
        >
          Crafting pixel-perfect interfaces and bringing designs to life, one
          line of code at a time.
        </h1>
        <div className="flex gap-5">
          <div className="w-[65%] h-full  flex flex-col ">
            <RecentProjects />
            <div></div>
          </div>
          <div className="w-[35%]  flex flex-col">
            <SkillsBox />
            <SkillsBox />
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
