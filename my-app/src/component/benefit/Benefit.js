import React from 'react'
import '../../assets/css/benefit.css'
import benfitImageOne from '../../assets/img/benefit1.png'
import benfitImageTwo from '../../assets/img/benefit2.png'
import benfitImageThree from '../../assets/img/benefit3.png'
import benfitImageFour from '../../assets/img/benefit4.png'
import benfitImageFive from '../../assets/img/benefit5.png'
import benfitImageSix from '../../assets/img/benefit6.png'
import benfitImageSeven from '../../assets/img/benefit7.png'
import benfitImageEight from '../../assets/img/benefit8.png'


function Benefit() {
    return (
        <>
        <section>
            <div className='container'>

                <h3 className='benfit-title'> Superfood Benefits</h3>
                <div className='row'>

                    <div className='col-3 benfit-info '>
                        <img className='benfit-img' src={benfitImageOne} alt="" />
                        <p className='benfit-des'>Stronger Immune System</p>

                    </div>

                    <div className='col-3 benfit-info '>
                        <img  className='benfit-img' src={benfitImageTwo} alt="" />
                        <p className='benfit-des'>Improved Digestion</p>

                    </div>
                    <div className='col-3 benfit-info '>
                        <img  className='benfit-img' src={benfitImageThree} alt="" />
                        <p className='benfit-des'>All Natural Detox</p>

                    </div>
                    <div className='col-3 benfit-info '>
                        <img   className='benfit-img'src={benfitImageFour} alt="" />
                        <p className='benfit-des'>Improved Energy Levels</p>

                    </div>

                    <div className='col-3 benfit-info '>
                        <img  className='benfit-img' src={benfitImageFive} alt="" />
                        <p className='benfit-des'>Stronger Immune System</p>

                    </div>

                    
                    <div className='col-3 benfit-info '>
                        <img  className='benfit-img' src={benfitImageSix} alt="" />
                        <p className='benfit-des'>Improved Digestion</p>

                    </div>


                    <div className='col-3 benfit-info '>
                        <img  className='benfit-img' src={benfitImageSeven} alt="" />
                        <p className='benfit-des'>All Natural Detox</p>

                    </div>
                    <div className='col-3 benfit-info '>
                        <img  className='benfit-img' src={benfitImageEight} alt="" />
                        <p className='benfit-des'>Improved Energy Levels</p>

                    </div>

                </div>


            </div>

            </section>

        </>
    )
}

export default Benefit