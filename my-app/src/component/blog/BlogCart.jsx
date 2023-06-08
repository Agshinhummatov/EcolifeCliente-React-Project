import React from 'react'
import "../../assets/css/blog.css"
import blogImageOne from '../../assets/img/blog1.jpg'
import blogImageTwo from '../../assets/img/blog2.jpg'
import blogImageThree from '../../assets/img/blog3.jpg'
import { Link } from 'react-router-dom'

function BlogCart() {
    return (
        <>
            <section>

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-sm-6 mt-5'>
                            <div className="blog-item">
                                <div className="blog-content">
                                    <div className='blog-img'>

                                        <img src={blogImageOne} alt="" />

                                    </div>
                                    <h2 className="blog-title">
                                        <a href="blog.html">The Moment You Need To Remove Garlic </a>
                                    </h2>
                                    <div className="blog-meta">
                                        <p>11/06/2023</p>
                                    </div>
                                    <p className="blog-desc ">
                                        Lorem ipsum dolor sit amet, consecteturl adipisl elit,
                                        sed do eiusmod tempor incidio ut labore et dolore
                                        magna aliqua.
                                    </p>

                                </div>

                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-6 mt-5'>
                            <div className="blog-item">
                                <div className="blog-content">
                                    <div className='blog-img'>

                                       <Link to="/"><img src={blogImageTwo} alt="" /></Link> 

                                    </div>
                                    <h2 className="blog-title">
                                        <a href="blog.html">The Moment You Need To Remove Garlic </a>
                                    </h2>
                                    <div className="blog-meta">
                                        <p>11/06/2023</p>
                                    </div>
                                    <p className="blog-desc ">
                                        Lorem ipsum dolor sit amet, consecteturl adipisl elit,
                                        sed do eiusmod tempor incidio ut labore et dolore
                                        magna aliqua.
                                    </p>
                                </div>

                            </div>
                        </div>


                        <div className='col-lg-4 col-md-6 col-sm-6 mt-5'>
                            <div className="blog-item">
                                <div className="blog-content">
                                    <div className='blog-img'>

                                        <img src={blogImageTwo} alt="" />

                                    </div>
                                    <h2 className="blog-title">
                                        <a href="blog.html">The Moment You Need To Remove Garlic </a>
                                    </h2>
                                    <div className="blog-meta">
                                        <p>11/06/2023</p>
                                    </div>
                                    <p className="blog-desc ">
                                        Lorem ipsum dolor sit amet, consecteturl adipisl elit,
                                        sed do eiusmod tempor incidio ut labore et dolore
                                        magna aliqua.
                                    </p>
                                </div>

                            </div>
                        </div>



                        <div className='col-lg-4 col-md-6 col-sm-6 mt-5'>
                            <div className="blog-item">
                                <div className="blog-content">
                                    <div className='blog-img'>

                                        <img src={blogImageTwo} alt="" />

                                    </div>
                                    <h2 className="blog-title">
                                        <a href="blog.html">The Moment You Need To Remove Garlic </a>
                                    </h2>
                                    <div className="blog-meta">
                                        <p>11/06/2023</p>
                                    </div>
                                    <p className="blog-desc ">
                                        Lorem ipsum dolor sit amet, consecteturl adipisl elit,
                                        sed do eiusmod tempor incidio ut labore et dolore
                                        magna aliqua.
                                    </p>
                                </div>

                            </div>
                        </div>

                    


                    </div>
                </div>
            </section>

        </>
    )
}

export default BlogCart