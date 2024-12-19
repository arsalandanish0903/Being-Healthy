// import React, { useEffect, useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import './Hero.css'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Link } from 'react-router-dom'
// // Slider data with images and associated content
// const slides = [
//   {
//     image: '/Untitled designmainImg.png',
//     brand: 'Introducing BH-9000 Hydrogen Water',
//     title: "World's 1st EEC Advanced Technology",
//     subtitle: "(Energy Enhance Chip in built)",
//     description:
//       'Discover the revolutionary technology designed to enhance your experience.',
//     button2: 'Learn More',
//     chip: '/chip.jpg'
//   },
//   {
//     image: '/update1image.png',
//     brand: 'Introducing BH-3000 Hydrogen Water',
//     title: "World's 1st EEC Advanced Technology",
//     subtitle: "(Energy Enhance Chip in built)",
//     description:
//       "Built from world - class technology integrated with most efficient product design for convenience and ease.",
//     button2: 'Learn More',
//     chip: '/chip.jpg'
//   },
//   {
//     image: '/ak2000update.png',
//     brand: 'Introducing BH-2000 Hydrogen Water',
//     title: "World's 1st EEC Advanced Technology",
//     subtitle: "(Energy Enhance Chip in built)",
//     description: 'The BH-2000 is built for superior efficiency and quality.',
//     button2: 'Learn More',
//     chip: '/chip.jpg'
//   },
//   {
//     image: '/hydrogenWaterBackground.png',
//     title: 'Hydrogen Water for a Healthier You',
//     subtitle: '',
//     description:
//       'Discover the benefits of hydrogen water and elevate your well-being.',
//     button2: 'Learn More',
//   },
// ];

// function Hero() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-in-out',
//       once: true,
//     });
//   }, [])
//   return (
//     <div className="relative w-full h-screen">
//       {/* Main Container */}
//       <div className="h-full w-full relative overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out h-full"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {slides.map((slide, index) => (
//             <div key={index} className="w-full h-full flex-shrink-0 relative">
//               {/* Image */}
//               <img
//                 src={slide.image}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full sm:h-full h-96 object-cover sm:object-center object-right"
//               />

//               {/* Overlay Content */}
//               <div className="absolute inset-0 flex flex-col justify-end sm:justify-center py-2 items-start px-4 sm:px-10 sm:space-y-6 sm:w-1/2 w-full text-white">
//                 <div className="">
//                   {slide.chip && index !== slides.length - 1 && (
//                     <img
//                       src={slide.chip}
//                       alt=""
//                       className="h-40 object-cover w-full rounded-md"
//                     />
//                   )}
//                 </div>

//                 {/* Heading (Hidden on Mobile) */}
//                 <h1 data-aos='fade-down' className="hidden sm:block text-lg sm:text-4xl font-bold bg-black  rounded-md p-2 sm:p-4">
//                   {slide.title}{' '}
//                   {slide.subtitle && (
//                     <strong className="text-[#2389DA]">{slide.subtitle}</strong>
//                   )}
//                 </h1>

//                 {/* Description (Hidden on Mobile) */}
//                 <p data-aos='fade-up' className="hidden sm:block text-sm sm:text-lg bg-black  rounded-md p-1 sm:p-2">
//                   {slide.description}
//                 </p>

//                 {/* Button (Visible on all screen sizes) */}
//                 <div className="flex space-x-8 sm:relative absolute bottom-52 left-4 right-4 sm:bottom-auto sm:left-auto sm:right-auto">
//                   <button data-aos='fade-down' className="learnMoreBtn">
//                     <Link to='/eeccontent'>
//                       {slide.button2}
//                     </Link>
//                   </button>
//                 </div>
//               </div>


//             </div>
//           ))}
//         </div>

//         {/* Left Arrow */}
//         <button
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 z-10"
//           onClick={handlePrev}
//         >
//           <FaArrowLeft />
//         </button>
//         {/* Right Arrow */}
//         <button
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 z-10"
//           onClick={handleNext}
//         >
//           <FaArrowRight />
//         </button>
//       </div>
//     </div>

//   );
// }

// export default Hero;


import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: '/Untitled designmainImg.png',
    brand: 'BH-9000 Water Ionizer',
    title: "World's 1st EEC Advanced Technology",
    subtitle: "(Energy Enhance Chip in built)",
    // description:
    //   'Discover the revolutionary technology designed to enhance your experience.',
    button2: 'Read More..',
    // chip: '/updatechip-Photoroom.png'
    chip: '/updatechip.jpg'
  },
  {
    image: '/update1image.png',
    brand: 'BH-4000 Hydrogen Genrator',
    title: "World's 1st EEC Advanced Technology",
    subtitle: "(Energy Enhance Chip in built)",
    // description:
    //   "Built from world - class technology integrated with most efficient product design for convenience and ease.",
    button2: 'Read More..',
    // chip: '/updatechip-Photoroom.png'
    chip: '/updatechip.jpg'
  },
  {
    image: '/ak2000update.png',
    brand: 'BH-2000 Water Ionizer',
    title: "World's 1st EEC Advanced Technology",
    subtitle: "(Energy Enhance Chip in built)",
    // description: 'The BH-2000 is built for superior efficiency and quality.',
    button2: 'Read More..',
    // chip: '/updatechip-Photoroom.png'
    chip: '/updatechip.jpg'
  },
  {
    image: '/hydrogenWaterBackground.png',
    brand: 'Hydrogen Water Bottle',
    title: 'Hydrogen Water for a Healthier You',
    subtitle: '',
    // description:
    //   'Discover the benefits of hydrogen water and elevate your well-being.',
    button2: 'Read More..',
  },
];

