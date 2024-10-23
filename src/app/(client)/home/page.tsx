import Sidebar from "@/app/components/sidebar/sidebar";
import React from "react";

const Main = () => {
  return (
    <>
      <div className="h-full flex w-full">
        <div className="w-1/4 backdrop-blur-md bg-white/30 rounded-xl ">
          <Sidebar />
        </div>
        <div className="w-[80%] flex flex-col gap-4 px-4">
          <div className="h-[10%]  w-[100%]  backdrop-blur-md bg-white/30 rounded-xl">
            dfbk
          </div>
          <div className="h-[90%] w-[100%] backdrop-blur-md bg-white/30 rounded-xl">
            dfbk
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
