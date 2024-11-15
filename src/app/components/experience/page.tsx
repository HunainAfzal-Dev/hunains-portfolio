"use client";
import React, { useState } from "react";
import logo from "../../public/assets/32_id_201441.png"
import Image from "next/image";

// Define the type for each project with added start and end dates
interface Project {
  title: string;
  role: string;
  desc: string;
  image: any;
  startDate: string;
  endDate: string;
}

const Experience: React.FC = () => {
  // Define the projects array with proper typing and added dates
  const projects: Project[] = [
    {
      title: "Kaj Consultancy",
      role: "Frontend Developer",
      desc: "",
      image: logo,
      startDate: "Aug 2023",
      endDate: "Present",
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
    <div className="bg-black text-white p-4 rounded-xl">
      <h2 className="text-center text-2xl pb-5 font-bold relative">
        RECENT PROJECTS
      </h2>
      <div className="border border-white rounded-lg">
        <div className="relative flex w-full py-2 h-auto overflow-hidden rounded-lg shadow-lg">
          <div className="flex justify-center w-[30%] h-40">
            <Image
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
            <div className="mt-4 text-sm text-gray-500">
              <p>
                <strong>Start Date:</strong> {projects[currentProject].startDate}
              </p>
              <p>
                <strong>End Date:</strong> {projects[currentProject].endDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
