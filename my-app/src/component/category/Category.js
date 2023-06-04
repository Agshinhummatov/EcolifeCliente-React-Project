import React from 'react'
import categoryImageOne from '../../assets/img/category1.jpg'
import categoryImageTwo from '../../assets/img/category2.jpg'
import categoryImageThree from '../../assets/img/category3.jpg'
import "../../assets/css/category.css"
import { Link } from 'react-router-dom'

function Category() {
    return (
        <>
            <section>
                <div className='container'>

                    <div className='row'>

                        <div className='col-lg-3 col-md-6 col-sm-12   mt-5'>


                        
                            <Link className='category-img d-flex category-img justify-content-sm-center justify-content-xs-center ' href=""><img src={categoryImageOne}  alt="" /></Link>
                            <h5 className='category-title'>Fresh Vegetables</h5>
                            <p className='category-count'>17 Products</p>
                        </div>


                        <div className='col-lg-3 col-md-6 col-sm-12  mt-5  '>

                            <Link className='category-img d-flex category-img justify-content-sm-center   justify-content-xs-center' href=""><img src={categoryImageTwo} alt="" /></Link>
                            <h5 className='category-title'>Fresh Fruits</h5>
                            <p className='category-count'>17 Products</p>
                        </div>


                        <div className='col-lg-3  col-md-6 col-sm-12  mt-5'>

                            <Link className=' category-img d-flex justify-content-sm-center justify-content-xs-center'  href=""><img src={categoryImageThree } alt="" /></Link>
                            <h5 className='category-title'>Dry Fruits & Snacks</h5>
                            <p className='category-count'>17 Products</p>
                        </div>


                        <div className='col-lg-3  col-md-6 col-sm-12  mt-5'>

                            <Link className=' category-img d-flex justify-content-sm-center justify-content-xs-center' href=""><img src={categoryImageThree} alt="" /></Link>
                            <h5 className='category-title'>Eggs & Dairy</h5>
                            <p className='category-count'>17 Products</p>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}

export default Category