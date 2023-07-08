import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../assets/css/blog.css"
import { Link, NavLink } from "react-router-dom";




function BlogRecent() {


    const [blog, setBlog] = useState([]);

    const baseURL = "https://localhost:7012/";

    useEffect(() => {
        axios.get(`${baseURL}api/Blog/GetALL`)
            .then((response) => {
                setBlog(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);




    return (

        <div>
         
         <div className="col-lg-12 col-md-4 col-sm-12 mt-5">
                <div className="recent-post">
                    <h3>Recent Post</h3>
                    <div className="recent-card">
                        {blog.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 4).map((item, index) => (
                            <div key={index} className="img-name">
                          <NavLink className="detail" to={`/blogDetail/${item.id}`}>

  
                                <img src={`data:image/jpg;base64,${item.image}`} alt="" />
                                </NavLink>
                                <div className="name-blog">
                                    <h6 className='text-center'>{item.title}</h6>
                                    <p className='text-center' >{new Date(item.createdAt).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}
</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BlogRecent