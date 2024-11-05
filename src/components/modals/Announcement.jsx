import React from "react";
import { CgClose } from "react-icons/cg";

export const Announcement = ({ closeModal }) => {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-between items-center px-10 py-3">
        <div>Black Friday</div>
        <div className="items-center flex gap-1">
          up to <span className="text-yellow-500 font-bold text-xl">59%</span>{" "}
          OFF
        </div>
        <div className="bg-yellow-500 text-black px-3 py-1 font-bold rounded text-sm">
          SHOP NOW
        </div>
        <div>
          <button onClick={() => closeModal()}>
            <CgClose size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
