import React, { useState, useEffect } from 'react'
import axios from "axios";
import '../../assets/css/about.css'
import Icon from '@mdi/react';

import { mdiFacebook, mdiTwitter, mdiInstagram, mdiLinkedin, mdiPinterest } from '@mdi/js';


function AboutInfo() {


    const [about, setAbout] = useState([])

    const baseURL = "https://localhost:7012/";

    useEffect(() => {
        axios.get(`${baseURL}api/About/GetALL`).then((response) => {
            setAbout(response.data)
        })
    }, [])


    return (
        <>
            <div className='container'>
               
                {about.map((item, i) => (

                    <div className='about-info' fade key={i}>

                        <div className='col-6'>

                            <img src={`data:image/jpg;base64,${item.image}`} alt="" />

                        </div>

                        <div className='col-6'>




                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                            <div className='d-flex '>
                                <Icon path={mdiFacebook} size={1} />
                                <Icon path={mdiTwitter} size={1} />
                                <Icon path={mdiInstagram} size={1} />
                                <Icon path={mdiLinkedin} size={1} />
                                <Icon path={mdiPinterest} size={1} />
                            </div>

                        </div>

                    </div>
                )) }
                
            </div>

           
        </>
    )
}

export default AboutInfo