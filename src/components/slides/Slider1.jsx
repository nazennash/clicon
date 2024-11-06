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
        className={`w-3 h-3 rounded-full cursor-pointer transition ${
          index === currentSlide ? "bg-blue-500" : "bg-gray-400"
        }`}
      ></div>
    ));

  return (
    <div className="relative rounded-xl overflow-hidden shadow-sm bg-gray-50  flex flex-col items-center py-5 space-y-4">
      <div className="relative flex items-center w-full">
        <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-40 text-white p-4 md:p-8 rounded-xl z-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            {slides[currentSlide]}
          </h1>
          <p className="max-w-md mt-2 md:mt-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link
            to=""
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Shop Now
          </Link>
        </div>
        <img
          src="https://picsum.photos/800/400"
          alt="slider"
          className="w-full h-60 md:h-96 object-cover rounded-xl"
        />
      </div>
      <div className="flex justify-between items-center w-full px-4">
        <div
          className="p-2 cursor-pointer text-xl text-gray-600 hover:text-gray-800"
          onClick={prevSlide}
        >
          <CgArrowLeft />
        </div>
        <div className="flex gap-3">{renderDots()}</div>
        <div
          className="p-2 cursor-pointer text-xl text-gray-600 hover:text-gray-800"
          onClick={nextSlide}
        >
          <CgArrowRight />
        </div>
      </div>
    </div>
  );
};
