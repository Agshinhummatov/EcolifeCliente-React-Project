import React from 'react'


function Color() {
    return (
        <> 
            <div className='col-3 mt-3 '>


                <h3 className='text-center'>Color</h3>
                <div className='color-br'></div>

                <ul className='color-name'>
                   
                    <li><button className='color-link'>Red<span>(1)</span></button></li>
                    <li><button className='color-link'>Blue<span>(1)</span></button></li>
                    <li><button className='color-link'>Black<span>(1)</span></button></li>
                </ul>

                

            </div>
            <hr />

        </>
    )
}

export default Color