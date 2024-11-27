import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
  '/public/Untitled design.png',
  '/public/Untitled design2.png',
  '/public/Untitled design3.png',
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative  w-full h-screen sm:px-0 px-6">
      {/* Image Slider */}
      <div className="container mx-auto h-full w-full relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              {/* Image */}
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                {/* <h1 className="text-white text-4xl font-bold">Your Overlay Text</h1> */}
              </div>
            </div>
          ))}
        </div>
        {/* Left Arrow */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 z-10"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>
        {/* Right Arrow */}
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 z-10"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Hero;
