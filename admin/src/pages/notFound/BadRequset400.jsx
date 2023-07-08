import React from 'react'
import Sidebar from '../../components/layout/Sidebar';
import NoteFoundImage400 from '../../assets/images/400.jpg';

function BadRequset400() {
    return (

        <>
        
            <div className='d-flex'>

                <div className='col-2'>

                    <Sidebar />

                </div>

                <div className='col-10 mt-5 text-center' style={{ background: "#ffffff" }}>

                    <img className='mt-5' src={NoteFoundImage400} style={{ width: "556px", height: "428px" }} alt="" />
                </div>
            </div>


        </>
    )
}

export default BadRequset400