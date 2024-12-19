// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const activeLink = "text-blue-500"; 
//   const defaultLink = "hover:text-gray-400";

//   return (
//     <nav className="bg-gray-800 text-white">
//       <div className="container mx-auto sm:px-16 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-xl font-bold">LOGO</div>

//         {/* Navigation Links */}
//         <ul className="flex space-x-6">
//           {/* Home */}
//           <li>
//             <NavLink
//               to="/home"
//               className={({ isActive }) => (isActive ? activeLink : defaultLink)}
//             >
//               Home
//             </NavLink>
//           </li>

//           {/* Company */}
//           <li className="relative group">
//             <NavLink
//               to="/company"
//               className={({ isActive }) => (isActive ? activeLink : defaultLink)}
//             >
//               Company
//             </NavLink>
//             <ul className="absolute left-0 hidden group-hover:block bg-gray-700 mt-2 rounded shadow-lg">
//               <li className="px-4 py-2 hover:bg-gray-600">
//                 <NavLink
//                   to="/company/about-bfour"
//                   className={({ isActive }) => (isActive ? activeLink : defaultLink)}
//                 >
//                   About Bfour
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-600">
//                 <NavLink
//                   to="/company/legal-document"
//                   className={({ isActive }) => (isActive ? activeLink : defaultLink)}
//                 >
//                   Legal Document
//                 </NavLink>
//               </li>
//             </ul>
//           </li>

//           {/* Water Ionizer */}
//           <li className="relative group">
//             <NavLink
//               to="/water-ionizer"
//               className={({ isActive }) => (isActive ? activeLink : defaultLink)}
//             >
//               Water Ionizer
//             </NavLink>
//             <ul className="absolute left-0 hidden group-hover:block bg-gray-700 mt-2 rounded shadow-lg">
//               {[
//                 { path: "/water-ionizer/manufactured-by", label: "Manufactured By" },
//                 { path: "/water-ionizer/about-jinnys", label: "About Jinnys" },
//                 { path: "/water-ionizer/b7", label: "B7" },
//                 { path: "/water-ionizer/b9", label: "B9" },
//                 { path: "/water-ionizer/b9-plus", label: "B9 Plus" },
//                 { path: "/water-ionizer/disclaimer", label: "Disclaimer" },
//                 { path: "/water-ionizer/certification", label: "Certification" },
//                 { path: "/water-ionizer/media", label: "Media" },
//                 { path: "/water-ionizer/service-center", label: "Service Center" },
//               ].map((item, index) => (
//                 <li key={index} className="px-4 py-2 hover:bg-gray-600">
//                   <NavLink
//                     to={item.path}
//                     className={({ isActive }) => (isActive ? activeLink : defaultLink)}
//                   >
//                     {item.label}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </li>

//           {/* Products */}
//           <li className="relative group">
//             <NavLink
//               to="/products"
//               className={({ isActive }) => (isActive ? activeLink : defaultLink)}
//             >
//               Products
//             </NavLink>
//             <ul className="absolute left-0 hidden group-hover:block bg-gray-700 mt-2 rounded shadow-lg">
//               <li className="px-4 py-2 hover:bg-gray-600">
//                 <NavLink
//                   to="/products/hydrogen-tumbler"
//                   className={({ isActive }) => (isActive ? activeLink : defaultLink)}
//                 >
//                   Hydrogen Tumbler
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-600">
//                 <NavLink
//                   to="/products/disclaimer"
//                   className={({ isActive }) => (isActive ? activeLink : defaultLink)}
//                 >
//                   Disclaimer
//                 </NavLink>
//               </li>
//             </ul>
//           </li>

//           {/* Media */}
//           <li className="relative group">
//             <NavLink
//               to="/media"
//               className={({ isActive }) => (isActive ? activeLink : defaultLink)}
//             >
//               Media
//             </NavLink>
//             <ul className="absolute left-0 hidden group-hover:block bg-gray-700 mt-2 rounded shadow-lg">
//               <li className="px-4 py-2 hover:bg-gray-600">
//                 <NavLink
//                   to="/media/gallery"
//                   className={({ isActive }) => (isActive ? activeLink : defaultLink)}
//                 >
//                   Gallery
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-600">
//                 <NavLink
//                   to="/media/video"
//                   className={({ isActive }) => (isActive ? activeLink : defaultLink)}
//                 >
//                   Video
//                 </NavLink>
//               </li>
//             </ul>
//           </li>

