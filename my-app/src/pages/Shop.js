import React from 'react'
import Brand from '../component/shop/Brand'
import Product from '../component/shop/Product'
import '../assets/css/shop.css'
import Weight from '../component/shop/Weight'
import Color from '../component/shop/Color'
import backgroundPage from '../assets/img/backgroundPage.jpg'
import { Link } from 'react-router-dom';

function Shop() {
    return (
        <>


            <div className='backgroundBlog'>
                <img src={backgroundPage} alt="" />
                <h2>Shop</h2>
                <h6><Link to="/" >Home </Link> / Shop</h6>
            </div>

            <div className='container'>
                <div className='row'>

                    <div className='col-3 mt-5'>
                        <Brand />
                        <Weight />
                        <Color />
                    </div>
                    <div className='col-9'>
                        <Product />
                    </div>


                </div>
            </div>
        </>
    )
}

export default Shop