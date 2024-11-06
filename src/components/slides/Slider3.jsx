import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <div className="flex items-center gap-5 px-5 py-2">
        <img
          src="https://picsum.photos/200"
          alt="slider"
          className="w-1/3 object-cover rounded"
        />
        <div className="mb-4">
          <h1 className="text-xl font-semibold">{names[currentSlide]}</h1>
          <div className="space-y-3 mt-1">
            <p className="max-w-sm">Lorem ipsum dolor</p>
            <p className="text-blue-800 font-semibold">2000</p>
            <p>
              <Link
                to=""
                className="bg-primary py-2 px-4 rounded text-white text-sm"
              >
                Shop Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
