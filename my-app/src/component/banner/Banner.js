import React from 'react'
import banner1 from '../../assets/img/banner1.jpg'
import banner2 from '../../assets/img/banner2.jpg'
import '../../assets/css/banner.css'

function Banner() {
    return (
        <>
            <div className='container'>
                <div className='row mt-5'>

                    <div className='col-6 baner-info'>
                    
                        <h4 className='banner-title'>Green Tea Powder</h4>
                     
                        <span className='banner-description' >Natural Sweetener taste</span>
                        <img className='baner-img' src={banner1} alt="" />
                    </div>

                    <div className='col-6 baner-info'>
                        <h4 className='banner-title'>Crunchy Buckwheat
                        </h4>
                        <span className='banner-description' >Natural Sweetener taste</span>
                        <img className='baner-img' src={banner2} alt="" />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Banner