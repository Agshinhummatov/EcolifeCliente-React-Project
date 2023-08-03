import React, { useState, useEffect } from "react";
import axios from "axios";
import backgroundPage from '../assets/img/backgroundPage.jpg'
import Navbar from "../component/layouts/Navbar";
import WishlistProduct from "../component/shop/WishlistProduct";
import { Link } from 'react-router-dom';

function WishlistDetail() {

    const url = "https://localhost:7012";


    //Basket count 
    const [basketcount, setbasketcount] = useState(0);


    let token = JSON.parse(localStorage.getItem("token"));

    const config = {

        headers: { Authorization: `Bearer ${token}` },
    };


    async function getbasketcount() {
        if (token) {
            try {
                const response = await axios.get(`${url}/api/Basket/Getbasketcount`, config);
                setbasketcount(response.data);
            } catch (error) {
                console.error("Error retrieving basket count:", error);
                // Handle the error, e.g., display an error message or take necessary actions
            }
        }
    }


    useEffect(() => {
        getbasketcount();
    }, []);

    return (
        <div>

            <Navbar basketcount={basketcount} />

            <div className='backgroundBlog' style={{marginTop:"92px"}}>
                <img src={backgroundPage} alt="" />
                <h2>Wishlist</h2>
                <h6><Link to="/">Home </Link> / Wishlist</h6>
            </div>
            <section
                id="header-area"
                style={{ backgroundImage: 'url("/images/heart-image.webp")' }}
            >
                <div className="container">
                    <div className="row">
                        <div className="head">

                        </div>
                    </div>
                </div>
            </section>
            <WishlistProduct />



        </div>
    )
}

export default WishlistDetail