import React from 'react'
import backgroundPage from '../assets/img/backgroundPage.jpg'
import ProductDetail from '../component/shop/ProductDetail'
import { Link } from 'react-router-dom';
import Advertising from '../component/advertising/Advertising';

function ShopDetail() {
    return (
        <>

            <div className='backgroundBlog'>
                <img src={backgroundPage} alt="" />
                <h2>Shop Detail</h2>
                <h6><Link to='/' href="">Home </Link> /Shop detail</h6>
            </div>



            <div className='container'>
                <div className='d-flex'>

                   
                    <div className='col-12'>

                        <ProductDetail />

                    </div>

                </div>

                <div className='col-12'>

                    <Advertising/>
                </div>

            </div>
        </>
    )
}

export default ShopDetail