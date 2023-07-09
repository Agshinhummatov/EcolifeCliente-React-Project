import React from 'react'
import Icon from '@mdi/react';
import { mdiCashSync, mdiCreditCardOutline, mdiFacebook, mdiInstagram, mdiYoutube, mdiPhone } from '@mdi/js';
import '../../assets/css/layout.css'


function Footer() {

  return (

    <>


      <footer className="text-center text-lg-start footer-bg text-muted mt-5">

        <section className="d-flex justify-content-center justify-content-lg-between p-4 ">







        </section>



        <section className="">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">




              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold footer-info mb-4">
                INFORMATION
                </h6>
                <p>
                  <a className="footer-info">Delivery</a>
                </p>
                <p>
                  <a href="#!" className="footer-info">About us </a>
                </p>
                <p>
                  <a href="#!" className="footer-info"> Sitemap</a>
                </p>
                <p>
                  <a href="#!" className="footer-info">Contact us</a>
                </p>


                <p className='mt-5'>
                  <a href="#!" className="footer-info">Secure payment:</a>

                </p>
                <Icon path={mdiCashSync} size={1} />
                <Icon path={mdiCreditCardOutline} size={1} />
              </div>



              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="footer-info text-uppercase fw-bold mb-4">
                  Company
                </h6>

                <p>
                  <a href="#!" className="footer-info ">Stores</a>
                </p>
                <p>
                  <a href="#!" className="footer-info">Legal Notice</a>
                </p>
                <p>
                  <a href="https://www.bakuelectronics.az/careers.html" className="footer-info">Prices drop</a>

                </p>

                <p>
                  <a href="https://www.bakuelectronics.az/corporate-sales.html" className="footer-info">New products</a>

                </p>

                <p>
                  <a href="https://www.bakuelectronics.az/corporate-sales.html" className="footer-info"> Best sales</a>

                </p>
                <Icon path={mdiFacebook} size={1} color="blue" />
                <Icon path={mdiInstagram} size={1} color="magenta" />
                <Icon path={mdiYoutube} size={1} color="red" />



              </div>



              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase footer-info fw-bold mb-4">Buyers</h6>
                <p className='footer-info'>Delivery and payment</p>
                <p className='footer-info'>

                Warranty
                </p>
                <p> </p>
                <p className='footer-info'>  Buy something</p>
                <p className='mt-5 footer-info'>© 2018 - 2023 Copyright © Posthemes. All Rights Reserved.</p>
                <p className='footer-info'> Privacy policy</p>

              </div>



              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h4 className=" fw-bold mb-4 footer-organic">100% Organic & Cruelty Free</h4>
                <h6 className="footer-info fw-bold mb-4">Find a location nearest you. See Our Stores</h6>
                <p className='footer-info'>

                  <Icon path={mdiPhone} size={1} /><b>143</b>
                </p>
                <h6 className="footer-info fw-bold mb-4">Email: support@ecolife.com</h6>
                <h6 className="footer-info fw-bold mb-4">Site Preparation</h6>
                <h5 className="footer-info fw-bold mb-4">Ecolife</h5>


              </div>

            </div>

          </div>
        </section>



      </footer>




    </>
  )
}

export default Footer