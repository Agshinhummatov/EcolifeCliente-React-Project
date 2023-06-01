import React from 'react'
import logo from '../../assets/img/logo.jpg'
import '../../assets/css/layout.css'
import Icon from '@mdi/react';
import { mdiAccount, mdiHeartOutline,mdiBasketOutline  } from '@mdi/js';
import { Link } from 'react-router-dom';






function Navbar() {
    return (
        <>
            <header>

                <section id="header">
                    
                    <Link to="/"><img src={logo} class="logo" alt="" /></Link>
                    <input type="text" placeholder='serach' />
                    <div className=''>
                        
                        <ul id="navbar">
                            <li><Link to="/" class="active" >Home</Link></li>
                            <li><Link to="/shop" >Shop</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact" >Contact</Link></li>
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

export default Navbar