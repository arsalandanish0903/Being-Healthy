import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Technology() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center">
        <img
          src="/technology.png"
          alt="Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="absolute text-center text-white px-4"
          data-aos="fade-up"
        >
          <h1 className="text-3xl md:text-5xl font-bold">Technology</h1>
        </div>
      </div>

      {/* pH and ORP Section */}
      <div className="w-full px-6 py-8 md:px-36 md:py-16">
        <h1
          className="text-center font-bold text-4xl mb-12"
          data-aos="fade-up"
        >
          What are pH and ORP?
        </h1>
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-8">
          <div data-aos="fade-right">
            <p className="text-md mb-4">
              The <strong>pH scale</strong> measures how acidic or alkaline a substance is. It
              ranges from 0 to 14. A pH of 7 is neutral, a pH less than 7 is
              acidic, and a pH greater than 7 is alkaline (or basic).
            </p>
            <p className="text-md mb-4">
              <strong>ORP</strong>, or oxidation-reduction potential, measures a substance's
              ability to oxidize or reduce molecules around it, or in other
              words, its potential to steal or donate electrons.
            </p>
            <p className="text-md mb-2">
              <strong>pH</strong> and <strong>ORP</strong> are key concepts to understand ionization and the
              important health benefits of alkaline ionized water.
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="flex justify-center items-center"
          >
            <img
              src="/phscale.webp"
              alt="pH Scale"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* How an Ionizer Works */}
      <div className="w-full px-6 py-8 md:px-36 md:py-16 bg-gray-100">
        <h1
          className="text-center font-bold text-4xl mb-12"
          data-aos="fade-up"
        >
          How An Ionizer Works
        </h1>
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-8">
          <div data-aos="fade-right">
            <p className="text-md mb-4">
              A <strong>Water Ionizer</strong> is a small kitchen appliance that separates tap
              water into two separate streams - one alkaline and one acidic -
              through a process called electrolysis.
            </p>
            <p className="text-md">
              An <strong>ionizer</strong> is connected to a home’s water supply either through a
              diverter valve installed on the kitchen faucet or directly through
              a <strong>T-adapter</strong> connected to the cold water line under the sink.
            </p>
          </div>
          <div data-aos="fade-left">
            <img
              src="/howionizerwork.png"
              alt="How Ionizer Works"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Water Ionization Process */}
      <div className="w-full px-6 py-8 md:px-36 md:py-16">
        <h1
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          data-aos="fade-up"
        >
          Water Ionization Process
        </h1>

        <div data-aos="fade-right" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">STEP 1: FILTRATION</h2>
          <p className="text-gray-700">
            Water enters the ionizer through an inlet port at the bottom of the
            unit and is first filtered to remove common pollutants, particulate
            matter, chlorine, odor, and organic matter present in tap water.
          </p>
        </div>

        <div data-aos="fade-left" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">STEP 2: ELECTROLYSIS</h2>
          <p className="text-gray-700">
            The water then flows through an electrolysis chamber which contains
            platinum-covered titanium electrodes. These electrodes ionize the
            soluble minerals in the water: positively charged ions gather at the
            negative electrode to create alkaline water, while negatively
            charged ions create acidic water.
          </p>
        </div>
      </div>

      {/* Free Radicals Section */}
      <div className="w-full px-6 py-8 md:px-36 md:py-16 bg-gray-100">
        <h1
          className="text-center font-bold text-4xl mb-12"
          data-aos="fade-up"
        >
          Free Radicals and Antioxidants
        </h1>
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-8">
          <div data-aos="fade-right">
            <h3 className="font-bold text-2xl mb-4">
              Alkaline Ionized Water is a Powerful Antioxidant
            </h3>
            <p className="text-gray-700 mb-4">
              Free <strong>Radicals</strong> are unstable molecules that cause cellular damage.
              Antioxidants in alkaline water help neutralize these free radicals
              and reduce oxidative stress.
            </p>
            <p className="text-gray-700">
              Many foods like fruits, vegetables, teas, and legumes are also
              rich in <strong>Antioxidants</strong>, essential for a balanced diet.
            </p>
          </div>
          <div data-aos="fade-left">
            <img
              src="/free-radical.png"
              alt="Free Radicals"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Technology;
