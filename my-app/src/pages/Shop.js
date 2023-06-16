import React, { useState, useEffect } from "react";
import axios from "axios";
import Brand from '../component/shop/Brand'
import Products from '../component/shop/Products'

import '../assets/css/shop.css'
import Weight from '../component/shop/Weight'
import Color from '../component/shop/Color'
import backgroundPage from '../assets/img/backgroundPage.jpg'
import { Link } from 'react-router-dom';
import ShopCategory from '../component/shop/ShopCategory'



function Shop() {

  const url = "https://localhost:7012";

  const [basketcount, setbasketcount] = useState(0);

 

  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    
    headers: { Authorization: `Bearer ${token}` },
  };

  async function getbasketcount() {
    if(token){
    await axios.get(`${url}/api/Basket/Getbasketcount`, config).then((res) => {
      setbasketcount(res.data);
    });
  }}




  useEffect(() => {
    getbasketcount();
  }, []);
 


  return (

    <>
         

      <div className='backgroundBlog'>
        <img src={backgroundPage} alt="" />
        <h2>Shop</h2>
        <h6><Link to="/" >Home </Link> / Shop</h6>
      </div>

      <div className='container'>
        <div className='row'>

          <div className='col-3 mt-5'>
            <ShopCategory />
            <Brand />
            <Weight />
            <Color />


          </div>
          <div className='col-9 product-shop'>
            <div className='col-12'>
              <Products setbasketcount={setbasketcount} />
            </div>

          </div>


        </div>
      </div>

    </>
  )
}

export default Shop