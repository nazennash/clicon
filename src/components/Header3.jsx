import React from "react";
import { BiGitCompare } from "react-icons/bi";
import { GiHeadphones } from "react-icons/gi";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineHelpOutline } from "react-icons/md";

export const Header3 = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-400 pb-3">
        <div className="flex items-center text-sm gap-5">
          <span>All Category</span>
          <span className="flex gap-1 items-center">
            <IoLocationOutline />
            Track Order
          </span>
          <span className="flex gap-1 items-center">
            <BiGitCompare />
            Compare
          </span>
          <span className="flex gap-1 items-center">
            <GiHeadphones />
            Customer Suppoert
          </span>
          <span className="flex gap-1 items-center">
            <MdOutlineHelpOutline />
            Need Help
          </span>
        </div>
        <div>
          <span className="flex gap-1 items-center">
            <IoCallOutline />
            +254797382426
          </span>
        </div>
      </div>
    </>
  );
};
