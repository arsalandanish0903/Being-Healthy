import React, { useEffect } from 'react';
import { FaTint } from 'react-icons/fa'; // Import icon for water
import { GiWaterDrop } from 'react-icons/gi'; // Import icon for water drop
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FcAbout } from "react-icons/fc";

function AboutBfour() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
  });
  }, [])
  return (
    <>
      <div className="relative">
        {/* Image Container */}
        <img
          src="/fancy-summer-banner-depicting-water-nature-ai-generation_201606-4418.avif"
          alt="Glass of Water"
          className="w-full h-80 object-cover shadow-lg  transition-transform transform hover:scale-105 duration-300"
        />
        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-6 text-center  shadow-lg">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-shadow text-white animate__animated animate__fadeIn" data-aos='fade-left'>About Being Healthy</h1>
          <p className="text-lg sm:text-xl font-light max-w-3xl opacity-90" data-aos='fade-right'>
            We are committed to bringing the finest water solutions to your doorstep, ensuring your health is supported by the best resources available.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 px-6 sm:px-36 sm:py-8">
        <div data-aos='fade-left' className="flex justify-center transition-transform transform hover:scale-105 duration-300">
          <img
            src="/Ionozer 2.png"
            alt="Modern Kitchen with Water Ionizer"
            className="w-full h-auto rounded-lg shadow-xl transition-all transform hover:rotate-2 duration-300"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className='flex items-center  mb-4' data-aos='fade-right'>
          <FcAbout className="text-3xl text-blue-600 mr-3" /> {/* Water Icon */}
          <h2 className="text-3xl font-bold text-black hover:text-blue-800 transition-colors duration-300">Being Healthy</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6" data-aos='fade-right'>
            Being Healthy Solutions is a pioneering company based in Dhantoli, Nagpur, committed to enhancing the health and wellness of its customers through innovative solutions. With a strong focus on promoting a healthier lifestyle, the company has introduced its flagship product, the Bieng Healthy Water Ionizer. This cutting-edge device is designed to revolutionize the way people consume water by providing high-quality, ionized alkaline water, which is known for its numerous health benefits.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed" data-aos='fade-right'>
            Whether you're looking to improve your daily water intake or bring cutting-edge solutions to your kitchen, Bieng Healthy has something to offer for every need. Discover the future of water today.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 px-6 sm:px-36 sm:py-8">
        <div className="flex flex-col justify-center">
          <div className="flex items-center mb-4" data-aos='fade-right'>
            <FaTint className="text-3xl text-blue-500 mr-3" /> {/* Water Icon */}
            <h2  className="text-3xl font-bold text-black hover:text-blue-800 transition-colors duration-300">Water Ionizer</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6" data-aos='fade-left'>
            The Being Healthy Water Ionizer employs advanced filtration and ionization technology to transform ordinary tap water into clean, ionized alkaline water, which is rich in antioxidants and essential minerals. The ionizer is engineered to remove harmful contaminants and balance the pH levels of the water, making it more beneficial for hydration, detoxification, and overall well-being. The product is tailored to suit the needs of health-conscious individuals, families, and businesses seeking to improve their water quality and, subsequently, their health.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed" data-aos='fade-left'>
            Whether you're looking to improve your daily water intake or bring cutting-edge solutions to your kitchen, Bieng Healthy has something to offer for every need. Discover the future of water today.
          </p>
        </div>

        <div className="flex justify-center transition-transform transform hover:scale-105 duration-300" data-aos='fade-left'>
          <img
            src="/bh-2000Update.png"
            alt="Modern Kitchen with Water Ionizer"
            className="w-full h-auto rounded-lg shadow-xl transition-all transform hover:rotate-2 duration-300"
          />
        </div>
      </div>
    </>
  );
}

export default AboutBfour;
