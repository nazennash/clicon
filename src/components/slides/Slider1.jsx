import React, { useState, useEffect } from "react";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { Link } from "react-router-dom";

export const Slider1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["Slide 1", "Slide 2", "Slide 3"];
  const maxSlide = slides.length - 1;

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
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderDots = () =>
    Array.from({ length: maxSlide + 1 }).map((_, index) => (
      <div
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-2 h-2 rounded-full cursor-pointer ${
          index === currentSlide ? "bg-blue-500" : "bg-gray-500"
        }`}
      ></div>
    ));

  return (
    <div className="rounded p-5 relative h-full flex flex-col justify-between">
      <div className="flex items-center flex-1">
        <div className="mb-4 space-y-6 hidden md:block">
          <h1 className="text-3xl font-bold">{slides[currentSlide]}</h1>
          <p className="max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            <Link to="" className="bg-primary py-2 px-4 rounded text-white">
              Shop Now
            </Link>
          </p>
        </div>
        <img
          src="https://picsum.photos/200"
          alt="slider"
          className="w-full h-80 md:h-80 object-cover rounded"
        />
      </div>
      <div className="flex justify-between items-center absolute -bottom-2 md:bottom-0 left-0 right-0 px-4">
        <div className="p-2 cursor-pointer" onClick={prevSlide}>
          <CgArrowLeft />
        </div>
        <div className="flex gap-3">{renderDots()}</div>
        <div className="p-2 cursor-pointer" onClick={nextSlide}>
          <CgArrowRight />
        </div>
      </div>
    </div>
  );
};
