import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import payment from '../../assets/img/payment.png'
import Icon from '@mdi/react';
import { mdiStarOutline } from '@mdi/js';
// import { Carousel } from "react-carousel-minimal";




function ProductDetail() {

    // const data = [
    //     {
    //         image: product1,

    //     },
    //     {
    //         image: product2,

    //     },
    //     {
    //         image: product3,

    //     },
    //     {
    //         image: product4,

    //     }

    // ];


    // const captionStyle = {
    //     fontSize: '2em',
    //     fontWeight: 'bold',
    // }
    // const slideNumberStyle = {
    //     fontSize: '20px',
    //     fontWeight: 'bold',
    // }


    return (
        <div>


            <div className='d-flex mt-5'>
                <div className='col-6'>
                    <div className="App">
                        {/* <div style={{ textAlign: "center" }}>

                            <div style={{
                                padding: "0 20px"
                            }}>
                                <Carousel
                                    data={data}
                                    time={2000}
                                    width="850px"
                                    height="500px"
                                    captionStyle={captionStyle}
                                    radius="10px"
                                    slideNumber={true}
                                    slideNumberStyle={slideNumberStyle}
                                    captionPosition="bottom"
                                    automatic={true}
                                    dots={true}
                                    pauseIconColor="white"
                                    pauseIconSize="40px"
                                    slideBackgroundColor="darkgrey"
                                    slideImageFit="cover"
                                    thumbnails={true}
                                    thumbnailWidth="100px"
                                    style={{
                                        textAlign: "center",
                                        maxWidth: "850px",
                                        maxHeight: "500px",
                                        margin: "40px auto",
                                    }}
                                />
                            </div>
                        </div> */}
                    </div>

                </div>

                <div class="col-6">

                    <div class="product-info">


                        <h1>Almond Protein Superfoods</h1>
                        <div className="star">
                            <Icon path={mdiStarOutline} size={1} color="gold" />
                            <Icon path={mdiStarOutline} size={1} color="gold" />
                            <Icon path={mdiStarOutline} size={1} color="gold" />
                            <Icon path={mdiStarOutline} size={1} color="gold" />
                            <Icon path={mdiStarOutline} size={1} color="gold" />
                        </div>

                        <div class="sale-text mt-3">
                            <div class="sale"><span>$160.00</span> </div>

                            <div class="sale-info"><span>50% Off</span></div>

                        </div>



                        <h3>$175.00</h3>
                        <div class="line-text">

                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum
                                has been the industrys standard dummy text ever since the 1500s, when an unknown
                                printer
                                took a galley of type and scrambled it to make a type specimen book.</span>

                        </div>



                        <div class="stock">

                            <h6>Avalibility: In Stock</h6>
                            <h6>Quantity</h6>
                        </div>


                        <div class="number">
                            <span class="minus">-</span>
                            <input type="text" value="1" />
                            <span class="plus">+</span>
                        </div>


                        <div class="button-buy gap">

                            <button type="button" class="btn ">ADD TO CARD</button>

                            <button type="button" class="btn  buy-now">BUY NOW</button>

                        </div>

                        <div className='pro-payment mt-5'>
                            <img src={payment} alt="" />

                        </div>

                    </div>

                </div>

            </div>
            <div className='col-12 mt-5'>

                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab className='tab-desc' eventKey="Description" title="Description">

                        <p> Stock up on the perfect afternoon snack, lunchtime side or baking choice with a Three-Pound Bag of Honeycrisp Apples from Good & Gather™. Boasting the perfect blend of sweet and crisp flavors, these delicious Honeycrisp apples promise to hit the spot when you’re craving something fresh and tasty, and the crisp, juicy texture is sure to satisfy.
                            Every product that carrie</p>

                        <h2>Item Specifics</h2>

                        <ul className='mt-5'>

                            <li>
                                <h4></h4>: Thailand
                            </li>
                            <li>
                                Packing: 400g pack
                            </li>
                            <li>
                                Packing: 400g pack
                            </li>
                            <li>
                                Origin: Thailand
                            </li>
                            <li>
                                Origin: Thailand
                            </li>
                        </ul>

                    </Tab>
                    <Tab eventKey="PRODUCT DETAILS" title="PRODUCT DETAILS">
                        Tab content for Profile
                    </Tab>
                    <Tab eventKey="longer-tab" title="Loooonger Tab">
                        Tab content for Loooonger Tab
                    </Tab>

                </Tabs>


            </div>


        </div>
    )
}

export default ProductDetail