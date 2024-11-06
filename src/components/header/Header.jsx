import React from "react";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-10 py-3 bg-secondary text-white text-sm border-b border-gray-400">
        <div>Welcome to Clicon online eCommerce store</div>
        <div className="flex gap-3 items-center">
          <span>Follow us</span>
          <span className="flex gap-3 border-r pr-5">
            <BsTwitterX />
            <BsFacebook />
            <BsYoutube />
            <BsInstagram />
          </span>
          <span>Eng</span>
          <span>USD</span>
        </div>
      </div>
    </>
  );
};
