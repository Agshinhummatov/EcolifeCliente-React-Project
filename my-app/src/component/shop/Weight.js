import React from 'react'
import { Link } from 'react-router-dom'

function Weight() {
    return (
        <>

            <div className='col-3 mt-3 brand-body'>


                <h4 className='text-center'>Weight</h4>
                <div className='weight-br'></div>

                <ul className='weight-name'>

                <li>
                    <button className='brand-link'>100g<span>(1)</span></button></li>
                    <li><button className='brand-link'>100g<span>(1)</span></button></li>
                    <li><button className='brand-link'>100g<span>(1)</span></button></li>

                </ul>
                
             

            </div>
            <hr />
        </>
    )
}

export default Weight