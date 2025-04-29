"use client";
import Image from "next/image";
import React, { useState } from "react";
import panda from "../../public/assets/project1.png";
import welcomeFuel from "../../public/assets/project5.png";
import Atai from "../../public/assets/atai.png";
import kurani from "../../public/assets/kurani.png";
import kaj from "../../public/assets/kaj.png";

import { StaticImageData } from "next/image";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";

// Define the type for each project
interface Project {
  title: string;
  role: string;
  Link: string;
  desc: string;
  image: StaticImageData;
}

const RecentProjects: React.FC = () => {
  const [animate, setAnimate] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<number>(0);
  const projects: Project[] = [
    {
      title: "Welcome Fuels – WordPress Website",
      role: "Frontend Developer",
      Link: "https://welcomefuels.com/",
      desc: "Website for Welcome Fuels, a US-based fueling company. This project, completed during my time at 'Kaj Consultancy', showcases various services through a custom post-type setup, ensuring easy content management. The website is designed for a seamless user experience, highlighting the company's offerings effectively",
      image: welcomeFuel,
    },
    {
      title: "Pandaplcement – Job portal Website",
      role: "Frontend Developer",
      Link: "https://pandaplacement.com/#/home",
      desc: `In my recent projects at 'Kaj Consulatancy', we developed a job portal that efficiently connects job seekers and employers. I created user-friendly interfaces for profile building, CV generation, and job applications. Employers can create profiles, post jobs, and manage applications. The project is nearing completion and is set to meet all client requirements, positioning it for a successful launch. Must vist`,
      image: panda,
    },
    {
      title: "ATAI Construction – WordPress Website",
      role: "Frontend Developer",
      Link: "https://atai.zenkode.tech/",
      desc: "Developed a professional WordPress site for ATAI Construction, a US-based company specializing in large-scale projects. This project, completed during my time at 'Kaj Consultancy', the site highlights their portfolio and significant construction projects with a focus on a user-friendly design and organized presentation.",
      image: Atai,
    },
    {
      title: "Kurani Gruop – WordPress Website",
      role: "Frontend Developer",
      Link: "https://kuranigroup.com/",
      desc: "This WordPress website for Kurani Group was created during my time at Kaj Consultancy. It was developed without using any pre-built themes, instead utilizing custom blocks for a fully personalized design. The project highlights my ability to deliver tailored WordPress solutions, ensuring the website is both functional and aligned with the brand's growth in the restaurant industry.",
      image: kurani,
    },
    {
      title: "Kaj Consultancy  – Portfolio Website",
      role: "Frontend Developer",
      Link: "https://kaj-consultancy.com/",
      desc: "Just wrapped up another awesome project at Kaj Consultancy! 🎉 Designed and developed their official website from scratch using React. Clean UI, smooth interactions, and fully responsive—built to represent the brand with style and speed! 🚀",
      image: kaj,
    },
  ];


  const handlePrevProject = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setAnimate(false);
    }, 300); // match with CSS animation duration
  };

  const handleNextProject = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      setAnimate(false);
    }, 300);
  };


  return (
    <div className="bg-white/5 text-white p-2 rounded-xl max-w-3xl ">
      <h2 className="text-center text-2xl pb-5 font-bold">Recent Projects</h2>
      <div className="border border-white p-3 rounded-lg">

        {/* Project Display with animation */}
        <div
          className={`transition-all duration-500 ease-in-out transform ${animate ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            } relative w-full h-auto overflow-hidden rounded-lg `}
        >
          <span className="">
            <a
              target="_blank"
              href={projects[currentProject].Link}
              className="flex items-center gap-1 justify-end text-[10px]  text-gray-400"
            >
              <HiOutlineViewfinderCircle className=" hover:scale-75 text-md" />
              Must Visit
            </a>
          </span>

          {/* Heading and Image Row */}
          <div className="flex items-center gap-4">
            <div className="flex justify-center w-32 h-32">
              <Image
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                {projects[currentProject].title}
              </h3>
              <p className="text-md text-gray-400">
                {projects[currentProject].role}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="mt-2 text-left">
            <p className="text-sm h-[100px] overflow-hidden text-ellipsis leading-snug">
              {projects[currentProject].desc}
            </p>
          </div>

        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-5 items-center justify-end ">
          <button
            className="bg-white px-2 py-1 rounded text-black hover:bg-black hover:text-white transition-all duration-300 border border-white focus:outline-none"
            onClick={handlePrevProject}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="bg-white px-2 py-1 rounded text-black hover:bg-black hover:text-white border border-white focus:outline-none"
            onClick={handleNextProject}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
