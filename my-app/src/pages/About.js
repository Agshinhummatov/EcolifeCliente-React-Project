import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import backgroundPage from '../assets/img/backgroundPage.jpg'
import AboutInfo from '../component/about/AboutInfo';
import Advertising from '../component/advertising/Advertising';
import Navbar from "../component/layouts/Navbar";

function About() {

  const url = "https://localhost:7012";


  //Basket count 
  const [basketcount, setbasketcount] = useState(0);

  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // async function getbasketcount() {
  //   if (token) {
  //     await axios.get(`${url}/api/Basket/Getbasketcount`, config).then((res) => {
  //       setbasketcount(res.data);
  //     });
  //   }
  // }

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
      <div className='backgroundBlog' style={{marginTop:"92px"}}>
        <img src={backgroundPage} alt="" />
        <h2>About</h2>
        <h6><Link to="/">Home </Link> / Blog</h6>
      </div>


       <AboutInfo/>
       <Advertising/>
       {/* <ClipBoard/> */}

    </>
  )
}

export default About