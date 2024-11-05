import React from "react";
import { Slider1 } from "./Slider1";
import { Slider2 } from "./Slider2";
import { Slider3 } from "./Slider3";

export const Slides = () => {
  return (
    <div className="flex gap-4 mt-3">
      <div className="w-7/12 border">
        <Slider1 />
      </div>
      <div className="w-5/12 border">
        <Slider2 />
        <Slider3 />
      </div>
    </div>
  );
};
