import React from "react";
import PersonalData from "../../utils/data/personal-info";
import Image from "next/image";
import profile from "../../public/assets/profile.png";
import { FaFacebookF } from "react-icons/fa";
import { IconType } from "react-icons";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



interface SocialIcons {
  name: string,
  icon: IconType,
  link: string,
}

const SocialIcons: SocialIcons[] = [
  { name: "Facebook", icon: FaFacebookF, link: 'facebook.com' },
  { name: "Linkdin", icon: IoLogoLinkedin, link: 'www.linkedin.com/in/hunain-arain-a7945b2b8' },
  { name: "facebook", icon: FaSquareUpwork, link: 'https://www.upwork.com/freelancers/~0114d278f24ca7a2b4?mp_source=share' },
  { name: "Github", icon: FaGithub, link: 'https://github.com/HunainAfzal-Dev' },
]



const Sidebar = () => {

  return (
    <div className="p-4 rounded-md shadow-md h-full max-w-sm mx-auto">
      <div className="w-full h-40 rounded-lg bg-gray-300 mx-auto mb-4 overflow-hidden">
        <Image
          alt="Hunain Afzal"
          src={profile}
          className="h-full w-full object-contain"
        />
      </div>
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">
        {PersonalData.sidebar.name}
      </h2>
      <p className="text-center text-lg font-semibold mb-4">
        {PersonalData.sidebar.designation}
      </p>
      <div className="text-xl mt-10">
        <div className="mb-2">
          <span className="font-bold">Email: </span>
          <span>{PersonalData.sidebar.email}</span>
        </div>
        <div className="mb-2">
          <span className="font-bold">Phone: </span>
          <span>{PersonalData.sidebar.phone}</span>
        </div>
        <div className="mb-2">
          <span className="font-bold">Location: </span>
          <span>{PersonalData.sidebar.address}</span>
        </div>
      </div>
      <div className="Social-icons flex justify-between p-10">
        {SocialIcons.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
            <item.icon size={24} className="hover:scale-75 transition-all duration-200" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
