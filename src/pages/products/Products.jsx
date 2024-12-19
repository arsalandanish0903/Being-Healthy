// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './Products.css'
// import { useNavigate } from 'react-router-dom';
// function Products() {
//   const navigate = useNavigate()
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-in-out',
//       once: true,
//     });
//   }, []);
//   const productsCard = [
//     {
//       image: 'Ionozer 2.png',
//       heading: 'Bieng Healthy Water Ionizer',
//       desc: 'Compact and efficient for everyday use.',
//       brandName: 'AK-9000',
//       btn: 'Add To Cart'
//     },
//     {
//       image: '/3000.jpg',
//       heading: 'Being Healthy AK-3000',
//       desc: 'Advanced water ionization.',
//       brandName: 'AK-3000',
//       btn: 'Add To Cart'
//     },
//     {
//       image: '/ak-2000-9-plate-mediqua-alkaline-water-ionizer.jpg',
//       heading: 'Being Healthy AK-2000',
//       desc: 'Premium model with enhanced filtration system.',
//       brandName: 'AK-2000',
//       btn: 'Add To Cart'
//     },
//     {
//       image: '/null.webp',
//       heading: 'Being Healthy Undersink Alkaline Ioniser Faucet',
//       desc: 'Used with: AK 5000, AK 3000, AK 9000, AK 2000 only',
//       brandName: 'Digital Null',
//       btn: 'Add To Cart'
//     },
//     {
//       image: '/richCup.jpg',
//       heading: 'Being Healthy Undersink Alkaline Ioniser Faucet',
//       desc: 'Used with: AK 5000, AK 3000, AK 9000, AK 2000 only',
//       brandName: 'Digital Null',
//       btn: 'Add To Cart'
//     },
//   ];

//   return (
//     <>
//       {/* Hero Section */}
//       <div className="mb-10 relative">
//         <img
//           src="/productheadingimg.jpg"
//           alt="Glass of Water"
//           className="w-full h-80 object-cover shadow-lg transition-transform transform hover:scale-105 duration-300"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-6 text-center  shadow-lg">
//           <h1
//             className="text-5xl sm:text-6xl font-extrabold mb-4 text-shadow text-white animate__animated animate__fadeIn"
//             data-aos="fade-left"
//           >
//             Our Products
//           </h1>
//           <p
//             className="text-lg sm:text-xl font-light max-w-3xl opacity-90"
//             data-aos="fade-right"
//           >
//             Discover our range of premium water solutions designed to cater to
//             your diverse needs. From purified drinking water to specialized
//             filtration systems, our products are crafted to deliver health and
//             convenience with the highest quality standards.
//           </p>
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div className="sm:px-36 h-full relative grid grid-cols-1 md:grid-cols-3 gap-8 sm:py-16">
//         {productsCard.map((card, index) => (
//           <div
//             key={index}
//             data-aos='fade-up'
//             className="group flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//           >
//             {/* Product Image */}
//             <div className="overflow-hidden">
//               <img
//                 src={card.image}
//                 alt={card.heading}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//               />
//             </div>
//             {/* Product Details */}
//             <div className="flex flex-col flex-grow p-6">
//               <h3 className="text-xl font-bold mb-2 text-gray-800">
//                 {card.heading}
//               </h3>
//               <p className="text-gray-600 mb-4">{card.desc}</p>
//               <p className="text-gray-500 font-light text-sm mb-6">
//                 <span className="font-bold text-xl">{card.brandName}</span>
//               </p>
//               <div className="text-left">
//                 <button className="forDemo" onClick={() => navigate('/water-ionizer/b9')}>
//                   {card.btn}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//     </>
//   );
// }

// export default Products;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Products.css';
import { useNavigate } from 'react-router-dom';

