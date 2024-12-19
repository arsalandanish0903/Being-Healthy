import React, { useState, useEffect } from "react";
import "./BhNine.css";
import { FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import OrderButtonMsg from "../../../components/OrderButtonMsg/OrderButtonMsg";
function BhNine() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(
        "/Being Healthy BH-9 Plus3.png"
    );

    // const thumbnailImages = [
    //     "/Being Healthy BH-9 Plus3.png",
    //     "/IMG-20241126-WA0007-removebg-preview.png",
    //     "/Ionozer 2.png",
    // ];

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
                    Being Healthy Hydrogen Genrator
                </h1>
                {/* <p className="text-gray-600 leading-relaxed" data-aos="fade-right">
                    Built from world-class technology integrated with the most efficient
                    product design for convenience and ease, Being Healthy BH-9 Plus has
                    dual filtration with ultra-fine and multi-carbon filters to produce
                    only the best. Indulge in the latest features and the unbelievable
                    outcome of alkaline water ionizers.
                </p> */}
                <h1 className="font-bold text-4xl text-gray-900" data-aos='fade-left'>
                    Characteristics & Specifications
                </h1>
                <ul className="list-disc ml-6 text-gray-600">
                    <li>World's 1st EEC Advanced Technology <strong>(Energy Enhance Chip in built)</strong></li>
                    <li>Available in two convenient models: Counter Top & Under Sink (With Faucet)</li>
                    <li>Incredible pH ranges 3.0 to 11.5</li>
                    <li>Up to -850mv ORP</li>
                    <li>Up to 1800ppb Dissolved Hydrogen levels</li>
                    <li>Front Sliding Door System</li>
                    <li>9 platinum coated titanium plates</li>
                    <li>UV light technology</li>
                    <li>Ergonomic Design</li>
                    <li>Ultra Filtration (1st) & Multi Carbon Filtration (2nd) System</li>
                    <li>Easy Scaling System with Cleaning filter</li>
                    <li>RFID function - Wireless filter indication system</li>
                    <li>7-inch big Screen</li>
                    <li>Select your favourite language - 5 Language Voices</li>
                    <li>400 Programmable pH and ORP levels</li>
                    <li>Automatic Cleaning System</li>
                </ul>

                <ul className="space-y-2 text-black" data-aos='fade-down'>
                    <li className="flex items-center">
                        <span className="font-semibold">Brand:</span>
                        <span className="ml-2">Being Healthy</span>
                    </li>
                    <li className="flex items-center">
                        <span className="font-semibold">Name of Product:</span>
                        <span className="ml-2">Hydrogen Genrator</span>
                    </li>
                    <li className="flex items-center">
                        <span className="font-semibold">Model:</span>
                        <span className="ml-2">BH-9000</span>
                    </li>
                    <li className="flex items-center">
                        <span className="font-semibold">Country of Origin:</span>
                        <span className="ml-2">South Korea</span>
                    </li>
                </ul>
                <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg">

                    {/* Add to Cart Button */}
                    {/* <Link to='/order' className="px-4 py-2 bg-[#1ca3ec] text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                        Order Now
                    </Link> */}
                    <OrderButtonMsg productName='BH-9000'/>
                </div>
            </div>

            {/* Right Section: Product Image Slider */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center flex-col justify-center" data-aos='fade-right'>
                {/* Main Image Display */}
                <h1 className="font-bold text-4xl bg-black text-[#1ca3ec] p-4 rounded-md">BH-9000</h1>
                <div className="rounded-lg overflow-hidden mb-4 mt-16">
                    <img
                        src={mainImage}
                        alt="Main Product"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Thumbnail Images */}
                {/* <div className="grid lg:grid-cols-3 gap-4">
                    {thumbnailImages.map((image, index) => (
                        <button
                            key={index}
                            className="rounded-lg overflow-hidden focus:outline-none hover:scale-105 transition-transform"
                            onClick={() => setMainImage(image)}
                        >
                            <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-28 h-20 object-cover"
                            />
                        </button>
                    ))}
                </div> */}
            </div>
        </div>
    );
}

export default BhNine;
