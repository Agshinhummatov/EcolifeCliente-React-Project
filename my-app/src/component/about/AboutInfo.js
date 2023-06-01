import React from 'react'
import AboutLogo from '../../assets/img/about.jpg'
import '../../assets/css/about.css'
import Icon from '@mdi/react';
import { mdiFacebook ,mdiTwitter,mdiInstagram,mdiLinkedin,mdiPinterest  } from '@mdi/js';


function AboutInfo() {
    return (
        <>
            <div className='container'>
                <div className='about-info'>

                    <div className='col-6'>

                        <img src={AboutLogo} alt="" />
                    </div>

                    <div className='col-6'>




                        <h3>About Our Online Store</h3>
                        <p>Our mission is to provide the best & safest products we can get and also products which are in harmony with nature. Nature has been enriched with amazing things.
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
                            I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</p>

                        <div className='d-flex '>
                            <Icon path={mdiFacebook} size={1} />
                            <Icon path={mdiTwitter} size={1} />
                            <Icon path={mdiInstagram} size={1} />
                            <Icon path={mdiLinkedin} size={1} />
                            <Icon path={mdiPinterest} size={1} />
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default AboutInfo