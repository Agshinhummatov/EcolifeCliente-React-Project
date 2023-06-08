import React from 'react'
import Icon from '@mdi/react';
import { mdiStarOutline, mdiShoppingOutline, mdiHeartOutline, mdiEyeOutline } from '@mdi/js';
import '../../assets/css/product.css'
import product1 from '../../assets/img/product1.jpg'
import product2 from '../../assets/img/product2.jpg'

import { Link } from 'react-router-dom';





function Product(props) {
  return (
    <div>

      <div className='container'>

        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className="card-pr" cart-id="1">

              <div className="imagesBx">
                <img src={product1} alt="images" />

                <img className='rear-img' src={product2} alt="images" />
                <ul className="icon-shop">
                  <li>
                    <Icon path={mdiHeartOutline} size={1} />
                    <span>Add to WishList</span>
                  </li>
                  <li>
                    <Icon path={mdiShoppingOutline} size={1} />
                    <span>Add to Cart</span>

                  </li>

                  <Link className="detail" href="product-detail.html">
                    <li>
                      <Icon path={mdiEyeOutline} size={1} color="black" />
                      <span>View Details</span>
                    </li>
                  </Link>

                </ul>
              </div>

              <div className="productName">
                <h4>Manufacturer </h4>
                <Link href="">Almond Protein Superfoods</Link>
              </div>
              <div className="star text-center mt-3">
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
              </div>
              <div className="price text-center mt-3">
                <span>25$</span>
                <span><del>35$</del></span>
              </div>

            </div>

          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className="card-pr" cart-id="1">

              <div className="imagesBx">
                <img src={product1} alt="images" />

                <img className='rear-img' src={product2} alt="images" />
                <ul className="icon-shop">
                  <li>
                    <Icon path={mdiHeartOutline} size={1} />
                    <span>Add to WishList</span>
                  </li>
                  <li>
                    <Icon path={mdiShoppingOutline} size={1} />
                    <span>Add to Cart</span>

                  </li>

                  <Link className="detail" href="product-detail.html">
                    <li>
                      <Icon path={mdiEyeOutline} size={1} color="black" />
                      <span>View Details</span>
                    </li>
                  </Link>

                </ul>
              </div>

              <div className="productName">
                <h4>Manufacturer </h4>
                <Link href="">Almond Protein Superfoods</Link>
              </div>
              <div className="star text-center mt-3">
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
              </div>
              <div className="price text-center mt-3">
                <span>25$</span>
                <span><del>35$</del></span>
              </div>

            </div>

          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className="card-pr" cart-id="1">

              <div className="imagesBx">
                <img src={product1} alt="images" />

                <img className='rear-img' src={product2} alt="images" />
                <ul className="icon-shop">
                  <li>
                    <Icon path={mdiHeartOutline} size={1} />
                    <span>Add to WishList</span>
                  </li>
                  <li>
                    <Icon path={mdiShoppingOutline} size={1} />
                    <span>Add to Cart</span>

                  </li>

                  <Link className="detail" href="product-detail.html">
                    <li>
                      <Icon path={mdiEyeOutline} size={1} color="black" />
                      <span>View Details</span>
                    </li>
                  </Link>

                </ul>
              </div>

              <div className="productName">
                <h4>Manufacturer </h4>
                <Link href="">Almond Protein Superfoods</Link>
              </div>
              <div className="star text-center mt-3">
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
              </div>
              <div className="price text-center mt-3">
                <span>25$</span>
                <span><del>35$</del></span>
              </div>

            </div>

          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className="card-pr" cart-id="1">

              <div className="imagesBx">
                <img src={product1} alt="images" />

                <img className='rear-img' src={product2} alt="images" />
                <ul className="icon-shop">
                  <li>
                    <Icon path={mdiHeartOutline} size={1} />
                    <span>Add to WishList</span>
                  </li>
                  <li>
                    <Icon path={mdiShoppingOutline} size={1} />
                    <span>Add to Cart</span>

                  </li>

                  <Link className="detail" href="product-detail.html">
                    <li>
                      <Icon path={mdiEyeOutline} size={1} color="black" />
                      <span>View Details</span>
                    </li>
                  </Link>

                </ul>
              </div>

              <div className="productName">
                <h4>Manufacturer </h4>
                <Link href="">Almond Protein Superfoods</Link>
              </div>
              <div className="star text-center mt-3">
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
              </div>
              <div className="price text-center mt-3">
                <span>25$</span>
                <span><del>35$</del></span>
              </div>

            </div>

          </div>


        </div>







      </div>


    </div>
  )
}

export default Product