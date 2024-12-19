import React, { useEffect } from 'react';
import AOS from 'aos';  // Import AOS for scroll animations
import 'aos/dist/aos.css';  // Import AOS styles

function AboutManufacturer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS for smooth animations
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#010038] mb-8">
          About Jinnys Co., Ltd
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div className="text-left space-y-4" data-aos="fade-up">
            <p className="text-lg text-gray-700 leading-relaxed">
              Jinnys Co., Ltd is a company that manufactures the Alkaline water ionizer, a medical device, and has received recognition of its suitability for medical device manufacturing and quality control standards (GMP).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Jinnys is a registered global brand that markets the highest quality world-class range of water ionizers and hydrogen water generators for both residential and commercial usage. With a legacy of excellence, Jinnys has won 102 awards, 27 patents, and 58 certificates, including GMP-Medical Device and KFDA.
            </p>
          </div>

          {/* Image Section */}
          <div data-aos="fade-up">
            <video
              controls
              className="w-full h-auto"
              poster="/video-poster2.jpg"
            >
              <source src="/eec2Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>


      </div>
    </div>
  );
}

export default AboutManufacturer;
