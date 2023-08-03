import React, { useState, useEffect } from "react";
import axios from "axios";

import Advertising from '../component/advertising/Advertising';
import Slider from '../component/slider/Slider';
import Banner from '../component/banner/Banner';
import Benefit from '../component/benefit/Benefit';
import Category from '../component/category/Category';

import Navbar from "../component/layouts/Navbar";
import FiltredBlog from "../component/blog/FiltredBlog";
import FiltredProduct from "../component/shop/FiltredProduct";
import TheBestProductFiltred from "../component/shop/TheBestProductFiltred";
import { InfinitySpin } from 'react-loader-spinner'

function Home() {


  const url = "https://localhost:7012";

  const [basketcount, setbasketcount] = useState(0);

  const [showSpinner, setShowSpinner] = useState(true);

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
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1800); // 5 saniye sonra spinner'ı gizle (zamanı istediğiniz gibi ayarlayabilirsiniz)

    return () => {
      clearTimeout(timer); // bileşenin unmount olduğunda zamanlayıcıyı temizle
    };
  }, []);

  useEffect(() => {
    getbasketcount();
  }, []);

  return (
    <>

      {showSpinner && (
        <div className="loader-div" style={{
          position: 'fixed',
          zIndex: 2222,
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          background: 'black', // Aqua renginde, %50 opaklık
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        }}>
          <InfinitySpin
            width="200"
            color="#4fa94d"
          />
        </div>
      )}




      <Navbar basketcount={basketcount} />
      <Slider />
      <Advertising />
      <h2 className='mt-5 text-center'>New Arrivals</h2>



      <FiltredProduct setbasketcount={setbasketcount} />
      <Banner />
      <Benefit />
      <h2 className='text-center mt-5'>Shop By Categories:</h2>
      <Category />
      <h2 className='text-center mt-5'>The Best Products</h2>
      <TheBestProductFiltred setbasketcount={setbasketcount} />
      <h2 className='text-center mt-5'>New Blogs</h2>
      <FiltredBlog />



    </>
  )
}

export default Home