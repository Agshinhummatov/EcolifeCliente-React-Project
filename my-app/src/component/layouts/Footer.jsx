import React from 'react'
import Icon from '@mdi/react';
import { mdiCashSync, mdiCreditCardOutline, mdiFacebook, mdiInstagram, mdiYoutube, mdiPhone } from '@mdi/js';



function Footer() {
  return (

    <>


      <footer className="text-center text-lg-start bg-black text-muted mt-5">

        <section className="d-flex justify-content-center justify-content-lg-between p-4 ">







        </section>



        <section className="">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">




              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Məlumat
                </h6>
                <p>
                  <a className="text-reset ">Kampaniyalar</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Müştəri kartı</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Brendlər</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Bloq</a>
                </p>


                <p className='mt-5'>
                  <a href="#!" className="text-reset">Ödəniş:</a>

                </p>
                <Icon path={mdiCashSync} size={2} />
                <Icon path={mdiCreditCardOutline} size={2} />
              </div>



              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Şirkət
                </h6>

                <p>
                  <a href="#!" className="text-reset ">Şirkət haqqında</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Mağazalar</a>
                </p>
                <p>
                  <a href="https://www.bakuelectronics.az/careers.html" className="text-reset">Vakansiyalar</a>

                </p>

                <p>
                  <a href="https://www.bakuelectronics.az/corporate-sales.html" className="text-reset">Korporativ satışlar</a>

                </p>

                <p>
                  <a href="https://www.bakuelectronics.az/corporate-sales.html" className="text-reset">Bizə qoşulun:</a>

                </p>
                <Icon path={mdiFacebook} size={1.5} color="blue" />
                <Icon path={mdiInstagram} size={1.5} color="magenta" />
                <Icon path={mdiYoutube} size={1.5} color="red" />



              </div>



              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4">Alıcılara</h6>
                <p>Çatdırılma və ödəniş</p>
                <p>

                  Zәmanәt
                </p>
                <p> Servis mərkəzləri</p>
                <p>  Nisyə alış</p>
                <p className='mt-5'>© 2018 - 2023 bakuelectronics.az</p>
                <p > Məxfilik siyasəti</p>

              </div>



              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h4 className="text-white fw-bold mb-4">Məlumat mərkəzi</h4>
                <h6 className="text-white fw-bold mb-4">9:00 - 20:00 (hər gün)</h6>
                <p>

                  <Icon path={mdiPhone} size={1.5} /><b>143</b>
                </p>
                <h6 className="text-white fw-bold mb-4">info@bakuelectronics.az</h6>
                <h6 className="text-white fw-bold mb-4">Saytın hazırlanması</h6>
                <h5 className="text-white fw-bold mb-4">Турум-бурум</h5>


              </div>

            </div>

          </div>
        </section>



      </footer>




    </>
  )
}

export default Footer