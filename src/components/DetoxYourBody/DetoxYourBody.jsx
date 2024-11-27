import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function DetoxYourBody() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Easing function for smooth animations
            once: true, // Only animate elements once when scrolling
        });
    }, []);

    return (
        <div className='relative sm:px-12 lg:px-36 sm:py-12 lg:py-24 container mx-auto'>
            <div className='border border-gray-200 shadow-md rounded-md p-14'>
                <div className='text-center mb-12' data-aos="fade-up">
                    <h1 className='font-extrabold text-3xl sm:text-4xl text-[#65cef5]'>
                        Water in the Human Body
                    </h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='relative' data-aos="zoom-in">
                        <img
                            src="../../../public/mineral-water-in-qatar-1.png"
                            alt="Water in the body"
                            className='w-full object-cover h-full rounded-xl shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105'
                        />
                    </div>
                    <div className='flex flex-col justify-center space-y-6' data-aos="fade-up">
                        <p className='text-lg sm:text-xl text-gray-700 '>
                            Water is essential for the proper functioning of the human body, making up about 60% of an adult's body weight. It plays a vital role in maintaining various bodily functions, including regulating body temperature, transporting nutrients and oxygen, and removing waste products. Water is also crucial for joint lubrication, digestion, and cellular function, ensuring that organs, tissues, and cells can operate efficiently.
                        </p>
                        <p className='text-lg sm:text-xl text-gray-700 '>
                            To stay healthy, it is recommended to drink plenty of water daily, as hydration is key to overall well-being. Proper hydration improves concentration, boosts energy levels, and supports a healthy digestive system, skin, and kidneys.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DetoxYourBody;
