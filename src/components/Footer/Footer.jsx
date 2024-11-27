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
    { name: "About Us", path: "/company/about-bfour" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact-us" },
  ];
  const handleClickTop = (top) => {
    window.scrollTo({ top, behavior: 'smooth' });
  }
  return (
    <footer className="container mx-auto relative  bg-gradient-to-r from-[#081C7C] to-[#65cef5] py-14 px-16 font-sans tracking-wide overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Quick Links Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-4">
            {[
              { label: "BH-9 Plus", path: "/water-ionizer/b9" },
              { label: "Disclaimer", path: "/water-ionizer/disclaimer" },
              { label: "Certification", path: "/water-ionizer/certification" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                onClick={handleClickTop}
                  to={link.path}
                  className="text-gray-300 hover:text-white text-sm transition-all duration-300 transform hover:translate-x-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Connect On</h2>
          <ul className="space-y-4">
            {["WhatsApp", "Facebook", "Instagram"].map((link, index) => (
              <li key={index}>
                <Link
                  to=''
                  className="text-gray-300 hover:text-white text-sm transition-all duration-300 transform hover:translate-x-2"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Information</h2>
          <ul className="space-y-4">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <Link
                  onClick={handleClickTop}
                  to={link.path} // Pass the path here
                  className="text-gray-300 hover:text-white text-sm transition-all duration-300 transform hover:translate-x-2"
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
              src="/public/bb-removebg-preview (1).png"
              alt="logo"
              className="w-60 transition-transform duration-500 hover:scale-110"
            />
          </a>
        </div>
      </div>

      <hr className="my-8 border-white" />

      <div className="flex sm:justify-between flex-wrap gap-6">
        {/* Social Icons */}
        <div className="flex space-x-5">
          <a href="#"
            className="text-gray-300 hover:text-white text-sm transition-all duration-300 transform hover:translate-x-2"
          >Privacy Policy</a>
          <a href="#"
            className="text-gray-300 hover:text-white text-sm transition-all duration-300 transform hover:translate-x-2"
          >Terms & Conditions</a>
        </div>

        {/* Footer Copyright */}
        <p className="text-gray-300 text-sm">
          © Royals Webtech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
