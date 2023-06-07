import React from 'react'
import BlogCart from '../component/blog/BlogCart'
import BlogRecent from '../component/blog/BlogRecent'
import backgroundPage from '../assets/img/backgroundPage.jpg'
import "../assets/css/blog.css"
import { Link } from 'react-router-dom';
import Player from '../component/blog/Player'



function Blog() {
    return (
        <div>


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

        </div>
    )
}

export default Blog