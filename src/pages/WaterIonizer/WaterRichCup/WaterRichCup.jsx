import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import OrderButtonMsg from "../../../components/OrderButtonMsg/OrderButtonMsg";
function WaterRichCup() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(
        "/richCup.jpg"
    );



    return (
        <div className="sm:px-8 lg:px-36 container mx-auto py-8 lg:py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section: Cart Details */}
            <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
                <h2 className="text-3xl font-bold text-gray-800" data-aos='fade-left'>Product Details</h2>
                <div className="flex justify-between items-center">
                    {/* <button className="px-4 py-2 bg-[#1ca3ec] text-white font-semibold rounded-lg">
                        ₹3,25,000.00
                    </button> */}
                    <span data-aos='fade-right' className="flex gap-2 text-[#1ca3ec]"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                </div>
                <h1 className="font-bold text-xl text-gray-900" data-aos='fade-left'>
                    Being Healthy Water Hydrogen Bottle
                </h1>
                <h1 className="font-bold text-4xl text-gray-900" data-aos='fade-left'>Characteristics & Specializations</h1>
                <ul className="list-disc ml-6 text-gray-600">
                    <li>Produces hydrogen-rich water with high concentration up to 1500 ppb</li>
                    <li>Portable and lightweight design for easy carrying</li>
                    <li>Advanced electrolysis technology for efficient hydrogen generation</li>
                    <li>Quick operation, generates hydrogen in 3–5 minutes</li>
                    <li>Made with BPA-free Tritan plastic and stainless steel for durability</li>
                    <li>Rechargeable via USB with long-lasting battery life</li>
                    <li>Built-in self-cleaning functionality for hygiene and convenience</li>
                    <li>Offers antioxidant properties to combat oxidative stress</li>
                    <li>Improves hydration and supports detoxification</li>
                    <li>Sleek and modern design suitable for home, office, or travel</li>
                    <li>Capacity: 500 ml / 16.9 oz for adequate hydration needs</li>
                    <li>Environmentally friendly, reusable, and safe for daily use</li>
                </ul>

                <ul className="space-y-2 text-gray-700" data-aos='fade-down'>
                    <li className="flex items-center">
                        <span className="font-semibold">Brand:</span>
                        <span className="ml-2">Being Healthy</span>
                    </li>
                    <li className="flex items-center">
                        <span className="font-semibold">Name of Product:</span>
                        <span className="ml-2">Water Hydrogen Bottle</span>
                    </li>
                    <li className="flex items-center">
                        <span className="font-semibold">Model:</span>
                        <span className="ml-2">Hydrogen Water</span>
                    </li>
                    <li className="flex items-center">
                        <span className="font-semibold">Country of Origin:</span>
                        <span className="ml-2">South Korea</span>
                    </li>
                </ul>
                <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg" data-aos='fade-right'>

                    {/* Add to Cart Button */}
                    {/* <Link to='/order' className="px-4 py-2 bg-[#1ca3ec] text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                        Order Now
                    </Link> */}
                    <OrderButtonMsg productName='Water Hydrogen Bottle'/>
                </div>
            </div>

            {/* Right Section: Product Image Slider */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center flex-col justify-center" data-aos='fade-right'>

                <h1 className="font-bold text-4xl bg-black text-[#1ca3ec] p-4 rounded-md">Hydrogen Water</h1>
                <div className="rounded-lg overflow-hidden mb-4 mt-16">
                    <img
                        src={mainImage}
                        alt="Main Product"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default WaterRichCup;
