import React, { useState } from 'react'
import logo from '../../assets/img/logo.jpg'
import '../../assets/css/layout.css'
import Icon from '@mdi/react';
import { mdiAccount, mdiHeartOutline, mdiBasketOutline, mdiMagnify, mdiMenu } from '@mdi/js';
import { Link } from 'react-router-dom';

import Offcanvas from 'react-bootstrap/Offcanvas';




function Navbar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <header>

                <section id="header">

                    <div className='col-2 d-lg-none hamburger-menu'>

                        <Icon className='hamburger-menu-icon' path={mdiMenu} onClick={handleShow} size={1.5} color="white" />

                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <ul id="navbar-hamburger" >
                                    <input type="text" placeholder='search' className='search-input' />
                                    <Icon path={mdiMagnify} size={1.3} color="red"  />
                                    <li className='mt-3'><Link to="/" class="active" >Home</Link></li>
                                    <li><Link to="/shop" >Shop</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact" >Contact</Link></li>
                                </ul>
                            </Offcanvas.Body>
                        </Offcanvas>

                    </div>


                   
                    <div className='col-1  logo-eco'>


                        <Link to="/"><img className='logo-img' src={logo} class="logo" alt="" /></Link>
                    </div> 
                    <div className='col-2  d-flex search-input'>
                        <input type="text" placeholder='search' />
                        <Icon path={mdiMagnify} size={1.5} color="white" className="serach-icon" />
                    </div>
                    <div className='col-8'>

                        <ul id="navbar">
                            <li><Link to="/"  >Home</Link></li>
                            <li><Link to="/shop" >Shop</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact" >Contact</Link></li>
                            <li id="lg-bag"><a href="cart.html"><i class="fa-solid fa-bag-shopping"></i></a></li>
                            <a href="#" id="close"><i class="fa-solid fa-xmark"></i></a>
                            <Icon path={mdiAccount} size={1} className='icon' color="white" />
                            <Icon path={mdiHeartOutline} size={1} className='icon' color="white" />
                            <Icon path={mdiBasketOutline} size={1} className='icon' color="white" />
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