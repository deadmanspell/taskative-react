import React from "react";

const MainCard = ({ children, title }) => {
  return (
    <div className="bg-white w-[98%] h-[95%] shadow-md rounded-lg py-6 px-8 overflow-y-scroll">
      <div
        className="main-card-header"
      >
        <label className="text-xl text-white">{title}</label>
      </div>
      {children}
    </div>
  );
};

export default MainCard;
