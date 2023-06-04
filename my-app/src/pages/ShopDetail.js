import React from 'react'
import backgroundPage from '../assets/img/backgroundPage.jpg'
import ProductDetail from '../component/shop/ProductDetail'
import { Link } from 'react-router-dom';
import Advertising from '../component/advertising/Advertising';
import Product from '../component/shop/Products';
import Category from '../component/category/Category';

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

                    <Advertising />
                </div>


                <h2 className='text-center mt-5'>You Might Also Like</h2>
                <div className='col-12'>

                    <Product />
                </div>

                <h2 className='text-center mt-5'>16 Other Products In The Same Category:</h2>
                <div className='col-12'>

                    <Product />
                </div>

                <h2 className='text-center mt-5'>Shop By Categories:</h2>
                <div className='col-12'>

                    <Category />
                </div>

            </div>
        </>
    )
}

export default ShopDetail