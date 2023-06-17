import React, { useState, useEffect } from "react";
import axios from "axios";
import BasketProducts from "../component/shop/BasketProducts";



function BasketDetail() {
    return (
        <div>
            <section
                id="header-area"
                style={{ backgroundImage: 'url("/images/heart-image.webp")' }}
            >
                <div className="container">
                    <div className="row">
                        <div className="head">
                            <h1>Products</h1>
                        </div>
                    </div>
                </div>
            </section>
            <BasketProducts/>


        </div>
    )
}

export default BasketDetail