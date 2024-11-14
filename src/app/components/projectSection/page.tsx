"use client";
import React, { useState } from "react";

// Define the type for each project
interface Project {
  title: string;
  role: string;
  desc: string;
  image: string;
}

const RecentProjects: React.FC = () => {
  // Define the projects array with proper typing
  const projects: Project[] = [
    {
      title: "Welcome Fuels",
      role: "Frontend Developer",
      desc: "The project is based on WordPress and the website is for a fuel station company.",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      title: "Pandaplcement",
      role: "Frontend Developer",
      desc: "The project is based on WordPress and the website is for a fuel station company.",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
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
    <div className="bg-black text-white p-6 rounded-xl">
      <h2 className="text-center text-2xl pb-5 font-bold relative">
        RECENT PROJECTS
      </h2>
      <div className="border border-white p-6 rounded-lg">
        <div className="flex gap-5 items-center justify-center">
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
        <div className="relative flex w-full py-10 h-auto overflow-hidden rounded-lg shadow-lg">
          <div className="flex justify-center w-[30%] h-40">
            <img
              src={projects[currentProject].image}
              alt={projects[currentProject].title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="text-left mt-4 w-[70%] px-10">
            <h3 className="text-2xl font-semibold">
              {projects[currentProject].title}
            </h3>
            <p className="text-md text-gray-400">
              {projects[currentProject].role}
            </p>
            <p className="mt-2">{projects[currentProject].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;


// absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2
