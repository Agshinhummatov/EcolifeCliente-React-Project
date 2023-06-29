import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from '../component/shop/Products'
import Advertising from '../component/advertising/Advertising';
import Slider from '../component/slider/Slider';
import Banner from '../component/banner/Banner';
import Benefit from '../component/benefit/Benefit';
import Category from '../component/category/Category';
import BlogCart from '../component/blog/BlogCart';
import Navbar from "../component/layouts/Navbar";

function Home() {


  const url = "https://localhost:7012";

  const [basketcount, setbasketcount] = useState(0);

  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    
    headers: { Authorization: `Bearer ${token}` },
  };
  
  async function getbasketcount() {
    if (token) {
      try {
        const response = await axios.get(`${url}/api/Basket/Getbasketcount`, config);
        setbasketcount(response.data);
      } catch (error) {
        console.error("Error retrieving basket count:", error);
        // Handle the error, e.g., display an error message or take necessary actions
      }
    }
  }

  
  useEffect(() => {
    getbasketcount();
  }, []);
 
  return (
   <>
   
   
   <Navbar basketcount={basketcount} />
   <Slider/>
   <Advertising/>
   <h2 className='mt-5 text-center'>New Arrivals</h2>
  
  
   <Products setbasketcount={setbasketcount}/> 
   <Banner/>
   <Benefit/>
   <h2 className='text-center mt-5'>Shop By Categories:</h2>
   <Category/>
   <BlogCart/>



   </>
  )
}

export default Home