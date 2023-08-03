import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import logo from '../../assets/img/logo.jpg'
import '../../assets/css/layout.css'
import Icon from '@mdi/react';
import { mdiAccount, mdiHeartOutline, mdiBasketOutline, mdiMenu } from '@mdi/js';

import { Link, NavLink, useNavigate } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';




function Navbar(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const [searchText, setSearchText] = useState('');
    const [products, setProducts] = useState([]);


    //Get currents users name from token
    let currentToken = localStorage.getItem("token");
    let currentUser;
    if (currentToken != null) {
        function parseJwt(token) {
            var base64Url = token.split(".")[1];
            var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
            var jsonPayload = decodeURIComponent(
                atob(base64)
                    .split("")
                    .map(function (c) {
                        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                    })
                    .join("")
            );
            return JSON.parse(jsonPayload);
        }
        currentUser =
            parseJwt(currentToken)[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
            ];
    }

    //Logout function
    function handleLogout() {
        localStorage.removeItem("token");
        sessionStorage.setItem(
            "sweetAlertMessage",
            "You signed out"
        );
        window.location.reload();
    }

    if (sessionStorage.getItem("sweetAlertMessage")) {
        Swal.fire({
            text: sessionStorage.getItem("sweetAlertMessage"),
            icon: "success",
            timer: 2000,
        });
        sessionStorage.removeItem("sweetAlertMessage");
    }



    const handleSearch = () => {
        axios.get(`https://localhost:7012/api/Product/Search?searchText=${searchText}`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };


    const handleKeyUp = (event) => {
        setSearchText(event.target.value);
        if (event.target.value === '') {
            setProducts([]);
        } else {
            handleSearch();
        }
    };


    const showProducts = products.slice(0, 5);
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

                                    <input type="text" placeholder="search" onKeyUp={handleKeyUp} />
                                    {showProducts.map(product => (

                                        <li key={product.id}>
                                            <Link to={`/productDetail/${product.id}`}>{product.name} </Link>

                                        </li>


                                    ))}

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
                    <div className='col-lg-3 col-md-2   d-flex search-input'>

                        <input type="text" placeholder="search" onKeyUp={handleKeyUp} />


                        <ul className="search-ul-li">
                            {showProducts.map(product => {
                                const truncatedName = product.name.length > 20
                                    ? product.name.slice(0, 20) + "..."
                                    : product.name;

                                return (
                                    <li key={product.id}>
                                        <Link to={`/productDetail/${product.id}`}>
                                          <div className="d-flex">
                                            
                                            <div ><img style={{ width: '80px', height: '80px' }}
                                                src={`data:image/jpeg;base64,${product.image}`}
                                                alt=""
                                            />
                                            </div>

                                            <div>
                                            <p className="name"> {truncatedName}</p>
                                            <p className="price">{product.price}$</p>
                                           
                                            </div>
                                           
                                          </div>
                                       
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>


                    </div>

                    <div className='col-lg-7 col-md-8'>

                        <ul id="navbar">
                            <li><Link to="/"  >Home</Link></li>
                            <li><Link to="/shop" >Shop</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact" >Contact</Link></li>
                            <li id="lg-bag"><a href="cart.html"><i class="fa-solid fa-bag-shopping"></i></a></li>
                            <a href="#" id="close"><i class="fa-solid fa-xmark"></i></a>

                            {/* <div class="menu-wrap">
                                <ul class="menu">
                                    <li class="menu-item ">
                                        <a href="#"> <Icon path={mdiAccount} size={1} className='icon' color="white" /></a>

                                        <ul class="drop-menu">
                                            <li class="drop-menu-item">
                                                <a href="#">Login</a>
                                            </li>
                                            <li class="drop-menu-item">
                                                <a href="#">Register</a>
                                            </li>
                                            <li class="drop-menu-item">
                                                <a href="#">Logout</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>


                            </div>
                            
                            <Icon path={mdiHeartOutline} size={1} className='icon icon2' color="white" />
                            <Icon path={mdiBasketOutline} size={1} className='icon icon2' color="white" /> */}


                            <div className="dropdown">
                                <a href="">
                                    <div className="dropbtn">
                                        <Icon path={mdiAccount} size={1} className='icon' color="white" />
                                    </div>
                                </a>
                                <div className="dropdown-content drop-content">
                                    <div className="user-name">
                                        {" "}
                                        {currentToken ? currentUser : ""}
                                    </div>

                                    {currentToken != null ? (

                                        <a onClick={handleLogout} href="#">
                                            Logout
                                        </a>

                                    ) : (

                                        <Link to="/login">Login</Link>

                                    )}


                                    {currentToken != null ? (
                                        ""
                                    ) : (

                                        <Link to="/register">Register</Link>

                                    )}




                                </div>
                            </div>
                            <div className="basket">
                                <Link to={"/basketDetail"}>
                                    <Icon path={mdiBasketOutline} size={1} className='icon icon2' color="white" />
                                    <sup className="icon-design">{props.basketcount}</sup>

                                </Link>
                            </div>
                            <div className="heart">
                                <Link to={"/wishlistDetail"}>
                                    <Icon path={mdiHeartOutline} size={1} className='icon icon2' color="white" />
                                    {/* <sup className='icon-design'>0</sup> */}

                                </Link>
                            </div>
                        </ul>



                    </div>




                </section>






            </header>




        </>
    )
}

export default Navbar