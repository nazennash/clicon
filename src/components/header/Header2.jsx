import React from "react";
import { BiCart, BiHeart, BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

export const Header2 = () => {
  return (
    <>
      <div className="flex justify-between items-center px-10 py-3 bg-secondary text-white text-sm">
        <div>
          <p className="font-bold uppercase text-lg tracking-widest">clicon</p>
        </div>
        <div className="relative items-center hidden sm:block flex-grow ml-5 mr-5 max-w-xl">
          <input
            type="text"
            placeholder="Search for anything"
            className="mr-8 w-full p-2 rounded-sm text-black pl-3 focus:outline-none"
          />
          <BiSearch
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            color="black"
          />
        </div>
        <div className="flex gap-5 items-center">
          <BiSearch size={20} className="block sm:hidden" />
          <BiCart size={20} />
          <BiHeart size={20} />
          <CgProfile size={20} />
        </div>
      </div>
    </>
  );
};
