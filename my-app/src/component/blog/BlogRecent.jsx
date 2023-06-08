import React from 'react'
import "../../assets/css/blog.css"
import blogImageOne from '../../assets/img/blog1.jpg'
import blogImageTwo from '../../assets/img/blog2.jpg'
import blogImageThree from '../../assets/img/blog3.jpg'




function BlogRecent() {
    return (

        <div>
            <div className="col-lg-12 col-md-4 col-sm-12 mt-5">



                <div className="recent-post">
                    <h3>Recent Post</h3>

                    <div className="recent-card">
                        <div className="img-name">
                            <img src={blogImageOne} alt="" />
                            <div className="name-blog">
                                <h6>From life was you fish...</h6>
                                <p>January 12, 2021</p>
                            </div>
                        </div>

                        <div className="img-name">
                            <img src={blogImageThree} alt="" />
                            <div className="name-blog">
                                <h6>The Amazing Hubble</h6>
                                <p>January 12, 2021</p>
                            </div>
                        </div>

                        <div className="img-name">
                            <img src={blogImageTwo} alt="" />
                            <div className="name-blog">
                                <h6>Astronomy Or Astrology</h6>
                                <p>January 12, 2021</p>
                            </div>
                        </div>
                        <div className="img-name">
                            <img src="./assets/img/blog/post_4.png.webp" alt="" />
                            <div className="name-blog">
                                <h6>Asteroids telescope.</h6>
                                <p>January 12, 2021</p>
                            </div>
                        </div>

                    </div>
                </div>







            </div>


        </div>
    )
}

export default BlogRecent