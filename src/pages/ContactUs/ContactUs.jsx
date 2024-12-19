import React, { useEffect } from "react";
import "./ContactUs.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  const focusFunc = (e) => {
    const parent = e.target.parentNode;
    parent.classList.add("focus");
  };

  const blurFunc = (e) => {
    const parent = e.target.parentNode;
    if (e.target.value === "") {
      parent.classList.remove("focus");
    }
  };

  return (
    <>
      <div className="mb-10 relative">
        <img
          src="getintouch.jpg"
          alt="Glass of Water"
          className="w-full h-80 object-cover shadow-lg transition-transform transform hover:scale-105 duration-300"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-6 text-center shadow-lg">
          <h1
            className="text-5xl sm:text-6xl font-extrabold mb-4 text-shadow text-white animate__animated animate__fadeIn"
            data-aos="fade-left"
          >
            Get In Touch
          </h1>
          <p
            className="text-lg sm:text-xl font-light max-w-3xl opacity-90"
            data-aos="fade-right"
          >
            We’re love to assist with
            your enquiry!
          </p>
        </div>
      </div>
      <div className="text-center">
      <span className="mt-8">Visit Our Website: <a href="#" className="text-blue-600 text-lg">www.thebeinghealthy.com</a></span>
      </div>
      <div className="contactContainer">
        <span className="big-circle"></span>
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Have questions or need assistance? We’re here to help! Reach out to us for any inquiries, collaborations, or feedback. Let’s connect and make a positive impact together.
            </p>

            <div className="info space-y-4">
              <div className="flex items-center space-x-5">
                <FaMapMarkerAlt className="text-2xl text-[#1CA3EC]" />
                <p className="text-gray-700 text-sm">Trinity Innovative Technology, Pochkhanawala Road, Worli, Mumbai 400030</p>
              </div>
              <div className="flex items-center space-x-3">
                <MdEmail className="text-2xl text-[#1CA3EC]" />
                <p className="text-gray-700 text-sm">enquiry@thebeinghealthy.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-2xl text-[#1CA3EC]" />
                <p className="text-gray-700 text-sm">8888832676</p>
              </div>
            </div>


            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaWhatsapp />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                {/* <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a> */}
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form  autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className="input"
                  onFocus={focusFunc}
                  onBlur={blurFunc}
                />
                <label>Full Name</label>
                <span>Full Name</span>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  className="input"
                  onFocus={focusFunc}
                  onBlur={blurFunc}
                />
                <label>Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  onFocus={focusFunc}
                  onBlur={blurFunc}
                />
                <label>Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="input"
                  onFocus={focusFunc}
                  onBlur={blurFunc}
                ></textarea>
                <label>Message</label>
                <span>Message</span>
              </div>
              <div className="text-left">
              <button class="contactSendMessageBtn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
