import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Cirtificate() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Easing function for smooth animations
            once: true, // Only animate elements once when scrolling
        });
    }, [])
    const certificateSlider = [
        { img: '/ionizer-legal_Page_12.jpg' },
        { img: '/ionizer-legal_Page_16.jpg' },
        { img: '/ionizer-legal_Page_19.jpg' },
        { img: '/ionizer-legal_Page_22.jpg' },
        { img: '/ionizer-legal_Page_26.jpg' },
        { img: '/ionizer-legal_Page_27.jpg' },
        { img: '/ionizer-legal_Page_28.jpg' },
        { img: '/ionizer-legal_Page_29.jpg' },
        { img: '/ionizer-legal_Page_30.jpg' },
        { img: '/ionizer-legal_Page_32.jpg' },
        { img: '/ionizer-legal_Page_33.jpg' },
        { img: '/ionizer-legal_Page_35.jpg' },
    ];

    return (
        <div className="container mx-auto  sm:px-12 lg:px-36 sm:py-12 lg:py-24 overflow-hidden">
            {/* Header Section */}
            <div className="text-center" data-aos='fade-down'>
                <h1 className="text-xl uppercase text-[#1ca3ec] font-bold my-4">Certificates</h1>
                <p className="text-3xl font-bold leading-10">
                    These are the Certification<br />
                    for Being Healthy Water Ionizer
                </p>
            </div>

            {/* Slider Section */}
            <div className="relative my-16">
                <Swiper
                    slidesPerView={1} // Default for small screens
                    spaceBetween={16} // Space between slides
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }, // Show 3 cards in one row for larger screens
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Navigation]}
                    className="swiper-container"
                >
                    {certificateSlider.map((card, index) => (
  <SwiperSlide key={index} className="flex justify-center">
    <div 
      data-aos="fade-up" 
      className="rounded-lg overflow-hidden shadow-lg w-full max-w-xs flex items-center justify-center"
    >
      <img
        src={card.img}
        alt={`Certificate ${index + 1}`}
        className="w-full h-full object-cover sm:w-auto sm:h-auto sm:max-w-xs"
      />
    </div>
  </SwiperSlide>
))}

                </Swiper>

                {/* Custom Styling for Pagination Dots */}
                <style jsx>{`
                    .swiper-container {
                        padding-bottom: 2rem; /* Add space for the dots */
                    }
                    .swiper-pagination {
                        position: relative;
                        bottom: -20px;
                    }
                        .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal{
                        bottom: -20px;
                        }
                `}</style>
            </div>
        </div>
    );
}

export default Cirtificate;
