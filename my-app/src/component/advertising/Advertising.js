import React from 'react'
import advertisingLogo1 from '../../assets/img/adver1.png'
import advertisingLogo2 from '../../assets/img/adver2.png'
import advertisingLogo3 from '../../assets/img/adver3.png'
import advertisingLogo4 from '../../assets/img/adver4.png'
import '../../assets/scss/advertising.scss'

function Advertising() {
    return (
        <>

            <section id='info-bar'>

                <div className='container'>


                    <div className='info-border mt-5'>


                        <div className='col-3 info-bar-free'>


                            <div className='info-bar-free'>

                                <div className='info-bar-menu'>

                                    <div>
                                        <img src={advertisingLogo1} alt="" />
                                    </div>



                                    <div>
                                        <div>

                                            <b>
                                                BONUS PLUS</b>
                                        </div>

                                        <div>
                                            <span>On all orders over $75.00</span>

                                        </div>


                                    </div>

                                    <div className='border-right-solid'></div>


                                </div>

                            </div>


                        </div>
                        <div className='col-3 info-bar-free'>


                            <div className='info-bar-free'>

                                <div className='info-bar-free-shoping'>

                                    <div>
                                        <img src={advertisingLogo2} alt="" />
                                    </div>



                                    <div>
                                        <div>

                                            <b>
                                                FREE RETURNS</b>
                                        </div>

                                        <div>
                                            <span>Returns are free within 9 days</span>

                                        </div>


                                    </div>

                                    <div className='border-right-solid'></div>

                                </div>

                            </div>


                        </div>
                        <div className='col-3 info-bar-free'>


                            <div className='info-bar-free'>

                                <div className='info-bar-free-shoping'>

                                    <div>
                                        <img src={advertisingLogo3} alt="" />
                                    </div>



                                    <div>
                                        <div>

                                            <b>
                                                4.9 / 5 TRUSTSCORE</b>
                                        </div>

                                        <div>
                                            <span>Rated “Excellent” on Trustpilot</span>

                                        </div>


                                    </div>

                                    <div className='border-right-solid'></div>


                                </div>

                            </div>



                        </div>


                        <div className='col-3  info-bar-free'>



                            <div className='info-bar-free-shoping'>

                                <div>
                                    <img src={advertisingLogo4} alt="" />
                                </div>



                                <div>
                                    <div>

                                        <b>
                                            100% PAYMENT SECURE</b>
                                    </div>

                                    <div>
                                        <span>Your payment are safe with us</span>

                                    </div>


                                </div>




                            </div>



                        </div>




                    </div>



                </div>




            </section>

        </>
    )
}

export default Advertising