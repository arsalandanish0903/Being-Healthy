import React from 'react'

function OrderButtonMsg({productName}) {
  // Predefined message
  const message = `What is the price of this ${productName}?`;

  // WhatsApp link with pre-filled message
  const whatsappLink = `https://wa.me/919372414035?text=${encodeURIComponent(message)}`;

  return (
      <a
          href={whatsappLink}
          className="px-4 py-2 bg-[#1ca3ec] text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // For security reasons
      >
          Order Now
      </a>
  );
}

export default OrderButtonMsg