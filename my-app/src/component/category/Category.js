import React from 'react'
import categoryImageOne from '../../assets/img/category1.jpg'
import categoryImageTwo from '../../assets/img/category2.jpg'
import categoryImageThree from '../../assets/img/category3.jpg'
import "../../assets/css/category.css"

function Category() {
    return (
        <>
            <section>
                <div className='container'>

                    <div className='row'>

                        <div className='col-3  mt-5'>

                            <a href=""><img src={categoryImageOne} alt="" /></a>
                            <h5 className='category-title'>Fresh Vegetables</h5>
                            <p className='category-count'>17 Products</p>
                        </div>


                        <div className='col-3 mt-5 '>

                            <a href=""><img src={categoryImageTwo} alt="" /></a>
                            <h5 className='category-title'>Fresh Fruits</h5>
                            <p className='category-count'>17 Products</p>
                        </div>


                        <div className='col-3 mt-5'>

                            <a href=""><img src={categoryImageThree } alt="" /></a>
                            <h5 className='category-title'>Dry Fruits & Snacks</h5>
                            <p className='category-count'>17 Products</p>
                        </div>


                        <div className='col-3 mt-5'>

                            <a href=""><img src={categoryImageThree} alt="" /></a>
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