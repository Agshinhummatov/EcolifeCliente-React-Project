import React from 'react'
import Icon from '@mdi/react';
import blogImageOne from '../../assets/img/blog1.jpg'
import { mdiAccount, mdiClockTimeEight, mdiCalendarCheckOutline } from '@mdi/js';


function BlogInfo() {

  

    return (
        <>
            <section>
                <div className='col-12'>


                    <h2 className='mt-5'>The Moment You Need To Remove Garlic From The Menu</h2>

                    <p> <span> Posted by <Icon path={mdiAccount} size={0.8} /> : Demo Posthemes  </span> <span> <Icon path={mdiClockTimeEight} size={0.8} />12/01/2022 02:30:33</span> <span><Icon path={mdiCalendarCheckOutline} size={0.8} /> Organic</span>  </p>

                    <img className='blog-detail-img' src={blogImageOne} alt="" />

                    <p className='mt-5'>With Halloween creeping up and the weather starting to feel colder we want to inspire you to get a little bit creative in the kitchen this festive period, so we’ve treated you to a round-up of our favourite seasonal recipes from our most-loved foodie bloggers.

                        We’ve cherry picked a mix of sweet and savoury recipes, that we’re sure will get both adults and kids in the Halloween mood. However, if dressing up and going out trick or treating isn’t your thing, then that’s completely fine with us too, these recipes are just as perfect for a cosy autumnal night in.</p>

                </div>

            </section>
        </>
    )
}

export default BlogInfo