import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import backgroundPage from '../assets/img/backgroundPage.jpg'
import AboutInfo from '../component/about/AboutInfo';
import Advertising from '../component/advertising/Advertising';
import ClipBoard from '../component/contact/ClipBoard';
import Navbar from "../component/layouts/Navbar";

function About() {

  const url = "https://localhost:7012";


  //Basket count 
  const [basketcount, setbasketcount] = useState(0);

  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  async function getbasketcount() {
    if (token) {
      await axios.get(`${url}/api/Basket/Getbasketcount`, config).then((res) => {
        setbasketcount(res.data);
      });
    }
  }


  useEffect(() => {
    getbasketcount();
  }, []);



  return (
    <>
  <Navbar basketcount={basketcount} />
      <div className='backgroundBlog'>
        <img src={backgroundPage} alt="" />
        <h2>About</h2>
        <h6><Link to="/">Home </Link> / Blog</h6>
      </div>


       <AboutInfo/>
       <Advertising/>
       <ClipBoard/>

    </>
  )
}

export default About