import React, { useState, useEffect } from 'react'
import axios from "axios";
import '../../assets/css/benefit.css'



function Benefit() {

    const [benefit, setBenefit] = useState([])

    const baseURL = "https://localhost:7012/";

    useEffect(() => {
        axios.get(`${baseURL}api/Benefit/GetALL`).then((response) => {
            setBenefit(response.data)
        })
    }, [])


    

    return (
        <>
            <section>
                <div className='container'>

                    <h3 className='benfit-title'> Superfood Benefits</h3>
                    <div className='row'>
                        {benefit.map((item, i) => (
                            <div className='col-lg-3 col-md-6 col-sm-6 benfit-info ' fade key={i}>
                                <img className='benfit-img' src={`data:image/png;base64,${item.image}`} alt="" />
                                <p className='benfit-des'>{item.title}</p>
                            </div>

                        ))
                        }
                       

                    </div>


                </div>

            </section>

        </>
    )
}

export default Benefit