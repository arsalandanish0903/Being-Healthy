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
import AboutManufecture from "./pages/Company/AboutManufecture/AboutManufecture";
import EECcontent from "./pages/EEC/EECcontent";
import AkThreeThousand from "./pages/WaterIonizer/Ak-3000/AkThreeThousand";
import AkTwoThousand from "./pages/WaterIonizer/Ak-2000/AkTwoThousand";
import DigitalNull from "./pages/WaterIonizer/DigitalNull/DigitalNull";
import WaterRichCup from "./pages/WaterIonizer/WaterRichCup/WaterRichCup";
import HyFourThousand from "./pages/WaterIonizer/Hy-4000/HyFourThousand";
import OrderForm from "./pages/OrderForm/OrderForm";
import Technology from "./pages/Technology/Technology";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Route with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/company/about-beinghealthy" element={<AboutBfour />} />
          <Route path="/company/about-manufacture" element={<AboutManufecture />} />
          {/* <Route path="/company/legal-document" element={<LegalDocument />} /> */}

          {/* Water Ionizer Routes */}
          <Route path="/water-ionizer/manufactured-by" element={<ManufacturedBy />} />
          
          <Route path="/water-ionizer/bhninethousand" element={<BhNine />} />
          <Route path="/water-ionizer/bhfourthousand" element={<HyFourThousand />} />
          <Route path="/water-ionizer/akthreethousand" element={<AkThreeThousand />} />
          <Route path="/water-ionizer/bhtwothousand" element={<AkTwoThousand />} />
          <Route path="/water-ionizer/faucet" element={<DigitalNull />} />
          <Route path="/water-ionizer/hydrogenwater" element={<WaterRichCup />} />
          <Route path="/water-ionizer/disclaimer" element={<Disclaimer />} />
          <Route path="/water-ionizer/certification" element={<Certification />} />

          {/* Products Routes */}
          <Route path="/products" element={<Products/>} />
          <Route path="/technology" element={<Technology/>} />

          {/* Media Routes */}
          <Route path="/media/gallery" element={<Gallery />} />
          <Route path="/media/video" element={<Video />} />

          {/* Other Routes */}
          <Route path="/our-banker" element={<OurBanker />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/eeccontent" element={<EECcontent />} />

          <Route path="/order" element={<OrderForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
