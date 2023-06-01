import React from 'react'
import { Link } from 'react-router-dom';
import backgroundPage from '../assets/img/backgroundPage.jpg'


function About() {
  return (
    <>

      <div className='backgroundBlog'>
        <img src={backgroundPage} alt="" />
        <h2>About</h2>
        <h6><Link to="/">Home </Link> / Blog</h6>
      </div>

    </>
  )
}

export default About