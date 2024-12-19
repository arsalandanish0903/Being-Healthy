import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Disclaimer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="mb-10 relative">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/disclamer.jpg"
          alt="Disclaimer Background"
          className="w-full h-[500px] object-cover shadow-lg transition-transform transform hover:scale-105 duration-300"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-6 text-center">
          <h1
            className="text-4xl sm:text-6xl font-extrabold mb-4 text-shadow text-white"
            data-aos="fade-up"
          >
            Disclaimer
          </h1>
          <p
            className="text-lg sm:text-xl text-gray-300 font-light max-w-3xl"
            data-aos="fade-down"
          >
            Transparency and clarity matter to us. Read through our disclaimer to better understand our policies and how we provide information for your benefit.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-16 px-6 sm:px-20 lg:px-36 space-y-16 text-gray-700">
        {/* Section 1: Image Left, Content Right */}
        <section className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8" data-aos="fade-right">
          <img
            src="/disclaimer-examples.png"
            alt="General Disclaimer"
            className="w-full lg:w-1/2 rounded-lg shadow-lg"
          />
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-[#1FA5EC]">General Disclaimer</h2>
            <p className="text-lg leading-relaxed">
              The content on this website is provided for general informational purposes only. While we strive for accuracy, we do not guarantee the completeness or timeliness of the information presented here.
            </p>
          </div>
        </section>

        {/* Section 2: Content Left, Image Right */}
        <section className="flex flex-col lg:flex-row-reverse items-center space-y-8 lg:space-y-0 lg:space-x-8" data-aos="fade-left">
          <img
            src="/liability.webp"
            alt="No Liability"
            className="w-full lg:w-1/2 rounded-lg shadow-lg"
          />
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-[#1FA5EC]">No Liability</h2>
            <p className="text-lg leading-relaxed">
              We strive to provide accurate and up-to-date information on this website; however, we make no representations or warranties, express or implied, about the completeness, reliability, or suitability of the content. Any actions you take based on the information provided on this site are solely at your own risk.



              In no event shall this website, its authors, or affiliates be held liable for any loss or damage, including but not limited to indirect or consequential loss, arising out of or in connection with the use of this website or its content. Your understanding and acceptance of this disclaimer are appreciated.
            </p>
            <p className="text-lg leading-relaxed">Please note that while we aim to ensure that all content is informative and helpful, the dynamic nature of information and individual circumstances means that not all content may be applicable to your specific situation. It is always advisable to consult a qualified professional or conduct your own thorough research before making significant decisions.</p>
          </div>
        </section>

        {/* Section 3: Image Left, Content Right */}
        <section className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8" data-aos="fade-up">
          <img
            src="/thirdPartyLinks.webp"
            alt="Third-Party Links"
            className="w-full lg:w-1/2 rounded-lg shadow-lg"
          />
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-[#1FA5EC]">Third-Party Links</h2>
            <p className="text-lg leading-relaxed">
            This website may contain links to external websites for your convenience and reference. These links are provided solely to offer additional information or resources that may be of interest to you. However, please be aware that we do not endorse, control, or assume responsibility for the content, privacy practices, or any activities of these third-party websites.
            </p>
            <p className="text-lg leading-relaxed">
            We encourage you to review the privacy policies, terms of use, and other relevant information of any external site before engaging with its content or services. Although we strive to ensure that the links provided are reputable, we cannot guarantee the accuracy, legality, or appropriateness of any external content.

Any interactions you have with third-party sites, including purchases or other transactions, are solely between you and the third-party entity. Therefore, we are not responsible for any consequences, including any loss, damage, or legal issues, that may arise from your use of or reliance on third-party websites.
            </p>
          </div>
        </section>
      </div>

    </div>
  );
}

export default Disclaimer;
