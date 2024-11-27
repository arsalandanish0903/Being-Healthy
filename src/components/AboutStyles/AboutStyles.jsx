import React, {useEffect} from 'react';
import { IoShieldCheckmark } from "react-icons/io5";
import { FaMedal } from "react-icons/fa";
import './AboutStyles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutStyles() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden">
                {/* Image Section */}
                <div className="relative overflow-hidden rounded-lg shadow-lg" data-aos='fade-left'>
                    <img 
                        src="/about-style2-bg.jpg" 
                        alt="Dehydration Illustration" 
                        className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                </div>

                {/* Content Section */}
                <div className="space-y-6" data-aos='fade-right'>
                    {/* Header Section */}
                    <div className="flex items-center gap-4">
                        <IoShieldCheckmark className="text-4xl text-blue-500" />
                        <h1 className="text-2xl font-bold text-gray-800">Dehydration</h1>
                    </div>

                    {/* Paragraph Section */}
                    <p className="text-gray-600 leading-relaxed">
                        Dehydration can have adverse effects on the body over the long run. When you feel thirsty, it’s a sign of dehydration. That’s why having a portable hydrogen water bottle is a smart way to stay hydrated whether at work, in the gym, or wherever you go. 
                        Moreover, we are often advised to drink eight glasses of water a day. While drinking plain water can be refreshing, scientific research shows that simple water can be upgraded to provide even more health benefits. One of these discoveries is hydrogen water.
                    </p>

                    {/* Call-to-Action */}
                    <button className='learnMore'>Learn More</button>
                </div>

                {/* Second Content Section */}
                <div className="space-y-6" data-aos='fade-left'>
                    {/* Header Section */}
                    <div className="flex items-center gap-4">
                        <FaMedal className="text-4xl text-blue-500" />
                        <h1 className="text-2xl font-bold text-gray-800">High Hydrogen Concentration</h1>
                    </div>

                    {/* Paragraph Section */}
                    <p className="text-gray-600 leading-relaxed">
                        High Hydrogen Concentration, just add Water. There are no known side effects in ingesting molecular hydrogen. Furthermore, a high concentration of hydrogen is not toxic. You too can enjoy the benefits of hydrogenated water with the DonyiPolo Hydrogen bottle. All you have to do is add water and turn on the power button to start the hydrogen generation process, which lasts for 3 minutes. The bottle is designed with tested technology to produce and retain concentrated hydrogen water to as much as 1,200 parts per billion.
                    </p>

                    {/* Call-to-Action */}
                    <button className='learnMore'>Learn More</button>
                </div>

                {/* Second Image Section */}
                <div className="relative overflow-hidden rounded-lg shadow-lg" data-aos='fade-right'>
                    <img 
                        src="/about-style2-bg.jpg" 
                        alt="High Hydrogen Concentration Illustration" 
                        className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutStyles;
