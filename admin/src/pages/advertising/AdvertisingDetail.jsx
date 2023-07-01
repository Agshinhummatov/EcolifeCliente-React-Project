import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from '../../components/layout/Sidebar';
import moment from 'moment';


function AdvertisingDetail() {

    const { id } = useParams();
    const baseURL = "https://localhost:7012";
    const [advertising, setAdvertising] = useState({})



    //Get By Id Advertising API
    const getById = async (id) => {
        try {
            const response = await axios.get(`${baseURL}/api/advertising/GetById/${id}`);
            setAdvertising(response.data);
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
                        <h2 className='text-center mt-5'>Advertising Detail</h2>

                        <div className='mt-5'>
                            <h4>Image</h4>
                            <img style={{
                                width: "300px",
                                height: "200px",
                                borderRadius: "unset",
                            }}
                                src={`data:image/png;base64,${advertising.image}`}
                                alt="advertisingimage"
                            />
                        </div>

                        <div>

                            <h5 className='mt-3'>Title</h5>
                            <input class="form-control  "
                                type="text"
                                defaultValue={advertising.title}
                                disabled
                            />

                            <h5 className='mt-3'>Description</h5>
                            <input
                                class="form-control"
                                type="text"
                                defaultValue={advertising.description}
                                disabled />


                            <h5 className='mt-3'>Create date</h5>
                            <input
                                className="form-control"
                                type="text"
                                value={moment(advertising.createdAt).format('DD-MM-YYYY HH:mm:ss')}
                                disabled
                            />


                            <h5 className='mt-3'>Update date</h5>
                            <input
                                class="form-control"
                                type="text"
                                value={moment(advertising.updateDate).format('DD-MM-YYYY HH:mm:ss') !== '01-01-0001 00:00:00' ? moment(advertising.updateDate).format('DD-MM-YYYY HH:mm:ss') : 'Not updated'}
                                disabled />




                        </div>


                        <Link to="/advertising">
                            <button className="btn btn-secondary mt-3 my-2" style={{ float: "left" }}>Back</button>
                        </Link>
                    </div>
                </div>

            </div>



        </>
    )
}

export default AdvertisingDetail