"use client";
import React, { useState } from "react";
import logo from "../../public/assets/32_id_201441.png";
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
      desc: "Working on frontend development for various client projects.",
      image: logo,
      startDate: "Aug 2023",
      endDate: "Present",
    },
  ];

  return (
    <div className="bg-black text-white p-4 rounded-xl">
      <h2 className="text-center text-2xl pb-5 font-bold relative">
        RECENT PROJECTS
      </h2>
      <div className="border border-white rounded-lg">
        <div className="relative flex w-full py-2 h-auto overflow-hidden rounded-lg shadow-lg">
          <div className="flex justify-center w-[30%] h-40">
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="text-left mt-4 w-[70%] px-10">
            <h3 className="text-2xl font-semibold">{projects[0].title}</h3>
            <p className="text-md text-gray-400">{projects[0].role}</p>
            <p className="mt-2">{projects[0].desc}</p>
            <div className="mt-4 text-sm text-gray-500">
              <p>
                <strong>Start Date:</strong> {projects[0].startDate}
              </p>
              <p>
                <strong>End Date:</strong> {projects[0].endDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
