import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import OrderButtonMsg from "../../../components/OrderButtonMsg/OrderButtonMsg";
function AkTwoThousand() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(
        "/bh-2000Update.png"
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
                <h1 className="font-bold text-4xl text-gray-900" data-aos='fade-left'>Characteristics & Specifications</h1>
                <ul className="list-disc ml-6 text-gray-600">
                    <li>World's 1st EEC Advanced Technology <strong>(Energy Enhance Chip in built)</strong></li>
                    <li>7 / 9 cell electrodes (Titanium Coated Platinum coated)</li>
                    <li>UV light technology</li>
                    <li>Automatic Filter Indication</li>
                    <li>Convenient voice automated</li>
                    <li>LCD Display</li>
                    <li>Enhanced 2 step dual filtration system</li>
                    <li>Incredible pH range from 3.0 to 11 (+ 0.5 )</li>
                    <li>Automatic cleaning system & much more</li>
                    <li>ORP: -1250 mv</li>
                    <li>pH Range : 2.5 ~ 11.5</li>
                    <li>Hydrogen Levels: 1800 ppb</li>
                    <li>Filters: Dual (UF & MCF)</li>
                    <li>Dimensions : 35.0 x 35.0 x 15.0 cm</li>
                    <li>Warranty - Machine 1 year | Plates 5 years</li>
                    <li>Made in Korea</li>
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
                        <span className="ml-2">BH-2000</span>
                    </li>
                    <li className="flex items-center">
                        <span className="font-semibold">Country of Origin:</span>
                        <span className="ml-2">South Korea</span>
                    </li>
                </ul>
                <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg">
                    {/* <Link to='/order' className="px-4 py-2 bg-[#1ca3ec] text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                        Order Now
                    </Link> */}
                    <OrderButtonMsg productName='BH-2000'/>
                </div>
            </div>

            {/* Right Section: Product Image Slider */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center flex-col justify-center" data-aos='fade-right'>
                <h1 className="font-bold text-4xl bg-black text-[#1ca3ec] p-4 rounded-md">BH-2000</h1>
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

export default AkTwoThousand;
