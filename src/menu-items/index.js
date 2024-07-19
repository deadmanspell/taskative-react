import { FaHome, FaBusinessTime, FaCheck, FaPlus, FaUserPlus, FaClipboardList } from "react-icons/fa";

const menuItem = [
  {
    name: "Home",
    icons: <FaHome />,
    path: '/',
  },
  {
    name: "Add",
    icons: <FaPlus />,
    path: '/add',
    children: [
      {
        name: "Add User",
        icons: <FaUserPlus />,
        path: '/add',
      },
      {
        name: "Add Task",
        icons: <FaClipboardList />,
        path: '/add',
      }
    ]
  },
  {
    name: "On Progress",
    icons: <FaBusinessTime />,
    path: '/on-progress',
  },
  {
    name: "Done",
    icons: <FaCheck />,
    path: '/done',
  },
];

export default menuItem;
