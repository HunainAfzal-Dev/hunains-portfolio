import React from "react";
import PersonalData from "../../utils/data/personal-info";
import Image from "next/image";
import profile from "../../public/assets/profile.png";

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
    </div>
  );
};

export default Sidebar;