//           {/* Our Banker */}
//           <li>
//             <NavLink
//               to="/our-banker"
//               className={({ isActive }) => (isActive ? activeLink : defaultLink)}
//             >
//               Our Banker
//             </NavLink>
//           </li>

//           {/* Contact Us */}
//           <li>
//             <NavLink
//               to="/contact-us"
//               className={({ isActive }) => (isActive ? activeLink : defaultLink)}
//             >
//               Contact Us
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import './Navbar.css'
// const Navbar = () => {
//   const activeLink = "text-blue-500 bg-[#007DAB]";
//   const defaultLink = "hover:text-black transition duration-300";

//   const [showCompanyLinks, setShowCompanyLinks] = useState(false);
//   const [showWaterIonizerLinks, setShowWaterIonizerLinks] = useState(false);
//   const [showMediaLinks, setShowMediaLinks] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [navbarFixedScroll, setNavbarFixedScroll] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setNavbarFixedScroll(true)
//       } else {
//         setNavbarFixedScroll(false)
//       }
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [])

//   // Toggle sublink visibility on parent link click
//   const handleParentLinkClick = (e, section) => {
//     e.preventDefault();
//     if (section === "company") {
//       setShowCompanyLinks(!showCompanyLinks);
//     } else if (section === "water-ionizer") {
//       setShowWaterIonizerLinks(!showWaterIonizerLinks);
//     } else if (section === "media") {
//       setShowMediaLinks(!showMediaLinks);
//     }
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className={`${navbarFixedScroll ? "sm:fixed sm:top-0 sm:left-0 w-full z-50 bg-white shadow-md transition-all scroll-smooth duration-500" : "relative"}transition-all ease-in-out duration-300`}>
//       <div className=" container mx-auto sm:px-36 px-6  py-2 relative z-20 bg-white flex justify-between items-center navbarShadow">


//         {/* Logo */}
//         <div className="text-xl font-bold text-white cursor-pointer">
//           <img src="/public/bb-removebg-preview (1).png" alt=""
//             className="object-cover w-48"
//           />
//         </div>

//         {/* Hamburger Menu Icon for mobile */}
//         <div className="lg:hidden" onClick={toggleMobileMenu}>
//           {isMobileMenuOpen ? (
//             <FaTimes className="text-2xl z-20 text-white" />
//           ) : (
//             <FaBars className="text-2xl z-20 text-white" />
//           )}
//         </div>

//         {/* Navigation Links */}
//         <ul
//           className={`lg:flex flex-col lg:flex-row space-x-8 items-center lg:space-x-8 lg:space-y-0 space-y-4 transition-all duration-300 lg:static absolute bg-gray-800 w-full top-0 left-0 lg:bg-transparent lg:w-auto lg:h-auto h-screen ${isMobileMenuOpen ? "top-0" : "-top-full"
//             }`}
//         >
//           {/* Home */}
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? `${activeLink} font-semibold sm:p-2 bg-[white] rounded-md` : `${defaultLink} hover:bg-white hover:text-black sm:p-2 rounded-md`
//               }
//             >
//               Home
//             </NavLink>
//           </li>

