// import React from 'react';

// function EECcontent() {
//     return (
//         <>
//             <div className="bg-gray-100 py-10 px-5">
//                 <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
//                     {/* Left Side: Image */}
//                     <div className="md:w-1/2">
//                         <img
//                             src="/chip.jpg"
//                             alt="Quantum Shield Technology"
//                             className="w-full h-full object-cover"
//                         />
//                     </div>

//                     {/* Right Side: Content */}
//                     <div className="md:w-1/2 p-6">
//                         <h1 className="text-3xl font-bold text-gray-800 mb-4">
//                             EEC Anti-Radiation Technology: Revolutionizing Health & Wellness
//                         </h1>
//                         <p className="text-gray-600 leading-relaxed mb-4">
//                             The Quantum Shield Terahertz Chip integrated with EEC Anti-Radiation Technology stands out as a one-of-a-kind innovation. <strong>It is the only chip in the world</strong> designed with advanced features to provide unmatched protection against electromagnetic radiation while enhancing overall health and wellness.

//                             This groundbreaking technology combines precision engineering and scientific advancements to safeguard your body from harmful electromagnetic waves emitted by modern devices such as mobile phones, laptops, and Wi-Fi routers.
//                         </p>

//                         <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Highlights of EEC Technology</h2>
//                         <ul className="list-disc list-inside text-gray-600 mb-4">
//                             <li className="font-medium">99.99% Radiation Absorption:</li>
//                             <p className="ml-6">Shields your brain and body from harmful electromagnetic waves, reducing exposure to radiation significantly.</p>

//                             <li className="font-medium">Enhanced Hydrogen Generation:</li>
//                             <p className="ml-6">Boosts your body’s ability to combat oxidative stress and protect cells from damage.</p>

//                             <li className="font-medium">Strengthened Biofield:</li>
//                             <p className="ml-6">Creates a protective barrier around your body to minimize electromagnetic interference.</p>
//                         </ul>

//                         <h2 className="text-xl font-semibold text-gray-800 mb-2">Benefits That Matter</h2>
//                         <ul className="list-disc list-inside text-gray-600">
//                             <li>Relieves common issues like headaches, insomnia, and hair loss.</li>
//                             <li>Improves blood circulation, energy levels, and focus.</li>
//                             <li>Supports immune and endocrine systems for better health.</li>
//                             <li>Protects your DNA from radiation-induced damage.</li>
//                             <li>Helps combat aging and fights cancer cells effectively.</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className="bg-gray-100 py-10 px-5">
//                 <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
//                     {/* Left Side: Image */}
//                     <div className="md:w-1/2 flex items-center">
//                         <img
//                             src="/EECWorks.jpg"
//                             alt="Compact Triple-Band THz System"
//                             className="w-full h-96 object-cover"
//                         />
//                     </div>

//                     {/* Right Side: Content */}
//                     <div className="md:w-1/2 p-6">
//                         <h1 className="text-3xl font-bold text-gray-800 mb-4">
//                             Compact Triple-Band Terahertz Sensing Technology
//                         </h1>
//                         <p className="text-gray-600 leading-relaxed mb-4">
//                             The compact triple-band terahertz sensing system utilizes cutting-edge technology to detect electromagnetic waves at terahertz frequencies with high precision and efficiency. This innovative solution combines an octagonal ring antenna, a polysilicon resistor, and an optimized PTAT sensor to deliver exceptional performance in energy conversion and signal output.
//                         </p>

//                         <h2 className="text-xl font-semibold text-gray-800 mb-2">How It Works</h2>
//                         <ul className="list-disc list-inside text-gray-600 mb-4">
//                             <li className="font-medium">Step 1: THz Wave Absorption</li>
//                             <p className="ml-6">The octagonal ring antenna selectively captures THz waves at frequencies `f1`, `f2`, and `f3`.</p>

//                             <li className="font-medium">Step 2: Energy Conversion</li>
//                             <p className="ml-6">Electromagnetic energy is absorbed and converted into thermal energy using a polysilicon resistor.</p>

//                             <li className="font-medium">Step 3: Thermal Sensing</li>
//                             <p className="ml-6">The PTAT sensor detects temperature changes and generates a corresponding electrical signal.</p>
//                         </ul>

//                         <h2 className="text-xl font-semibold text-gray-800 mb-2">Applications and Benefits</h2>
//                         <ul className="list-disc list-inside text-gray-600">
//                             <li>Highly selective sensing for medical, environmental, and security applications.</li>
//                             <li>Efficient energy conversion and signal generation for precise measurements.</li>
//                             <li>Compact design ensures easy integration into various systems.</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default EECcontent;


