import React from 'react'
import Icon from '@mdi/react';
import { mdiStarOutline } from '@mdi/js';
import '../../assets/css/product.css'
import product1 from '../../assets/img/product1.jpg'
import product2 from '../../assets/img/product2.jpg'
import product3 from '../../assets/img/product3.jpg'
import product4 from '../../assets/img/product4.jpg'





function Product(props) {
  return (
    <div>

      <div className='container'>


        <section id="product1" className="section-p1">


          <div className="pro-container">
            <div className="pro">
              <div className='product-images'>
                <img className='product-img' src={product1} alt="" />
              
              </div>
              <div className="des">
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                </div>
                <h4>$78</h4>
              </div>
              <a href="#"><i className="ri-shopping-cart-2-line cart"></i></a>
            </div>
            <div className="pro">
              <img src={product2} alt="" />
              <div className="des">
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                </div>
                <h4>$78</h4>
              </div>
              <a href="#"><i className="ri-shopping-cart-2-line cart"></i></a>
            </div>
            <div className="pro">
              <img src={product3} alt="" />
              <div className="des">
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                </div>
                <h4>$78</h4>
              </div>
              <a href="#"><i className="ri-shopping-cart-2-line cart"></i></a>
            </div>
            <div className="pro">
              <img src={product4} alt="" />
              <div className="des">
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                  <Icon path={mdiStarOutline} size={1} color="gold" />
                </div>
                <h4>$78</h4>
              </div>
              <a href="#"><i className="ri-shopping-cart-2-line cart"></i></a>
            </div>

          </div>
        </section>











      </div>


    </div>
  )
}

export default Product