import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiMessage2Line, RiNotification2Line } from "react-icons/ri";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import './Header.css';
const Header = () => {
  return (
    <div className="header-menu flex gap-14 px-4 py-4">
      {/* Search Bar */}
      <div className="header-search flex-relative w-1/2 ml-4">
        <IoSearchOutline className="search-icon relative top-[2.5rem] left-[1rem] text-gray-500 text-xl cursor-pointer" />
        <input
          type="text"
          placeholder="Search your course"
          className="w-full pl-12 pr-4 py-4 rounded-lg border-none text-base"
        />
      </div>
      <div className="menu">
        {/* Header Icons */}
        <div className="header-icon flex items-center gap-14">
          <FaRegQuestionCircle className="menu-icon text-2xl text-gray-500 cursor-pointer hover:text-gray-800" />
          <RiMessage2Line className="menu-icon text-2xl text-gray-500 cursor-pointer hover:text-gray-800" />
          <TbAdjustmentsHorizontal className="menu-icon text-2xl text-gray-500 cursor-pointer hover:text-gray-800" />
          <RiNotification2Line className="menu-icon text-2xl text-gray-500 cursor-pointer hover:text-gray-800" />
        </div>

        {/* Profile Section */}
        <div className="header-profile flex items-center gap-6 mr-4">
          <img
            src="../Images/profile.png"
            alt="Profile"
            className="w-14 h-14 bg-[#FFCD66] object-cover rounded-[10px]"
          />
          <h4 className="text-2xl font-semibold text-gray-900">Adeline H Dancy</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;