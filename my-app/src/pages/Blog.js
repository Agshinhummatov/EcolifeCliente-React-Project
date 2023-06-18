import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCart from '../component/blog/BlogCart'
import BlogRecent from '../component/blog/BlogRecent'
import backgroundPage from '../assets/img/backgroundPage.jpg'
import "../assets/css/blog.css"
import { Link } from 'react-router-dom';
import Player from '../component/blog/Player'
import Navbar from "../component/layouts/Navbar";



function Blog() {

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
                <h2>Blog</h2>
                <h6><Link to="/">Home </Link> / Blog</h6>
            </div>

            <div className='container'>



                <div className='d-flex'>

                    <BlogCart />
                    <div className='col-2 right'>
                        <BlogRecent />
                    </div>

                </div>
                




            </div>

            <div><Player/></div>

        </>
    )
}

export default Blog