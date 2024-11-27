import React, { useState, useEffect } from "react";
import "./BhNine.css";
import { FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
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
        "/public/Being Healthy BH-9 Plus3.png"
    );

    const thumbnailImages = [
        "/public/Being Healthy BH-9 Plus3.png",
        "../../../../public/IMG-20241126-WA0007-removebg-preview.png",
        "../../../../public/Ionozer 2.png",
    ];

    return (
        <div className="sm:px-8 lg:px-36 container mx-auto py-8 lg:py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section: Cart Details */}
            <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
                <h2 className="text-3xl font-bold text-gray-800" data-aos='fade-left'>Product Details</h2>
                <div className="flex justify-between items-center">
                    <button className="px-4 py-2 bg-[#1ca3ec] text-white font-semibold rounded-lg">
                        ₹3,25,000.00
                    </button>
                    <span data-aos='fade-right' className="flex gap-2 text-[#1ca3ec]"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                </div>
                <h1 className="font-bold text-2xl text-gray-900" data-aos='fade-left'>
                    Being Health Water Ionizer
                </h1>
                <p className="text-gray-600 leading-relaxed" data-aos='fade-right'>
                    Built from world-class technology integrated with the most efficient
                    product design for convenience and ease, Being Health BH-9 Plus has
                    dual filtration with ultra-fine and multi-carbon filters to produce
                    only the best. Indulge in the latest features and the unbelievable
                    outcome of alkaline water ionizers.
                </p>
                <ul className="space-y-2 text-gray-700" data-aos='fade-down'>
                    <li className="flex items-center">
                        <span className="font-semibold">Brand:</span>
                        <span className="ml-2">Being Health</span>
                    </li>
                    <li className="flex items-center">
                        <span className="font-semibold">Name of Product:</span>
                        <span className="ml-2">Water Ionizer</span>
                    </li>
                    <li className="flex items-center">
                        <span className="font-semibold">Model:</span>
                        <span className="ml-2">BH-9 Plus - 9 Plates (White)</span>
                    </li>
                    <li className="flex items-center">
                        <span className="font-semibold">Country of Origin:</span>
                        <span className="ml-2">South Korea</span>
                    </li>
                </ul>
                <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg" data-aos='fade-right'>
                    {/* Quantity Input */}
                    <input
                        type="number"
                        className="w-24 border focus:outline-none border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                        value={quantity}
                        min="1"
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    {/* Model Dropdown */}
                    <select
                        id="modelNo"
                        className="flex-grow border focus:outline-none border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select a model</option>
                        <option value="model1">Model 1</option>
                        <option value="model2">Model 2</option>
                        <option value="model3">Model 3</option>
                    </select>
                    {/* Add to Cart Button */}
                    <button className="px-4 py-2 bg-[#1ca3ec] text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                        Add To Cart
                    </button>
                </div>
            </div>

            {/* Right Section: Product Image Slider */}
            <div className="bg-white shadow-lg rounded-lg p-6" data-aos='fade-right'>
                {/* Main Image Display */}
                <div className="rounded-lg overflow-hidden mb-4">
                    <img
                        src={mainImage}
                        alt="Main Product"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Thumbnail Images */}
                <div className="grid lg:grid-cols-3 gap-4">
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
                </div>
            </div>
        </div>
    );
}

export default BhNine;
