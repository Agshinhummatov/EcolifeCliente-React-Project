import React, { useState } from 'react'


import Product from '../component/product/Product'
import Advertising from '../component/advertising/Advertising';
import Slider from '../component/slider/Slider';
import Banner from '../component/banner/Banner';
import Benefit from '../component/benefit/Benefit';

function Home() {
 
  return (
   <>
   
   

   <Slider/>
   <Advertising/>
   <Product/>
   <Banner/>
   <Benefit/>



   </>
  )
}

export default Home