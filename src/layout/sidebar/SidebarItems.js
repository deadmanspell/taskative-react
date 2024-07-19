import React, { Fragment, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const SidebarItems = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);
  
  return (
    <Fragment>
      {item?.children ? (
        <button
          onClick={handleOpen}
          className={
            isOpen
              ? `dropdown-icons-hover group`
              : `dropdown-icons group hover:dropdown-icons-hover group`
          }
        >
          {item.icons}
          <FaCaretDown
            className={`transition-all ease-in-out duration-300 ${
              isOpen
                ? "inline-flex rotate-180"
                : "hidden group-hover:inline-flex rotate-0"
            }`}
          />
        </button>
      ) : (
        <Link to={item.path} className="sidebar-icons group">
          {item.icons}
        </Link>
      )}
      {isOpen &&
        item?.children.map((children) => (
          <Link to={children.path} className="children-icons group">
            {children.icons}
          </Link>
        ))}
    </Fragment>
  );
};

export default SidebarItems;
