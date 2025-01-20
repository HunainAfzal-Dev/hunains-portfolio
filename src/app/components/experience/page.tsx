"use client";
import logo from "../../public/assets/logo.png";
import Image, { StaticImageData } from "next/image";

// Define the type for the project
interface Project {
  title: string;
  role: string;
  desc: string;
  image: StaticImageData;
  startDate: string;
  endDate: string;
}

const Experience: React.FC = () => {
  // Define a single project object
  const project: Project = {
    title: "Kaj Consultancy",
    role: "Frontend Developer",
    desc: "Working on frontend development for various client projects.",
    image: logo,
    startDate: "Aug 2023",
    endDate: "Present",
  };

  return (
    <div className="bg-black/80 text-white p-2 rounded-xl">
      <h2 className="text-center text-2xl pb-5 font-bold relative">
        Experience
      </h2>
      <div className="border border-white rounded-lg">
        <div className="relative flex gap-4 justify-center  items-center  w-full px-2 h-auto overflow-hidden rounded-lg shadow-lg">
          <div className="flex items-center w-[30%] h-40">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full object-cover h-fit border md:border-none rounded-full px-4"
            />
          </div>
          <div className="
          text-left mt-4 w-[70%] px-3 md:px-10">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-md text-gray-400">{project.role}</p>
            <p className="mt-2">{project.desc}</p>
            <div className="mt-4 text-sm text-gray-500">
              <p>
                <strong>Start Date:</strong> {project.startDate}
              </p>
              <p>
                <strong>End Date:</strong> {project.endDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
