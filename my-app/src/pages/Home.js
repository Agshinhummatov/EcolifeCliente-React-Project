import React, { useState } from 'react'


import Products from '../component/shop/Products'
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
   <h2 className='mt-5 text-center'>New Arrivals</h2>
  
  
   <Products/> 
   <Banner/>
   <Benefit/>
   <h2 className='text-center mt-5'>Shop By Categories:</h2>
   <Category/>
   <BlogCart/>



   </>
  )
}

export default Home