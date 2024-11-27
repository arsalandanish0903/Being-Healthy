import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AutoSlider.css'

const AutoSlider = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    const cards = [
        {
            title: "Hydrogen Water",
            description: "These have attracted worldly attention because they contain elements that are different from ordinary water. Many TV stations and Media all over the world had previously covered...",
            image: "../../../public/service-v2-4.jpg", // Replace with your image URL
        },
        {
            title: "Dibaties",
            description: "Diabetes is a chronic disease that occurs when the Pancreas is no longer able to make insulin, or when the body cannot make good use of the insulin it produces. Insulin is a hormone made by the...",
            image: "../../../public/service-v2-1.jpg", // Replace with your image URL
        },
        {
            title: "Atherosclerosis",
            description: "Atherosclerosis develops gradually, typically begins in early adolescence, and is usually found in most major arteries. There are usually no atherosclerosis symptoms...",
            image: "../../../public/service-v2-3.jpg", // Replace with your image URL
        },
        {
            title: "Hydrogen Water",
            description: "These have attracted worldly attention because they contain elements that are different from ordinary water. Many TV stations and Media all over the world had previously covered...",
            image: "../../../public/service-v2-4.jpg", // Replace with your image URL
        },
        {
            title: "Dibaties",
            description: "Diabetes is a chronic disease that occurs when the Pancreas is no longer able to make insulin, or when the body cannot make good use of the insulin it produces. Insulin is a hormone made by the...",
            image: "../../../public/service-v2-1.jpg", // Replace with your image URL
        },
    ];

    return (
        <div className="w-full overflow-hidden">
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={false}
                autoplay={{ delay: 3000 }}
                // pagination={{ clickable: true }}
                // navigation={true}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div data-aos='fade-up' className="p-4 border rounded-lg shadow-md bg-white h-[450px] flex flex-col">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-[200px] object-cover rounded-t-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2 text-black">{card.title}</h3>
                            <p className="text-gray-600">{card.description}</p>
                            <div>
                                <button className="forDemo">Read More..</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default AutoSlider;
