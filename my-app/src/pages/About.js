import React from 'react'
import { Link } from 'react-router-dom';
import backgroundPage from '../assets/img/backgroundPage.jpg'
import AboutInfo from '../component/about/AboutInfo';
import Advertising from '../component/advertising/Advertising';
import ClipBoard from '../component/contact/ClipBoard';


function About() {
  return (
    <>

      <div className='backgroundBlog'>
        <img src={backgroundPage} alt="" />
        <h2>About</h2>
        <h6><Link to="/">Home </Link> / Blog</h6>
      </div>


       <AboutInfo/>
       <Advertising/>
       <ClipBoard/>

    </>
  )
}

export default About