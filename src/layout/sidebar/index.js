import React, { Fragment } from "react";
import menuItem from "../../menu-items";
import SidebarItems from "./SidebarItems";

const Sidebar = ({ expand }) => {
  return (
    <div className={`sidebar ${expand ? "mobile:w-[55%] laptop:w-[8%] px-2" : "w-0 px-0"}`}>
      <div className="flex flex-col items-center justify-between space-y-6 ">
        <label className="h-16">Taskative</label>
        {menuItem.map((item) => (
          <Fragment key={item.name}>
            <SidebarItems item={item} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
