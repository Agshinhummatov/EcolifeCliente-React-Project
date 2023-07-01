import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from '../../components/layout/Sidebar';
import moment from 'moment';

function BenefitDetail() {

    const { id } = useParams();
    const baseURL = "https://localhost:7012";
    const [benefit, setBenefit] = useState({})


    
    const getById = async (id) => {
        try {
            const response = await axios.get(`${baseURL}/api/Benefit/GetById/${id}`);
            setBenefit(response.data);
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

        <div>

            <div className='d-flex'>
                <div className='col-2'>

                    <Sidebar />

                </div>


                <div className='col-10  mt-5'>
                    <div className='container'>
                    <h2 className='text-center mt-5'>Benefit Detail</h2>

                    <div className='mt-5'>
                        <h4>Image</h4>
                        <img style={{
                            width: "300px",
                            height: "200px",
                            borderRadius: "unset",
                        }}
                            src={`data:image/png;base64,${benefit.image}`}
                            alt="benefitimage"
                        />
                    </div>

                    <div>

                        <h5 className='mt-3'>Title</h5>
                        <input class="form-control"
                            type="text"
                            defaultValue={benefit.title}
                            disabled
                        />

                       

                        <h5 className='mt-3'>Create date</h5>
                        <input
                            className="form-control"
                            type="text"
                            value={moment(benefit.createdAt).format('DD-MM-YYYY HH:mm:ss')}
                            disabled
                        />


                        <h5 className='mt-3'>Update date</h5>
                        <input
                            class="form-control"
                            type="text"
                            value={moment(benefit.updateDate).format('DD-MM-YYYY HH:mm:ss') !== '01-01-0001 00:00:00' ? moment(benefit.updateDate).format('DD-MM-YYYY HH:mm:ss') : 'Not updated'}
                            disabled />




                    </div>


                    <Link to="/benefit">
                        <button className="btn btn-secondary mt-3 my-2" style={{ float: "left" }}>Back</button>
                    </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BenefitDetail