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
    <section className="bg-white/5 text-white p-2 rounded-xl shadow-lg max-w-3xl">
      <h2 className="text-center text-2xl pb-6 font-bold">Experience</h2>

      <div className="border border-white rounded-lg p-3">
        {/* Heading and Image Row */}
        <div className="flex items-center gap-4">
          <Image
            src={project.image}
            alt={project.title}
            className="w-24 h-24 object-contain"
          />
          <h3 className="text-2xl font-semibold">{project.title}</h3>
        </div>

        {/* Content Section */}
        <div className=" text-left">
          <p className="text-[16px] text-gray-400">{project.role}</p>
          <p className=" mt-4">{project.desc}</p>
          <div className="mt-4 text-sm text-gray-400 space-y-1">
            <p>
              <strong>Start-Date:</strong> {project.startDate}
            </p>
            <p><strong>End-Date:</strong> {project.endDate}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
