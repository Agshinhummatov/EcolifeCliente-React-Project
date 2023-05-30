import React from 'react'
import sliderLogo from '../../assets/img/slider.jpg'
import sliderLogo2 from '../../assets/img/slider2.jpg'
import Carousel from 'react-bootstrap/Carousel';
import  '../../assets/css/slider.css'

function Slider() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sliderLogo}
            alt="First slide"
          />
          <Carousel.Caption>

            <h3  className='slider-title'>Natural Organic Quinoa Peanut Butter</h3>
            <p className='silder-des'>100% Organic,Guleten free,Non Gmo</p>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sliderLogo2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className='slider-title'>Eat Organic Sale 50% off</h3>
            <p className='silder-des'>100% Organic,Guleten free,Non Gmo</p>
          </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>




    </>
  )
}

export default Slider