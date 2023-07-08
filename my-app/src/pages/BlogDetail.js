import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import backgroundPage from '../assets/img/backgroundPage.jpg'

import BlogRecent from '../component/blog/BlogRecent'
import Category from '../component/category/Category'
import Navbar from "../component/layouts/Navbar";


import Icon from '@mdi/react';

import { mdiAccount, mdiClockTimeEight, mdiCalendarCheckOutline } from '@mdi/js';

function BlogDetail() {

  const { id } = useParams();
  const url = "https://localhost:7012";

  const [blog, setBlog] = useState({})
  //Basket count 
  const [basketcount, setbasketcount] = useState(0); 

  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };




  //Get By Id Blog API
  const getById = async (id) => {
      try {
          const response = await axios.get(`${url}/api/blog/GetById/${id}`);
          setBlog(response.data);
      } catch (error) {
          if (error.response) {
              if (error.response.status === 404) {
                  window.location.href = '/404';
              } else if (error.response.status === 400) {
                  window.location.href = '/400';
              }
          } else {
              console.error(error);
          }
      }
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
    getById(id)
    getbasketcount();
  }, []);




  return (

    <>
      <Navbar basketcount={basketcount} />
      <div className='backgroundBlog'>
        <img src={backgroundPage} alt="" />
        <h2>Blog</h2>
        <h6><Link to="/">Home </Link> / Blog Detail</h6>
      </div>

      <div className='container'>

        <div className='row'>



          <div className='col-10'>

            <section>
              <div className='col-12'>


                <h2 className='mt-5'>{blog.title}</h2>

                <p> <span> Posted by <Icon path={mdiAccount} size={0.8} /> : Demo Posthemes  </span> <span> <Icon path={mdiClockTimeEight} size={0.8} />{new Date(blog.createdAt).toLocaleString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span> <span><Icon path={mdiCalendarCheckOutline} size={0.8} /> </span>  </p>

                <img className='blog-detail-img'  src={`data:image/jpg;base64,${blog.image}`} alt="" />

                <p className='mt-5'>
                  
                {blog.description}

                 </p>

              </div>

            </section>

          </div>

          <div className='col-2'>

            <BlogRecent />
          </div>

          <div className='col-12'>

            <Category />
          </div>

        </div>
      </div>
    </>
  )
}

export default BlogDetail