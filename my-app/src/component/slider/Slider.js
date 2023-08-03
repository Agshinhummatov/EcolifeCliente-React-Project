import React, { useState, useEffect } from 'react'
import axios from "axios";
// import sliderLogo from '../../assets/img/slider.jpg'

import Carousel from 'react-bootstrap/Carousel';
import '../../assets/css/slider.css'
// import { keyboard } from '@testing-library/user-event/dist/keyboard';

function Slider() {

  const [sliders, setSliders] = useState([])

  const baseURL = "https://localhost:7012/";

  useEffect(() => {
    axios.get(`${baseURL}api/Slider/GetALL`).then((response) => {
      setSliders(response.data)
    })
  }, [])


  return (
    <> 
       <div style={{marginTop:"92px"}}>
      <Carousel >
       
     { sliders.map((item,i) => (
             
          <Carousel.Item fade key = {i}>
            <img 
              className="d-block w-100"
              src={`data:image/jpg;base64,${item.image}`}
              alt="First slide"
            />
            <Carousel.Caption>

              <h3 className='slider-title'>{item.title}</h3>
              <p className='silder-des'>{item.description}</p>

            </Carousel.Caption>
          </Carousel.Item>
         
      
         ))
      }
      </Carousel>

     
      </div>
    </>
  )
}

export default Slider