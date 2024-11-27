import React, { useEffect } from "react";
import './WaterCard.css'
import Typed from "typed.js";
import AutoSlider from "../AutoSlider/AutoSlider";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Ocean = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Easing function for smooth animations
            once: true, // Only animate elements once when scrolling
        });
        // Initialize the typing effect when the component mounts
        const typing = new Typed(".text", {
            strings: ["Catalyst", "Carrier", "Solvent", "Nutrient", "Facilitator"],
            typeSpeed: 100,
            backSpeed: 40,
            loop: true,
        });

        // Cleanup on unmount
        return () => {
            typing.destroy();
        };
    }, []);
    return (
        <div className="h-screen container mx-auto bg-[#1ca3ec] sm:px-12 lg:px-36 py-8 sm:py-12 lg:py-24 flex flex-col sm:flex-col lg:flex-row items-center justify-center gap-8 overflow-hidden">
            <div data-aos='fade-down' className="sm:px-36 bg-transparent  bg-opacity-10 sm:py-8  shadow-lg">
                <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-white uppercase">
                        Water Is
                    </div>
                    <div className="text sm:text-4xl text-xl font-bold text-white italic animate-pulse">
                        Life
                    </div>
                </div>
            </div>
            <AutoSlider />
        </div>


    );
};

export default Ocean;
