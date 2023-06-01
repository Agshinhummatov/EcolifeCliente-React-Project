import React, { useState } from 'react'


import Product from '../component/product/Product'
import Advertising from '../component/advertising/Advertising';
import Slider from '../component/slider/Slider';
import Banner from '../component/banner/Banner';
import Benefit from '../component/benefit/Benefit';
import Category from '../component/category/Category';
import BlogCart from '../component/blog/BlogCart';

function Home() {
 
  return (
   <>
   
   

   <Slider/>
   <Advertising/>
   <Product/>
   <Banner/>
   <Benefit/>
   <Category/>
   <BlogCart/>



   </>
  )
}

export default Home