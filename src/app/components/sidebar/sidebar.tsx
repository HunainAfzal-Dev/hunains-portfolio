import React from "react";
import PersonalData from "../../utils/data/personal-info";
import Image from "next/image";
import profile from "../../public/assets/profile.png";

const Sidebar = () => {
  return (
    <div className="p-4 rounded-md shadow-md h-full">
      <div className="w-1/2 h-1/4 rounded-lg bg-gray-300 mx-auto mb-4">
        <Image alt="Hunain Afzal" src={profile} className="h-full w-full object-contain " />
      </div>
      <h2 className="text-4xl font-bold text-center mb-2">
        {PersonalData.sidebar.name}
      </h2>
      <p className="text-center text-lg font-[600] mb-4">
        {PersonalData.sidebar.designation}
      </p>
      <div className="text-xl mt-10">
        <div className="mb-2">
          <span className="font-bold">Email: {PersonalData.sidebar.email}</span>
        </div>
        <div className="mb-2">
          <span className="font-bold">Phone: {PersonalData.sidebar.phone}</span>
        </div>
        <div className="mb-2">
          <span className="font-bold">
            Location: {PersonalData.sidebar.address}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
