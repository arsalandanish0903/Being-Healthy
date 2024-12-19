import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AutoSlider.css";

const AutoSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const cards = [
    {
      title: "Hydrogen Water",
      description:
        "These have attracted worldly attention because they contain elements that are different from ordinary water. Many TV stations and Media all over the world had previously covered...",
      image: "/hydrogenMilkish.webp",
      cardDescription: 'Hydrogen water, enriched with molecular hydrogen (H₂), is emerging as a groundbreaking addition to the health and wellness space. Unlike regular water, hydrogen water contains dissolved hydrogen gas, a powerful antioxidant that can help combat oxidative stress and inflammation in the body. This unique characteristic makes it a highly sought-after solution for improving health and enhancing daily vitality. Hydrogen water is created by infusing molecular hydrogen into water, either through an electrolysis process or by dissolving hydrogen tablets. This process ensures that the water retains its beneficial properties, making it an easy and effective way to promote wellness. '
    },
    {
      title: "Diabetes",
      description:
        "Diabetes is a chronic disease that occurs when the Pancreas is no longer able to make insulin, or when the body cannot make good use of the insulin it produces. Insulin is a hormone made by the...",
      image: "/diabetes-symptoms-and-treatment.jpg",
      cardDescription: 'Diabetes is a long-term (chronic) disease that affects how your body processes glucose (sugar), the primary energy source for cells. It occurs when the pancreas cannot produce enough insulin or when the body becomes resistant to insulin’s effects. Insulin is a vital hormone that regulates blood sugar levels, ensuring they remain balanced. Without proper insulin function, glucose builds up in the bloodstream, leading to a range of health complications. This is an autoimmune condition where the immune system attacks and destroys insulin-producing beta cells in the pancreas. It is usually diagnosed in childhood or adolescence, but it can occur at any age. Individuals with Type 1 diabetes require daily insulin injections to manage their blood sugar levels. This type is more common and is often linked to lifestyle factors such as obesity, poor diet, and lack of physical activity. The body either does not produce enough insulin or becomes resistant to it. Type 2 diabetes can often be managed with lifestyle changes, oral medications, or insulin therapy.'
    },
    {
      title: "Atherosclerosis",
      description:
        "Atherosclerosis develops gradually, typically begins in early adolescence, and is usually found in most major arteries. There are usually no atherosclerosis symptoms...",
      image: "/ATHEROSCLEROSIS.jpg",
      cardDescription: 'Atherosclerosis is a chronic and progressive disease that affects the arteries. It occurs when fatty deposits, cholesterol, cellular waste, and other substances build up on the walls of the arteries, forming plaques. This process can begin as early as adolescence and gradually worsen over time. Atherosclerosis often remains unnoticed until it significantly narrows or blocks the arteries, leading to serious health problems. The development of atherosclerosis is a slow process that can span decades. It typically starts with damage to the endothelium, the thin layer of cells lining the blood vessels. This damage can be caused by: High blood pressure. High levels of cholesterol, particularly LDL (low-density lipoprotein) cholesterol. Smoking or exposure to tobacco smoke. High levels of sugar in the blood (due to diabetes or insulin resistance). Inflammation caused by other conditions, such as infections or autoimmune diseases. When the endothelium is damaged, cholesterol and other particles begin to accumulate in the artery wall. Over time, the body attempts to repair this damage, leading to the formation of plaques composed of fat, cholesterol, calcium, and cellular debris. These plaques can harden and narrow the arteries, restricting blood flow.'
    },
  ];

  const openModal = (card) => {
    setActiveCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveCard(null);
  };

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={false}
        autoplay={{ delay: 3000 }}
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
            <div
              data-aos="fade-up"
              className="p-4 border rounded-lg shadow-md bg-white h-[500px] flex flex-col"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[200px] object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-black">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
              <div>
                <button
                  className="forDemo"
                  onClick={() => openModal(card)}
                >
                  Read More...
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {isModalOpen && activeCard && (
        <div className="absolute overflow-scroll inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] md:w-[50%]">
            <button
              className="text-gray-500 hover:text-gray-800 float-right text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={activeCard.image}
              alt={activeCard.title}
              className="w-full h-full object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {activeCard.title}
            </h2>
            <p className="text-gray-600">{activeCard.cardDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoSlider;
