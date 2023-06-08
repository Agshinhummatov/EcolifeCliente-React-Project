import React, { useState, useEffect } from 'react'
import axios from "axios";


import '../../assets/css/banner.css'

function Banner() {

    const [banner, setBanner] = useState([])

    const baseURL = "https://localhost:7012/";

    useEffect(() => {
        axios.get(`${baseURL}api/Banner/GetALL`).then((response) => {
            setBanner(response.data)
        })
    }, [])
    
    


    return (
        <>
            <div className='container'>
                <div className='row '>
                    {banner.map((item, i) => (
                        <div className='col-lg-6 col-md-12 col-sm-12 mt-5 baner-info' fade key = {i}>


                            <h4 className='banner-title'>{item.title}</h4>

                            <span className='banner-description' >{item.description}</span>
                            <img className='baner-img' src={`data:image/jpg;base64,${item.image}`} alt="" />

                        </div>
                    ))
                    }
                   
                </div>

            </div>
        </>
    )
}

export default Banner