import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import "../../assets/css/blog.css"



function FiltredBlog() {

    const [blog, setBlog] = useState([])

    const baseURL = "https://localhost:7012/";

    useEffect(() => {
        axios.get(`${baseURL}api/Blog/GetALL`).then((response) => {
            setBlog(response.data)
        })
    }, [])

    return (

        <>
            <section>

                <div className='container'>
                    <div className='row'>

                        {blog.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                            .slice(0, 4)
                            .map((item, i) => (
                                <div className='col-lg-4 col-md-6 col-sm-6' fade key={i}>
                                    <div className="blog-item">
                                        <div className="blog-content">
                                            <NavLink className="detail" to={`/blogDetail/${item.id}`}>
                                                <div className='blog-img'>
                                                    <img src={`data:image/jpg;base64,${item.image}`} alt="" />
                                                </div>
                                            </NavLink>
                                            <h2 className="blog-title">
                                                <a href="blog.html">{item.title}</a>
                                            </h2>
                                            <div className="blog-meta">
                                                <p>{new Date(item.createdAt).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}</p>
                                            </div>
                                            <p className="blog-desc">
                                                {item.description.length > 50
                                                    ? item.description.slice(0, 50) + "..."
                                                    : item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                    </div>
                </div>
            </section>


        </>
    )
}

export default FiltredBlog