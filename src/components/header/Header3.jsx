import React from "react";
import { BiGitCompare } from "react-icons/bi";
import { GiHeadphones } from "react-icons/gi";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineHelpOutline } from "react-icons/md";

export const Header3 = () => {
  return (
    <>
      <div className="flex items-center justify-evenly sm:justify-between border-b border-gray-400 pb-3">
        <div className="flex items-center text-sm gap-5">
          <span>All Category</span>
          <span className="flex items-center gap-1">
            <IoLocationOutline className="text-xl sm:text-base" />
            <span className="hidden sm:inline">Track Order</span>
          </span>
          <span className="flex items-center gap-1">
            <BiGitCompare className="text-xl sm:text-base" />
            <span className="hidden sm:inline">Compare</span>
          </span>

          <span className="flex items-center gap-1">
            <GiHeadphones className="text-xl sm:text-base" />
            <span className="hidden sm:inline">Customer Support</span>
          </span>

          <span className="flex items-center gap-1">
            <MdOutlineHelpOutline className="text-xl sm:text-base" />
            <span className="hidden sm:inline">Need Help</span>
          </span>
        </div>
        <div className="flex items-center gap-1">
          <IoCallOutline className="text-xl sm:text-base" />
          <span className="hidden sm:inline">+254797382426</span>
        </div>
      </div>
    </>
  );
};