//           {/* Company */}
//           <li className="relative group">
//             <a
//               href="/company"
//               onClick={(e) => handleParentLinkClick(e, "company")}
//               className={defaultLink}
//             >
//               Company
//             </a>
//             <ul
//               className={`absolute w-56 sm:px-2 sm:py-2 left-0 mt-2 rounded-md shadow-lg transition duration-300 ease-in-out transform scale-95 ${showCompanyLinks ? "block" : "hidden"
//                 } group-hover:block bg-[#1ca3ec] text-white`}
//             >
//               <li className="sm:p-2 mb-2">
//                 <NavLink
//                   to="/company/about-bfour"
//                   className={({ isActive }) =>
//                     isActive ? `${activeLink} font-semibold sm:p-2 bg-[white] rounded-md` : `${defaultLink} hover:bg-white hover:text-black sm:p-2 rounded-md`
//                   }
//                 >
//                   About Bieng Healthy
//                 </NavLink>
//               </li>
//               <li className="sm:p-2">
//                 <NavLink
//                   to="/company/legal-document"
//                   className={({ isActive }) =>
//                     isActive ? `${activeLink} font-semibold sm:p-2 bg-[white] rounded-md` : `${defaultLink} hover:bg-white hover:text-black sm:p-2 rounded-md`
//                   }
//                 >
//                   Legal Document
//                 </NavLink>
//               </li>
//             </ul>
//           </li>

//           {/* Products */}
//           <li className="sm:p-2">
//             <NavLink
//               to="/products"
//               className={({ isActive }) =>
//                 isActive ? `${activeLink} font-semibold sm:p-2 bg-[white] rounded-md` : `${defaultLink} hover:bg-white hover:text-black sm:p-2 rounded-md`
//               }
//             >
//               Product
//             </NavLink>
//           </li>

//           {/* Water Ionizer */}
//           <li className="relative group">
//             <a
//               href="/water-ionizer"
//               onClick={(e) => handleParentLinkClick(e, "water-ionizer")}
//               className={defaultLink}
//             >
//               Water Ionizer
//             </a>
//             <ul
//               className={`absolute w-56 sm:px-2 sm:py-2 left-0 mt-2 rounded-md shadow-lg transition duration-300 ease-in-out transform scale-95 ${showWaterIonizerLinks ? "block" : "hidden"
//                 } group-hover:block bg-[#1ca3ec] text-white`}
//             >
//               {[
//               { path: "/water-ionizer/b7", label: "B7" },
//               { path: "/water-ionizer/b9", label: "B9" },
//               { path: "/water-ionizer/b9-plus", label: "B9 Plus" },
//               { path: "/water-ionizer/disclaimer", label: "Disclaimer" },
//               { path: "/water-ionizer/certification", label: "Certification" },].map((item, index) => (
//                 <li key={index} className="sm:p-2 ">
//                   <NavLink
//                     to={item.path}
//                     className={({ isActive }) =>
//                       isActive ? `${activeLink} font-semibold  sm:p-2 bg-[white] rounded-md w-full` : `${defaultLink} w-full hover:bg-white hover:text-black sm:p-2 rounded-md`
//                     }
//                   >
//                     {item.label}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </li>

//           {/* Gallery*/}
//           <li className="relative group">
//             <a
//               href="/media"
//               onClick={(e) => handleParentLinkClick(e, "media")}
//               className={defaultLink}
//             >
//               Gallery
//             </a>
//             <ul
//               className={`absolute w-56 sm:px-2 sm:py-2 left-0 mt-2 rounded-md shadow-lg transition duration-300 ease-in-out transform scale-95 ${showMediaLinks ? "block" : "hidden"
//                 } group-hover:block bg-[#1ca3ec] text-white`}
//             >
//               <li className="sm:p-2">
//                 <NavLink
//                   to="/media/gallery"
//                   className={({ isActive }) =>
//                     isActive ? `${activeLink} font-semibold  sm:p-2 bg-[white] rounded-md w-full` : `${defaultLink} w-full hover:bg-white hover:text-black sm:p-2 rounded-md`
//                   }
//                 >
//                   Image Gallery
//                 </NavLink>
//               </li>
//               <li className="sm:p-2">
//                 <NavLink
//                   to="/media/video"
//                   className={({ isActive }) =>
//                     isActive ? `${activeLink} font-semibold  sm:p-2 bg-[white] rounded-md w-full` : `${defaultLink} w-full hover:bg-white hover:text-black sm:p-2 rounded-md`
//                   }
//                 >
//                   Video Gallery
//                 </NavLink>
//               </li>
//             </ul>
//           </li>
//           {/* Contact Us */}
//           <li>
//             <NavLink
//               to="/contact-us"
//               className={({ isActive }) =>
//                 isActive ? `${activeLink} font-semibold  sm:p-2 bg-[white] rounded-md w-full` : `${defaultLink} w-full hover:bg-white hover:text-black sm:p-2 rounded-md`
//               }
//             >
//               Contact Us
//             </NavLink>
//           </li>
//         </ul>
//         <div>
//           <button className="forDemo">For Demo</button>
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;


