import React from "react";
import { FaBars, FaCaretDown, FaUserCircle } from "react-icons/fa";

const Navbar = ({ onExpand }) => {
  return (
    <nav className={`navbar group`}>
      <button onClick={onExpand} className="bg-white/40 mobile:z-[1] backdrop-blur-md rounded-lg shadow-md p-2">
        <FaBars />
      </button>
      <div className="flex justify-end space-x-2 bg-white/40 backdrop-blur-sm rounded-3xl p-2">
      <FaUserCircle />
      <FaCaretDown />
      </div>
    </nav>
  );
};

export default Navbar;