function Products() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const productsCard = [
    {
      image: 'Ionozer 2.png',
      heading: 'Bieng Healthy Water Ionizer',
      desc: 'The Latest Generation Hydrogen Generator from the house of CREWELTER with never-before advantages and health promise! Blending world-class technology with the best product design, the all-new Being Healthy Hydrogen Generator will give you a set of health benefits that are truly amazing! Fitted with the latest features and a truly world-class design, the wonder water source will change the way we consume water and bring about a never-before healthy change.',
      brandName: 'BH-9000',
      btn: 'Add To Cart',
      route: '/water-ionizer/bhninethousand', // Add dynamic route for each product
    },
    {
      image: '/BH-4000Update.png',
      heading: 'Being Healthy BH-4000 Hydrogen Genrator',
      desc: 'The Nano Bubble Hydrogen Generator! Being Healthy advanced technology embedded with PEM and titanium platinum plates to generate high-quality hydrogen water, which is odourless, magnesium (Mg)- free and ozone-free, without requiring a water storage tank.',
      brandName: 'BH-4000',
      btn: 'Add To Cart',
      route: '/water-ionizer/bhfourthousand', // Dynamic route for second product
    },
    // {
    //   image: '/3000.jpg',
    //   heading: 'Being Healthy Hydrogen Genrator',
    //   desc: 'Built from world - class technology integrated with most efficient product design for convenience and ease, Mediqua BH- 3000 has Dual filtration with ultra fine and Multi Carbon filters to produce only the best. Induct to the latest features and unbelievable outcome of Alkaline water Ionizers.',
    //   brandName: 'BH-3000',
    //   btn: 'Add To Cart',
    //   route: '/water-ionizer/akthreethousand', // Dynamic route for second product
    // },
    {
      image: '/bh-2000Update.png',
      heading: 'Being Healthy Water Ionizer',
      desc: 'design, the all-new BH-2000 will give you a set of health benefits which are truly amazing! Fitted in with latest features and truly world-class design, the wonder water source will change the way we consume water and bring about a never before!',
      brandName: 'BH-2000',
      btn: 'Add To Cart',
      route: '/water-ionizer/bhtwothousand', // Dynamic route for third product
    },
    {
      image: '/null.webp',
      heading: 'Being Healthy Undersink Faucet',
      desc: 'Being Healthy, Korea is one of the pioneers of the industry! The under sink faucet is compact and provides the best quality of alkaline ionized water. ',
      brandName: 'Faucet (optional)',
      btn: 'Add To Cart',
      route: '/water-ionizer/faucet', // Dynamic route for fourth product
    },
    {
      image: '/richCup.jpg',
      heading: 'Being Healthy Hydrogen Water Bottle',
      desc: 'Experience the ultimate hydration solution with our Hydrogen Water Bottle, designed to enrich your water with up to 1500 ppb of molecular hydrogen for powerful antioxidant benefits.',
      brandName: 'Hydrogen Water Bottle',
      btn: 'Add To Cart',
      route: '/water-ionizer/hydrogenwater', // Dynamic route for fifth product
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="mb-10 relative">
        <img
          src="/productheadingimg.jpg"
          alt="Glass of Water"
          className="w-full h-80 object-cover shadow-lg transition-transform transform hover:scale-105 duration-300"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-6 text-center  shadow-lg">
          <h1
            className="text-5xl sm:text-6xl font-extrabold mb-4 text-shadow text-white animate__animated animate__fadeIn"
            data-aos="fade-left"
          >
            Our Products
          </h1>
          <p
            className="text-lg sm:text-xl font-light max-w-3xl opacity-90"
            data-aos="fade-right"
          >
            Discover our range of premium water solutions designed to cater to
            your diverse needs. From purified drinking water to specialized
            filtration systems, our products are crafted to deliver health and
            convenience with the highest quality standards.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="sm:px-36 h-full relative grid grid-cols-1 md:grid-cols-3 gap-8 sm:py-16">
        {productsCard.map((card, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="group flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="overflow-hidden">
              <img
                src={card.image}
                alt={card.heading}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            {/* Product Details */}
            <div className="flex flex-col flex-grow p-6">
            <p className="text-black font-light text-sm mb-6">
                <span className="font-bold text-xl">{card.brandName}</span>
              </p>
              <h3 className="text-xl font-bold mb-2 text-gray-500">
                {card.heading}
              </h3>
              <p className="text-gray-600 mb-4">{card.desc}</p>
              <div className="text-left">
                <button
                  className="forDemo"
                  onClick={() => navigate(card.route)} // Use dynamic route from card object
                >
                  {card.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
