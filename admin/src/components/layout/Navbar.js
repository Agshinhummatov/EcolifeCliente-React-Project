import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import '../../assets/css/navbar/navbar.css'
// import Icon from '@mdi/react';
// import { mdiAccount, mdiHeartOutline, mdiBasketOutline, mdiMagnify, mdiMenu } from '@mdi/js';
import { Link, NavLink, useNavigate, } from "react-router-dom";






function Navbar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
          document.getElementById("header").style.top = "0";
        } else {
          document.getElementById("header").style.top = "-100px";
        }
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [prevScrollPos]);



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
        sessionStorage.setItem("sweetAlertMessage", "You signed out");
        window.location.reload();
        window.location.href = "/adminLogin";
      }
      
      if (sessionStorage.getItem("sweetAlertMessage")) {
        Swal.fire({
          text: sessionStorage.getItem("sweetAlertMessage"),
          icon: "success",
          timer: 2000,
        });
        sessionStorage.removeItem("sweetAlertMessage");
        window.location.href = "/adminLogin";
      }


    return (
        <>
            <header>

                <section id="header" style={{ position: "fixed", top: "0", left: "0", right: "0", backgroundColor: "#01574A", boxShadow: "0 5px 15px rgba(0, 0, 0, 0.06)", zIndex: "999", transition: "top 0.3s ease-in-out" }}>
            
            
                    <div className='col-2 d-lg-none hamburger-menu'>

                    </div>



                    
                    <div className='col-2  d-flex search-input'>
                        
                    
                    </div>
                    <div className='col-8'>

                        <ul id="navbar" style={{ float: "right" }}>
                         


                            <div className="dropdown" >
                                <a href="">
                                    
                                    <div className="dropbtn d-flex account-btn" >
                                        {/* <Icon path={mdiAccount} size={1} className='icon' color="white" /> */}
                                        <i className="fa fa-user account-icon" > </i>  <span>  {" "}
                                        {currentToken ? currentUser : ""}</span>
                                    </div>
                                </a>
                                <div className="dropdown-content drop-content">
                                    {/* <div className="user-name">
                                        {" "}
                                        {currentToken ? currentUser : ""}
                                    </div> */}

{currentToken !== null ? (
  <a onClick={handleLogout} href="#">
    Logout
  </a>
) : null}




                                </div>
                            </div>
                            {/* <div className="basket">
                                <Link to={"/basket"}>
                                    <Icon path={mdiBasketOutline} size={1} className='icon icon2' color="white" />
                                    <sup>{props.basketcount}</sup>

                                </Link>
                            </div>
                            <div className="heart">
                                <a href="heart.html">
                                    <Icon path={mdiHeartOutline} size={1} className='icon icon2' color="white" />
                                    <sup>0</sup>

                                </a>
                            </div> */}
                        </ul>



                    </div>




                </section>






            </header>




        </>
    )
}

export default Navbar