import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronUp, FaChevronDown } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
  const activeLink = "text-blue-500 bg-white font-semibold rounded-md sm:p-2";
  const defaultLink =
    "hover:text-blue-500 hover:bg-white transition duration-300 sm:p-2 rounded-md";

  const [showDropdown, setShowDropdown] = useState({
    company: false,
    waterIonizer: false,
    media: false,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarFixedScroll, setNavbarFixedScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarFixedScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (section) => {
    setShowDropdown((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLinkClick = (dropdown) => {
    setShowDropdown((prev) => ({
      ...prev,
      [dropdown]: false,
    }));
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`${navbarFixedScroll
        ? "fixed top-0 left-0 w-full bg-white shadow-md z-50"
        : "relative"
        } transition-all duration-300`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            src="/mainlogo.png"
            alt="Logo"
            className="object-cover w-48"
          />
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden relative" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FaTimes className="text-2xl text-blue-500 z-50" />
          ) : (
            <FaBars className="text-2xl text-blue-500 z-50" />
          )}
        </div>

        {/* Navigation Links */}
        <ul
          className={`sm:flex sm:items-center gap-5 flex items-start z-50 lg:space-x-8 absolute sm:static sm:bg-transparent w-full sm:w-auto top-0 left-0  flex-col sm:flex-row  transition-transform duration-300 ${isMobileMenuOpen
            ? "translate-x-0 h-screen  bg-[#2389DA] text-white  mt-28 px-6 py-8"
            : "-translate-x-full lg:translate-x-0 sm:m-0 mt-28"
            }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${activeLink} p-2`
                  : `${defaultLink} transition duration-300 p-2 ${isMobileMenuOpen ? 'my-4' : 'my-4'}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>

          {/* Company */}
          {/* <li className="relative group">
            <button
              onClick={() => toggleDropdown("company")}
              className={`${defaultLink} flex items-center p-1 justify-between m-0`}
            >
              Company
              {showDropdown.company ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </button>
            <ul
              className={`absolute bg-blue-500 p-4 text-white flex flex-col gap-3 lg:gap-0  w-48 mt-2 rounded-md sm:py-4 sm:px-2 shadow-lg transition-transform duration-300 ${
                showDropdown.company ? "scale-100 opacity-100" : "scale-95 opacity-0 hidden"
              }`}
              style={{zIndex: 999}}
            >
              <li className="sm:my-4">
                <NavLink
                  to="/company/about-bfour"
                  className={({ isActive }) =>
                    isActive ? `${activeLink} p-1` : `${defaultLink} ${isMobileMenuOpen ? 'my-4' : 'my-4'} p-1` 
                  }
                  onClick={() => handleLinkClick("company") ||  setIsMobileMenuOpen(false)}
                >
                  About Being Healthy
                </NavLink>
              </li>
              <li className="sm:my-4">
                <NavLink
                  to="/company/about-manufecture"
                  className={({ isActive }) =>
                    isActive ? `${activeLink} p-1` : `${defaultLink} ${isMobileMenuOpen ? 'my-4' : 'my-4'} p-1` 
                  }
                  onClick={() => handleLinkClick("company") || setIsMobileMenuOpen(false)}
                >
                  About Manufacturer
                </NavLink>
              </li>
            </ul>
          </li> */}
          <li className="relative group">
            <button
              className={`${defaultLink} flex items-center p-1 justify-between m-0 lg:hover:bg-white lg:hover:text-blue-500`}
            >
              Company
              <FaChevronDown className="ml-2" />
            </button>
            <ul
              className={`absolute bg-blue-500 p-4 text-white flex flex-col gap-3 w-48 mt-2 rounded-md sm:py-4 sm:px-2 shadow-lg transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible`}
              style={{
                zIndex: 999,
                transitionDelay: '0s', // Add a slight delay for smooth transitions
              }}
            >
              <li className="sm:my-2">
                <NavLink
                  to="/company/about-beinghealthy"
                  className={({ isActive }) =>
                    isActive ? `${activeLink} p-1` : `${defaultLink} p-1`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Being Healthy
                </NavLink>
              </li>
              <li className="sm:my-2">
                <NavLink
                  to="/company/about-manufacture"
                  className={({ isActive }) =>
                    isActive ? `${activeLink} p-1` : `${defaultLink} p-1`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Manufacturer
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? `${activeLink} p-2`
                  : `${defaultLink} transition duration-300 p-2 ${isMobileMenuOpen ? 'my-4' : 'my-4'}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className={({ isActive }) =>
                isActive
                  ? `${activeLink} p-2`
                  : `${defaultLink} transition duration-300 p-2 ${isMobileMenuOpen ? 'my-4' : 'my-4'}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Technology
            </NavLink>
          </li>

          {/* Water Ionizer */}
          {/* <li className="relative group">
            <button
              onClick={() => toggleDropdown("waterIonizer")}
              className={`${defaultLink} flex items-center p-1 justify-between m-0`}
            >
              Water Ionizer{" "}
              {showDropdown.waterIonizer ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </button>
            <ul
              className={`absolute bg-blue-500 text-white flex flex-col gap-3 lg:gap-0 p-4 w-48 mt-2 rounded-md sm:py-4 sm:px-2 shadow-lg transition-transform duration-300 ${showDropdown.waterIonizer ? "scale-100 opacity-100" : "scale-95 opacity-0 hidden"
                }`}
              style={{ zIndex: 100 }}
            >
              {[{ path: "/water-ionizer/b9", label: "BH-9000" }, { path: "/water-ionizer/akthreethousand", label: "BH-3000" }, { path: "/water-ionizer/aktwothousand", label: "BH-2000" }, { path: "/water-ionizer/digitalnull", label: "Digital Null" }, { path: "/water-ionizer/waterrichcup", label: "Hydrogen WaterBottle" }, { path: "/water-ionizer/disclaimer", label: "Disclaimer" }, { path: "/water-ionizer/certification", label: "Certification" }].map((item, index) => (
                <li key={index} className="sm:my-4 w-full">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? `${activeLink} w-full p-1` : `${defaultLink} w-full p-1`
                    }
                    onClick={() => handleLinkClick("waterIonizer") || setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li> */}
          <li className="relative group">
            <button
              className={`${defaultLink} flex items-center p-1 justify-between m-0`}
            >
              Water Ionizer
              <FaChevronDown className="ml-2" />
            </button>
            <ul
              className={`absolute bg-blue-500 text-white flex flex-col gap-3 lg:gap-0 p-4 w-48 mt-2 rounded-md sm:py-4 sm:px-2 shadow-lg transform transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2`}
              style={{ zIndex: 100 }}
            >
              {[
                { path: "/water-ionizer/bhninethousand", label: "BH-9000" },
                { path: "/water-ionizer/bhfourthousand", label: "BH-4000" },
                // { path: "/water-ionizer/akthreethousand", label: "BH-3000" },
                { path: "/water-ionizer/bhtwothousand", label: "BH-2000" },
                { path: "/water-ionizer/faucet", label: "Faucet" },
                { path: "/water-ionizer/hydrogenwater", label: "Hydrogen Bottle" },
                { path: "/water-ionizer/disclaimer", label: "Disclaimer" },
                { path: "/water-ionizer/certification", label: "Certification" },
              ].map((item, index) => (
                <li key={index} className="sm:my-2 w-full">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? `${activeLink} w-full p-1` : `${defaultLink} w-full p-1`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>


          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? `${activeLink} p-2`
                  : `${defaultLink} transition duration-300 p-2`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


