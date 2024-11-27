import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Import your page components
import Home from "./pages/Home";
import AboutBfour from "./pages/Company/AboutBfour";
import LegalDocument from "./pages/Company/LegalDocument";
import ManufacturedBy from "./pages/WaterIonizer/ManufacturedBy";
import Disclaimer from "./pages/WaterIonizer/Disclaimer";
import Certification from "./pages/WaterIonizer/Certification";
import Gallery from "./pages/Media/Gallery";
import Video from "./pages/Media/Video";
import OurBanker from "./pages/OurBanker";
import ContactUs from "./pages/ContactUs/ContactUs";
import Products from "./pages/products/Products";
import BhNine from "./pages/WaterIonizer/BH-9/BhNine";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Route with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/company/about-bfour" element={<AboutBfour />} />
          <Route path="/company/legal-document" element={<LegalDocument />} />

          {/* Water Ionizer Routes */}
          <Route path="/water-ionizer/manufactured-by" element={<ManufacturedBy />} />
          
          <Route path="/water-ionizer/b9" element={<BhNine />} />
          {/* <Route path="/water-ionizer/b9-plus" element={<B9Plus />} /> */}
          <Route path="/water-ionizer/disclaimer" element={<Disclaimer />} />
          <Route path="/water-ionizer/certification" element={<Certification />} />

          {/* Products Routes */}
          <Route path="/products" element={<Products/>} />

          {/* Media Routes */}
          <Route path="/media/gallery" element={<Gallery />} />
          <Route path="/media/video" element={<Video />} />

          {/* Other Routes */}
          <Route path="/our-banker" element={<OurBanker />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
