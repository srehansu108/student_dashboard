import React from "react";
import {
  RiDashboard3Line,
  RiSettingsLine,
  RiPieChart2Line,
} from "react-icons/ri";
import { VscBook } from "react-icons/vsc";
import { LuBookMarked } from "react-icons/lu";
import { FaRegQuestionCircle, FaFeatherAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen bg-white flex flex-col items-center md:items-start md:w-1/5 w-20">
      {/* Logo */}
      <div className="p-6 flex items-center justify-center md:justify-start gap-2">
        <FaFeatherAlt className="text-4xl w-10 h-10" />
        <span className="hidden md:block text-2xl font-bold">Quyl.</span>
      </div>

      {/* Navigation */}
      <nav className="w-full pt-10">
        <ul className="list-none text-lg font-semibold flex flex-col items-center md:items-start space-y-4 px-4">
          <li className="w-full">
            <NavLink
              to="/dashboards"
              className={({ isActive }) =>
                `flex items-center gap-4 py-4 px-2 rounded-lg ${
                  isActive ? "bg-gray-300 text-black" : "text-gray-600"
                } hover:bg-gray-200 hover:text-black`
              }
            >
              <RiDashboard3Line className="text-2xl" />
              <span className="hidden md:inline">Dashboard</span>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/students"
              className={({ isActive }) =>
                `flex items-center gap-4 py-4 px-2 rounded-lg ${
                  isActive ? "bg-gray-300 text-black" : "text-gray-600"
                } hover:bg-gray-200 hover:text-black`
              }
            >
              <VscBook className="text-2xl" />
              <span className="hidden md:inline">Students</span>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/chapters"
              className={({ isActive }) =>
                `flex items-center gap-4 py-4 px-2 rounded-lg ${
                  isActive ? "bg-gray-300 text-black" : "text-gray-600"
                } hover:bg-gray-200 hover:text-black`
              }
            >
              <LuBookMarked className="text-2xl" />
              <span className="hidden md:inline">Chapters</span>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/help"
              className={({ isActive }) =>
                `flex items-center gap-4 py-4 px-2 rounded-lg ${
                  isActive ? "bg-gray-300 text-black" : "text-gray-600"
                } hover:bg-gray-200 hover:text-black`
              }
            >
              <FaRegQuestionCircle className="text-2xl" />
              <span className="hidden md:inline">Help</span>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `flex items-center gap-4 py-4 px-2 rounded-lg ${
                  isActive ? "bg-gray-300 text-black" : "text-gray-600"
                } hover:bg-gray-200 hover:text-black`
              }
            >
              <RiPieChart2Line className="text-2xl" />
              <span className="hidden md:inline">Reports</span>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center gap-4 py-4 px-2 rounded-lg ${
                  isActive ? "bg-gray-300 text-black" : "text-gray-600"
                } hover:bg-gray-200 hover:text-black`
              }
            >
              <RiSettingsLine className="text-2xl" />
              <span className="hidden md:inline">Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
