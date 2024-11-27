import React, { useState } from 'react';

import DetoxYourBody from '../components/DetoxYourBody/DetoxYourBody';
import Hero from '../components/Hero/Hero';
import WaterCard from '../components/WaterCard/WaterCard';
import AboutStyles from '../components/AboutStyles/AboutStyles';
import Cirtificate from '../components/Cirtificates/Cirtificate';
import Products from './products/Products';


function Home() {
  
  return (
    <>
      <div className='relative  '>
        <Hero />
        <div className='relative'>
        <DetoxYourBody />
        </div>
        <div>
          <WaterCard />
        </div>
        <div>
          <AboutStyles />
        </div>
        <div>
          <Cirtificate />
        </div>
      </div>

    </>
  );
}

export default Home;