import React from 'react';

function EECcontent() {
    const EecMainContent = [
        {
            title: "Hydration & Balance body pH",
            content:
                "Research shows that drinking Alkaline water hydrates your body better than plain water, and by raising the pH level of your body can prevent or eliminate the symptoms of metabolic syndrome such as obesity, High blood pressure, high cholesterol, high blood sugar and kidney stones. A recent clinical study shows that Alkaline water can 􀃫ght harmful metabolic acidosis by raising blood pH40 to 70 % within the normal blood pH range",
            image: "/hydrations.jpg",
            reverse: false,
        },
        {
            title: "Detoxification",
            content:
                "Alkaline water from Being Healthy Actify Ionizer provides the body with daily cleanse as ION trappings draw out acidic toxins.Increased levels of antioxidants promote blood cleansing, liver cleansing, and colon cleansing.",
            image: "/detoxification.jpeg",
            reverse: true,
        },
        {
            title: "Bone Health",
            content:
                "When your body's pH balance becomes Acidic, your body will adjust it by stealing calcium from the bones. Research shows that by drinking Alkaline water it eliminates Calcium de􀃫ciency in your bones.",
            image: "/bonehealth.jpg",
            reverse: false,
        },
        {
            title: "Overall Energy Level and Healing",
            content:
                "Energizing feature of the Being Healthy Actify helps boost our energy levels support healing, and energy balancing.",
            image: "/energyhealing.jpg",
            reverse: true,
        },
        {
            title: "Weight Loss",
            content:
                "Hydration allows you to have better workouts, so you are able to burn more calories. Recent studies show that people who have started drinking alkaline water lost an average of 12 pounds in two months. And the only change they made was drinking alkaline water",
            image: "/weightloss.webp",
            reverse: false,
        },
        {
            title: "Anti-aging & Anti-Cancer with high ORP",
            content:
                "Alkaline water triples the anti-oxidants strength of vitamin C & alone it acts to counteract harmful reactive oxygen species, which damage DNA and tissues. Combined, alkaline water and vitamin C work effectively to neutralize harmful free radicals.",
            image: "/cancer.jpg",
            reverse: true,
        },
        {
            title: "Heart Health and Blood Pressure",
            content:
                "Alkaline water from Being Healthy Actify has been shown to reduce blood pressure and lower cholesterol levels in people with mineral de􀃫ciencies.",
            image: "/hearthealth.jpg",
            reverse: false,
        },
        {
            title: "Digestive Health",
            content:
                "Research suggests that Alkaline water reduces the symptoms of Colitis, Loose Bowels and Constipation.",
            image: "/digestive.jpg",
            reverse: true,
        },
        {
            title: "Helps to maintain our external body pH",
            content:
                "e Acidic water from the Being Healthy Actify helps on many skin related issues and it is suitable for maintaining our smooth skin and hair. It serves as a good natural disinfectant and astringent and suitable for treating bed sores and diabetic foot.",
            image: "/maintainskeen.webp",
            reverse: false,
        },
        {
            title: "Remove toxins from fruits and vegetables",
            content:
                "Washing vegetable and fruits to remove Pesticides, herbicides, and other chemicals and toxins. High Alkaline water from Being Healthy Actify is used very effectively to remove all toxins from the fruits and vegetables.",
            image: "/healthy foods.jpg",
            reverse: true,
        },
    ]
    return (
        <>
            {/* Second Section: Image and Content */}
            <div className="bg-gray-100 py-10 px-5">
                <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
                    {/* Left Side: Image */}
                    <div>
                        <img
                            src="/updatechip.jpg"
                            alt="Quantum Shield Technology"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Side: Content */}
                    <div className="p-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                            EEC Anti-Radiation Technology: Revolutionizing Health & Wellness
                        </h1>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Now Being Healthy with Quantum Shield Terahertz Chip Negative Ions EMF Anti Radiation Technology helps improve hydrogen generation, reduces deposition on plates, and anti-radiation. <br />
                            2. Remove phenomena: headache, insomnia, and hair loss <br />
                            3. Absorb and transfer electromagnetic radiation brain of 99.99 percent <br />
                            Benefit: <br />
                            1. Reduction of inflammation in your body <br />
                            2. Enhancement of blood circulation <br />
                            3. Destruction of viruses and bacteria in the body <br />
                            4. It enhances immune and endocrine systems in your body <br />
                            5. Increases your focus and concentration <br />
                            6. Increases energy in your body <br />
                            7. Helps in protecting DNA from any damage. Strengthens the body’s biofield preventing electromagnetic waves from affecting your health <br />
                            8. Helps to fight cancer cells in body <br />
                            9. Helps in lowering the aging process
                        </p>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Highlights of EEC Technology</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>
                                <span className="font-medium">99.99% Radiation Absorption:</span>
                                <p className="ml-4">Shields your brain and body from harmful electromagnetic waves, reducing exposure to radiation significantly.</p>
                            </li>
                            <li>
                                <span className="font-medium">Enhanced Hydrogen Generation:</span>
                                <p className="ml-4">Boosts your body’s ability to combat oxidative stress and protect cells from damage.</p>
                            </li>
                            <li>
                                <span className="font-medium">Strengthened Biofield:</span>
                                <p className="ml-4">Creates a protective barrier around your body to minimize electromagnetic interference.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Fourth Section: Image and Content */}
            <div className="bg-gray-100 py-10 px-5">
                <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                    {/* Left Side: Image */}
                    <div className="md:w-1/2">
                        <img
                            src="/EECWorks.jpg"
                            alt="Compact Triple-Band THz System"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Side: Content */}
                    <div className="md:w-1/2 p-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                            Compact Triple-Band Terahertz Sensing Technology
                        </h1>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            The compact triple-band terahertz sensing system utilizes cutting-edge technology to detect electromagnetic waves at terahertz frequencies with high precision and efficiency.
                        </p>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">How It Works</h2>
                        <ul className="list-disc list-inside text-gray-600 mb-4">
                            <li className="font-medium">Step 1: THz Wave Absorption</li>
                            <p className="ml-6">The octagonal ring antenna selectively captures THz waves at frequencies `f1`, `f2`, and `f3`.</p>

                            <li className="font-medium">Step 2: Energy Conversion</li>
                            <p className="ml-6">Electromagnetic energy is absorbed and converted into thermal energy using a polysilicon resistor.</p>

                            <li className="font-medium">Step 3: Thermal Sensing</li>
                            <p className="ml-6">The PTAT sensor detects temperature changes and generates a corresponding electrical signal.</p>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sm:px-36 sm:py-16 px-6 py-6 bg-gradient-to-b from-[#2389DA] to-white">
                <h1 className="text-center font-bold text-4xl mb-12 text-white">
                    HEALING PROPERTIES OF WATER
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Catalyst */}
                    <div className="text-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">A Catalyst</h2>
                        <p className="text-gray-600">
                            Water plays a crucial role in speeding up biological and chemical
                            reactions within the body, promoting optimal functioning.
                        </p>
                    </div>
                    {/* Carrier */}
                    <div className="text-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">A Carrier</h2>
                        <p className="text-gray-600">
                            Water helps transport nutrients and oxygen to cells while also removing
                            waste products from the body.
                        </p>
                    </div>
                    {/* Solvent */}
                    <div className="text-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">A Solvent</h2>
                        <p className="text-gray-600">
                            Water dissolves essential minerals and vitamins, making them available
                            for absorption in the body.
                        </p>
                    </div>
                    {/* Facilitator */}
                    <div className="text-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">A Facilitator</h2>
                        <p className="text-gray-600">
                            It facilitates various bodily functions such as digestion, circulation,
                            and temperature regulation.
                        </p>
                    </div>
                    {/* Detoxifier */}
                    <div className="text-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">A Detoxifier</h2>
                        <p className="text-gray-600">
                            Water aids in flushing toxins from the body, maintaining healthy organ
                            function and overall wellness.
                        </p>
                    </div>
                    {/* Protector */}
                    <div className="text-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">A Protector</h2>
                        <p className="text-gray-600">
                            Water cushions and protects vital organs and tissues, including the
                            spinal cord and joints.
                        </p>
                    </div>
                </div>
            </div>
            <div className="sm:px-36 sm:py-16 px-6 py-6 bg-[#2389DA]">
                <h1 className="text-center font-bold text-4xl mb-12 text-white">
                    HEALING PROPERTIES OF WATER
                </h1>
                {EecMainContent.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col sm:flex-row ${item.reverse ? "sm:flex-row-reverse" : ""
                            } items-center gap-8 py-8`}
                    >
                        {/* Image Section */}
                        <div className="flex-shrink-0 sm:w-1/2">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                        {/* Content Section */}
                        <div className="sm:w-1/2 text-center sm:text-left">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                                {item.title}
                            </h2>
                            <p className="text-white text-base sm:text-lg leading-relaxed">
                                {item.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>


        </>
    );
}

export default EECcontent;
