import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Products.css'
import { useNavigate } from 'react-router-dom';
function Products() {
  const navigate = useNavigate()
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  const productsCard = [
    {
      image: '/public/IMG-20241126-WA0007-removebg-preview.png',
      heading: 'Bieng Healthy Water Ionizer',
      desc: 'Advanced water ionization.',
      brandName: 'BH-9',
      btn: 'Add To Cart'
    },
    {
      image: '/public/Being Healthy BH-9 Plus3.png',
      heading: 'Bieng Healthy Water Ionizer',
      desc: 'Premium model with enhanced filtration system.',
      brandName: 'BH-9 Plus',
      btn: 'Add To Cart'
    },
    {
      image: '/public/Ionozer 2.png',
      heading: 'Bieng Healthy Water Ionizer',
      desc: 'Compact and efficient for everyday use.',
      brandName: 'BH-9',
      btn: 'Add To Cart'
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
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-6 text-center rounded-xl shadow-lg">
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
            data-aos='fade-up'
            className="group flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="overflow-hidden">
              <img
                src={card.image}
                alt={card.heading}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            {/* Product Details */}
            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {card.heading}
              </h3>
              <p className="text-gray-600 mb-4">{card.desc}</p>
              <p className="text-gray-500 font-light text-sm mb-6">
                <span className="font-bold text-xl">{card.brandName}</span>
              </p>
              <div className="text-center">
                <button className="forDemo" onClick={() => navigate('/water-ionizer/b9')}>
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
