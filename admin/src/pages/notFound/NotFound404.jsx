import React from 'react'
import Sidebar from '../../components/layout/Sidebar';
import NoteFoundImage404 from '../../assets/images/404.jpg';

function NotFound404() {


    return (

        <>
            <div className='d-flex'>

                <div className='col-2'>

                    <Sidebar />

                </div>

                <div className='col-10 mt-5 text-center' style={{background:"#fdd100"}}>

                <img className='mt-5' src={NoteFoundImage404} style={{ width: "500px", height: "500px" }} alt="" />
                </div>
            </div>


        </>
    )
}

export default NotFound404