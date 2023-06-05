import React from 'react'
import Icon from '@mdi/react';
import { mdiStarOutline, mdiShoppingOutline, mdiHeartOutline, mdiEyeOutline } from '@mdi/js';
import '../../assets/css/product.css'
import product1 from '../../assets/img/product1.jpg'
import product2 from '../../assets/img/product2.jpg'
import product3 from '../../assets/img/product3.jpg'
import product4 from '../../assets/img/product4.jpg'
import { Link } from 'react-router-dom';





function Product(props) {
  return (
    <div>

      <div className='container'>

        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div class="card-pr" cart-id="1">

              <div class="imagesBx">
                <img src={product1} alt="images" />

                <img className='rear-img' src={product2} alt="images" />
                <ul class="icon-shop">
                  <li>
                    <Icon path={mdiHeartOutline} size={1} />
                    <span>Add to WishList</span>
                  </li>
                  <li>
                    <Icon path={mdiShoppingOutline} size={1} />
                    <span>Add to Cart</span>

                  </li>

                  <Link class="detail" href="product-detail.html">
                    <li>
                      <Icon path={mdiEyeOutline} size={1} color="black" />
                      <span>View Details</span>
                    </li>
                  </Link>

                </ul>
              </div>

              <div class="productName">
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
              <div class="price text-center mt-3">
                <span>25$</span>
                <span><del>35$</del></span>
              </div>

            </div>

          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div class="card-pr" cart-id="1">

              <div class="imagesBx">
                <img src={product2} alt="images" />

                <img className='rear-img' src={product1} alt="images" />
                <ul class="icon-shop">
                  <li>
                    <Icon path={mdiHeartOutline} size={1} />
                    <span>Add to WishList</span>
                  </li>
                  <li>
                    <Icon path={mdiShoppingOutline} size={1} />
                    <span>Add to Cart</span>

                  </li>

                  <Link class="detail" href="product-detail.html">
                    <li>
                      <Icon path={mdiEyeOutline} size={1} color="black" />
                      <span>View Details</span>
                    </li>
                  </Link>

                </ul>
              </div>

              <div class="productName">
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
              <div class="price text-center mt-3">
                <span>25$</span>
                <span><del>35$</del></span>
              </div>

            </div>

          </div>


          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div class="card-pr" cart-id="1">

              <div class="imagesBx">
                <img src={product3} alt="images" />

                <img className='rear-img' src={product4} alt="images" />
                <ul class="icon-shop">
                  <li>
                    <Icon path={mdiHeartOutline} size={1} />
                    <span>Add to WishList</span>
                  </li>
                  <li>
                    <Icon path={mdiShoppingOutline} size={1} />
                    <span>Add to Cart</span>

                  </li>

                  <Link class="detail" href="product-detail.html">
                    <li>
                      <Icon path={mdiEyeOutline} size={1} color="black" />
                      <span>View Details</span>
                    </li>
                  </Link>

                </ul>
              </div>

              <div class="productName">
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
              <div class="price text-center mt-3">
                <span>25$</span>
                <span><del>35$</del></span>
              </div>

            </div>

          </div>



          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div class="card-pr" cart-id="1">

              <div class="imagesBx">
                <img src={product4} alt="images" />

                <img className='rear-img' src={product2} alt="images" />
                <ul class="icon-shop">
                  <li>
                    <Icon path={mdiHeartOutline} size={1} />
                    <span>Add to WishList</span>
                  </li>
                  <li>
                    <Icon path={mdiShoppingOutline} size={1} />
                    <span>Add to Cart</span>

                  </li>

                  <Link class="detail" href="product-detail.html">
                    <li>
                      <Icon path={mdiEyeOutline} size={1} color="black" />
                      <span>View Details</span>
                    </li>
                  </Link>

                </ul>
              </div>

              <div class="productName">
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
              <div class="price text-center mt-3">
                <span>25$</span>
                <span><del>35$</del></span>
              </div>

            </div>

          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div class="card-pr" cart-id="1">

              <div class="imagesBx">
                <img src={product4} alt="images" />

                <img className='rear-img' src={product2} alt="images" />
                <ul class="icon-shop">
                  <li>
                    <Icon path={mdiHeartOutline} size={1} />
                    <span>Add to WishList</span>
                  </li>
                  <li>
                    <Icon path={mdiShoppingOutline} size={1} />
                    <span>Add to Cart</span>

                  </li>

                  <Link class="detail" href="product-detail.html">
                    <li>
                      <Icon path={mdiEyeOutline} size={1} color="black" />
                      <span>View Details</span>
                    </li>
                  </Link>

                </ul>
              </div>

              <div class="productName">
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
              <div class="price text-center mt-3">
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