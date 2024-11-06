import React from "react";
import { Slider1 } from "./slides/Slider1";
import { Slider2 } from "./slides/Slider2";
import { Slider3 } from "./slides/Slider3";

export const Slides = () => {
  return (
    <div className="lg:container lg:mx-auto flex gap-4">
      <div className="md:w-9/12 mx-auto">
        <Slider1 />
      </div>
      <div className="w-4/12 lg:w-3/12 md:flex flex-col gap-3 hidden">
        <div className="flex-1 rounded-md bg-gray-800 text-white">
          <Slider2 />
        </div>
        <div className="flex-1 rounded-md bg-gray-100">
          <Slider3 />
        </div>
      </div>
    </div>
  );
};
