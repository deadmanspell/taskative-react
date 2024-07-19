import React, { useState } from "react";
import Sidebar from "../sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

const MainLayout = () => {
  const [expand, setExpand] = useState(true);
  return (
    <div className="absolute top-0 left-0 flex h-full w-full transition-all duration-300 ease-in-out">
      <Sidebar handleExpand={() => setExpand(false)} expand={expand} />
      <div className="flex flex-col h-full w-full bg-gray-200 justify-center items-center space-y-4 pb-4">
        <Navbar onExpand={() => setExpand(!expand)} />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
