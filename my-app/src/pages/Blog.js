import React from 'react'
import BlogCart from '../component/blog/BlogCart'
import BlogRecent from '../component/blog/BlogRecent'
import backgroundPage from '../assets/img/backgroundPage.jpg'
import "../assets/css/blog.css"




function Blog() {
    return (
        <div>
            

            <div className='backgroundBlog'>
                <img src={backgroundPage} alt="" />
                <h2>Blog</h2>
                <h6><a href="">Home </a> / Blog</h6>
            </div>

            <div className='container'>

               

                   <div className='d-flex'>

                   <BlogCart />
                   <div className='col-2 right'>
                   <BlogRecent/>
                   </div>
                  
                   </div>

                  

                
            </div>
           

        </div>
    )
}

export default Blog