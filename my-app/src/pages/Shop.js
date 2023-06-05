import React from 'react'
import Brand from '../component/shop/Brand'
import Products from '../component/shop/Products'
import '../assets/css/shop.css'
import Weight from '../component/shop/Weight'
import Color from '../component/shop/Color'
import backgroundPage from '../assets/img/backgroundPage.jpg'
import { Link } from 'react-router-dom';
import ShopCategory from '../component/shop/ShopCategory'
import Product from '../component/shop/Products'


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
                        <ShopCategory/>
                        <Brand />
                        <Weight />
                        <Color />
                       
                       
                    </div>
                    <div className='col-9 product-shop'>
                        <div className='col-12'>
                        <Products/>
                        </div>
                       
                    </div>


                </div>
            </div>
        </>
    )
}

export default Shop