// function Hero() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-in-out',
//       once: true,
//     });
//   }, []);

//   return (
//     <div className="relative w-full sm:h-screen">
//       <div className="h-full w-full relative overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out h-full"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {slides.map((slide, index) => (
//             <div key={index} className="w-full h-full flex-shrink-0 relative">
//               {/* Image */}
//               <img
//                 src={slide.image}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full sm:h-full object-cover sm:object-center object-right"
//               />

//               {/* Overlay Content */}
//               <div className="absolute top-0 flex flex-col justify-end sm:justify-center py-2 items-start px-4 sm:px-10 sm:space-y-6 sm:w-1/2 w-full text-white">
//                 <div className="">
//                   {slide.chip && index !== slides.length - 1 && (
//                     <>
//                       <div className="flex  sm:flex-row items-center w-full gap-6 sm:gap-8 px-4 sm:px-0">
//                         {/* Text and Arrow Section */}
//                         <div className="flex flex-col sm:flex-row items-center sm:max-w-md w-full sm:justify-center">
//                           <p className="sm:text-2xl text-sm font-bold bg-black sm:px-6 sm:py-2 rounded shadow-lg text-center sm:line-clamp-2">
//                             Energy Enhance Chip  <span className='text-[#2389DA]'>(EEC)</span>
//                           </p>
//                           <span className="animate-zoom mt-4 sm:mt-0 sm:ml-8">
//                             <FaArrowRightLong className="text-xl sm:text-8xl sm:text-white text-black" />
//                           </span>
//                         </div>

//                         {/* Image Section */}
//                         <div className="relative lg:w-1/2 w-full">
//                           <img
//                             src={slide.chip}
//                             alt="Energy Enhance Chip"
//                             className="h-48 object-cover sm:w-full  rounded-lg p-2 filter drop-shadow-lg animate-float"
//                           />
//                         </div>
//                       </div>
//                     </>
//                   )}
//                 </div>

//                 {/* Brand */}
//                 <h2 data-aos="fade-down" className="hidden sm:block text-sm sm:text-2xl bg-black rounded-md p-2 sm:p-4 font-semibold text-white">
//                   {slide.brand}
//                 </h2>

//                 {/* Title */}
//                 <h1 data-aos="fade-down" className="hidden sm:block text-lg sm:text-4xl font-bold bg-black rounded-md p-2 sm:p-4">
//                   {slide.title}{' '}
//                   {slide.subtitle && (
//                     <strong className="text-[#2389DA]">{slide.subtitle}</strong>
//                   )}
//                 </h1>

//                 {/* Button */}
//                 <div className="flex space-x-8 sm:relative absolute bottom-52 left-4 right-4 sm:bottom-auto sm:left-auto sm:right-auto">
//                   <button data-aos="fade-down" className="learnMoreBtn">
//                     <Link to="/eeccontent">
//                       {slide.button2}
//                     </Link>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Left Arrow */}
//         <button
//           className="absolute top-1/2 flex-none sm:block left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 z-10"
//           onClick={handlePrev}
//         >
//           <FaArrowLeft />
//         </button>

//         {/* Right Arrow */}
//         <button
//           className="absolute top-1/2 flex-none sm:block right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 z-10"
//           onClick={handleNext}
//         >
//           <FaArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// }
function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full sm:h-screen">
      <div className="h-full w-full relative overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              {/* Image */}
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[60vh] sm:h-full object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute top-0 flex flex-col justify-center space-y-4 sm:space-y-6 items-start px-4 sm:px-10 w-full h-full text-white bg-black bg-opacity-20">
                {/* Chip Section */}
                {slide.chip && index !== slides.length - 1 && (
                  <div className="flex flex-col sm:flex-row items-center sm:space-x-8 space-y-4 sm:space-y-0">
                    <p className="text-base sm:text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded shadow-lg">
                      Energy Enhance Chip{" "}
                      <span className="text-[#2389DA]">(EEC)</span>
                    </p>
                    <span className="animate-zoom hidden sm:inline">
                      <FaArrowRightLong className="text-3xl sm:text-6xl" />
                    </span>
                    <img
                      src={slide.chip}
                      alt="Energy Enhance Chip"
                      className="h-16 lg:w-auto w-24 text-left lg:h-28 rounded-lg drop-shadow-lg"
                    />
                  </div>
                )}
                <p className="text-sm sm:text-xl font-bold bg-black bg-opacity-50 p-2 sm:p-4 rounded">{slide.brand}</p>
                {/* Title */}
                <h1
                  data-aos="fade-down"
                  className="text-sm sm:text-4xl font-bold bg-black bg-opacity-50 p-2 sm:p-4 rounded"
                >
                  {slide.title}{" "}
                  {slide.subtitle && (
                    <strong className="text-[#2389DA] sm:block block">{slide.subtitle}</strong>
                  )}
                </h1>

                {/* Button */}
                <Link
                  to="/eeccontent"
                  className="learnMoreBtn"
                  data-aos="fade-down"
                >
                  {slide.button2}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow - Hidden on Mobile */}
        {/* Left Arrow */}
        <button
          className="absolute bottom-4 sm:top-1/2 left-4 transform sm:-translate-y-1/2 text-black p-2 rounded-full shadow-lg bg-blue-100 h-8 z-10 focus:outline-none"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>

        {/* Right Arrow */}
        <button
          className="absolute bottom-4 sm:top-1/2 right-4 transform sm:-translate-y-1/2 text-black p-2 rounded-full shadow-lg bg-blue-100 h-8 z-10 focus:outline-none"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>

      </div>
    </div>
  );
}


export default Hero;
