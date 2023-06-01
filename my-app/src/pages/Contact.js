import React from 'react'
import ContactContent from '../component/contact/ContactContent'
import backgroundPage from '../assets/img/backgroundPage.jpg'
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <div className='backgroundBlog'>
        <img src={backgroundPage} alt="" />
        <h2>Contact</h2>
        <h6><Link to='/' href="">Home </Link> / Contact</h6>
      </div>
      <ContactContent />

    </div>
  )
}

export default Contact