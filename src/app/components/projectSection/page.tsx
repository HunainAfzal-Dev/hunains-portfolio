"use client";
import Image from "next/image";
import React, { useState } from "react";
import welcomeFuel from "../../public/assets/project1.png";
import panda from "../../public/assets/project5.png";
import { StaticImageData } from "next/image";

// Define the type for each project
interface Project {
  title: string;
  role: string;
  desc: string;
  image: StaticImageData;
}

const RecentProjects: React.FC = () => {
  // Define the projects array with proper typing
  const projects: Project[] = [
    {
      title: "Welcome Fuels",
      role: "Frontend Developer",
      desc: "The project is based on WordPress and the website is for a fuel station company.",
      image: welcomeFuel,
    },
    {
      title: "Pandaplcement",
      role: "Frontend Developer",
      desc: "The project is based on ReactJs and the purpose  station company.",
      image: panda,
    },
  ];

  // Define the state with proper type
  const [currentProject, setCurrentProject] = useState<number>(0);

  // Function to handle previous project navigation
  const handlePrevProject = (): void => {
    setCurrentProject((prevProject) =>
      prevProject === 0 ? projects.length - 1 : prevProject - 1
    );
  };

  // Function to handle next project navigation
  const handleNextProject = (): void => {
    setCurrentProject((prevProject) =>
      prevProject === projects.length - 1 ? 0 : prevProject + 1
    );
  };

  return (
    <div className="bg-black/80 text-white p-2 rounded-xl max-w-3xl ">
      <h2 className="text-center text-2xl pb-5 font-bold">Recent Projects</h2>
      <div className="border border-white p-3 rounded-lg">
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
        {/* Project Display */}
        <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg">
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

            <p className="text-sm">{projects[currentProject].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
