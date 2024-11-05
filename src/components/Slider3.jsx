import React, { useState, useEffect } from "react";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";

export const Slider3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const names = ["Nash", "Wendy", "Edith"];
  const maxSlide = names.length - 1;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === maxSlide ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? maxSlide : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const dots = () => {
    return Array.from({ length: maxSlide + 1 }).map((_, index) => (
      <div
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-2 h-2 rounded-full cursor-pointer ${
          index === currentSlide ? "bg-blue-500" : "bg-gray-500"
        }`}
      ></div>
    ));
  };

  return (
    <div className="rounded p-2 relative">
      <div className="text-center text-xl mb-4">{names[currentSlide]}</div>
    </div>
  );
};
