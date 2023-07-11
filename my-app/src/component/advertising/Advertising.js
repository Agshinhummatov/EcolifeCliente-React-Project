import React, { useState, useEffect } from 'react'
import axios from "axios";
import advertisingLogo2 from '../../assets/img/adver2.png'
import advertisingLogo3 from '../../assets/img/adver3.png'
import advertisingLogo4 from '../../assets/img/adver4.png'
import '../../assets/scss/advertising.scss'

function Advertising() {


    const [advertising, setAdvertising] = useState([])

    const baseURL = "https://localhost:7012/";

    useEffect(() => {
        axios.get(`${baseURL}api/Advertising/GetALL`).then((response) => {
            setAdvertising(response.data)
        })
    }, [])



    return (
        <>


            <section id='info-bar'>

                <div className='container'>


                    <div className='info-border mt-5'>


                        <div className='row'>

                            {advertising.map((item, i) => (
                                <div className='col-lg-3 col-md-6 col-sm-12 info-bar-free' fade key = {i}>


                                    <div className='info-bar-free'>

                                        <div className='info-bar-menu'>

                                            <div>
                                                <img src={`data:image/png;base64,${item.image}`} alt="" />
                                            </div>



                                            <div>
                                                <div>

                                                    <b>
                                                    {item.title}</b>
                                                </div>

                                                <div>
                                                    <span>{item.description}</span>

                                                </div>


                                            </div>

                                            <div className='border-right-solid solid-sm'></div>


                                        </div>

                                    </div>


                                </div>


                            ))
                            }
                            {/* <div className='col-lg-3 col-md-6 col-sm-12 info-bar-free'>


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

                                        <div className='border-right-solid solid-x'></div>

                                    </div>

                                </div>


                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12 info-bar-free'>


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

                                        <div className='border-right-solid solid-sm'></div>


                                    </div>

                                </div>



                            </div>


                            <div className='col-lg-3 col-md-6 col-sm-12  info-bar-free'>



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



                            </div> */}


                        </div>

                    </div>



                </div>




            </section>

        </>
    )
}

export default Advertising