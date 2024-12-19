import React, { useEffect } from "react";
import './Footer.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, [])
  const socialLinks = [
    { name: "About Us", path: "/company/about-beinghealthy" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact-us" },
  ];
  const handleClickTop = (top) => {
    window.scrollTo({ top, behavior: 'smooth' });
  }
  return (
    <>
      <div className="border-t-4 border-[#2389DA] shadow-xl py-14 px-16 font-sans tracking-wide bg-gray-50 w-full">
        <footer className="container mx-auto relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quick Links Section */}
            <div className="shadow-md p-6 rounded-lg bg-[#2389DA] hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-4">
                {[
                  { label: "BH-9000", path: "/water-ionizer/bhninethousand" },
                  { label: "Disclaimer", path: "/water-ionizer/disclaimer" },
                  { label: "Certification", path: "/water-ionizer/certification" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      onClick={handleClickTop}
                      to={link.path}
                      className="text-white  text-sm transition-all duration-300 transform hover:translate-x-2"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="shadow-md p-6 rounded-lg bg-[#2389DA] hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-white text-lg font-semibold mb-4">Connect On</h2>
              <ul className="space-y-4">
                {["WhatsApp", "Facebook", "Instagram"].map((link, index) => (
                  <li key={index}>
                    <Link
                      className="text-white  text-sm transition-all duration-300 transform hover:translate-x-2"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Section */}
            <div className="shadow-md p-6 rounded-lg bg-[#2389DA] hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-white text-lg font-semibold mb-4">Information</h2>
              <ul className="space-y-4">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      onClick={handleClickTop}
                      to={link.path} // Pass the path here
                      className="text-white  text-sm transition-all duration-300 transform hover:translate-x-2"
                    >
                      {link.name} {/* Display the link name */}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo Section */}
            <div className="flex items-center lg:justify-center">
              <a href="#">
                <img
                  src="/bb-removebg-preview (1).png"
                  alt="logo"
                  className="w-60 transition-transform duration-500 hover:scale-110"
                />
              </a>
            </div>
          </div>

          <hr className="my-8 border-gray-300" />

          <div className="flex sm:justify-between p-6 flex-wrap gap-6 bg-[#2389DA] sm:px-6 sm:py-10 rounded-lg">
            {/* Social Icons */}
            <div className="flex space-x-5">
              <a
                href="#"
                className="text-white text-sm transition-all duration-300 transform hover:translate-x-2"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white text-sm transition-all duration-300 transform hover:translate-x-2"
              >
                Terms & Conditions
              </a>
            </div>

            {/* Footer Copyright */}
            <p className="text-white text-sm">
              © Royals Webtech. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>

    </>
  );
};

export default Footer;
