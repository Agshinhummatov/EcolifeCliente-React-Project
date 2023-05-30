import React from 'react'
import logo from '../../assets/img/logo.jpg'
import '../../assets/css/layout.css'
import Icon from '@mdi/react';
import { mdiAccount, mdiHeartOutline,mdiBasketOutline  } from '@mdi/js';







function Header() {
    return (
        <>
            <header>

                <section id="header">
                    
                    <a href="#"><img src={logo} class="logo" alt="" /></a>
                    <input type="text" placeholder='serach' />
                    <div className=''>
                        
                        <ul id="navbar">
                            <li><a class="active" href="index.html">Home</a></li>
                            <li><a href="shop.html">Shop</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li id="lg-bag"><a href="cart.html"><i class="fa-solid fa-bag-shopping"></i></a></li>
                            <a href="#" id="close"><i class="fa-solid fa-xmark"></i></a>
                            <Icon path={mdiAccount} size={1} className='icon' color="white"/>
                            <Icon path={mdiHeartOutline} size={1} className='icon' color="white" />
                            <Icon path={mdiBasketOutline} size={1} className='icon' color="white"  />
                        </ul>
                    </div>
                    <div id="mobile">
                        <a href="cart.html"><i class="fa-solid fa-bag-shopping"></i></a>
                        <i id="bar" class="fas fa-outdent"></i>
                    </div>


                   
                </section>






            </header>

        </>
    )
}

export default Header