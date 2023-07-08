import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from '../../components/layout/Sidebar';
import moment from 'moment';
function ContactDetail() {

    const { id } = useParams();
    const baseURL = "https://localhost:7012";
    const [contact, setcontact] = useState({})


    //Get By Id contact API
    const getById = async (id) => {
        try {
            const response = await axios.get(`${baseURL}/api/contact/GetById/${id}`);
            setcontact(response.data);
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    window.location.href = '/404';
                } else if (error.response.status === 400) {
                    window.location.href = '/400';
                }
            } else {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        getById(id)
    }, []);



    return (

        <>

            <div className='d-flex'>
                <div className='col-2'>

                    <Sidebar />

                </div>


                <div className='col-10  mt-5'>

                    <div className='container'>
                        <h2 className='text-center mt-5'>Contact Detail</h2>


                        <div>

                            <h5 className='mt-3'>Name</h5>
                            <input class="form-control  "
                                type="text"
                                defaultValue={contact.name}
                                disabled
                            />


                            <h5 className='mt-3'>Email</h5>
                            <input class="form-control  "
                                type="text"
                                defaultValue={contact.email}
                                disabled
                            />

                            <h5 className='mt-3'>Subject</h5>
                           
                            <input class="form-control  "
                                type="text"
                                defaultValue={contact.subject}
                                disabled
                            />

                            <h5 className='mt-3'>Content</h5>
                            <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                type="text"
                                defaultValue={contact.content}
                                disabled />


                            <h5 className='mt-3'>Create date</h5>
                            <input
                                className="form-control"
                                type="text"
                                value={moment(contact.createdAt).format('DD-MM-YYYY HH:mm:ss')}
                                disabled
                            />


                         




                        </div>


                        <Link to="/contactTable">
                            <button className="btn btn-secondary mt-3 my-2" style={{ float: "left" }}>Back</button>
                        </Link>
                    </div>
                </div>

            </div>



        </>
    )
}

export default ContactDetail