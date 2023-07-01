import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from '../../components/layout/Sidebar';
import moment from 'moment';

function BlogDetail() {

    const { id } = useParams();
    const baseURL = "https://localhost:7012";
    const [blog, setBlog] = useState({})


    //Get By Id Blog API
    const getById = async (id) => {
        try {
            const response = await axios.get(`${baseURL}/api/blog/GetById/${id}`);
            setBlog(response.data);
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
                        <h2 className='text-center mt-5'>Blog Detail</h2>

                        <div className='mt-5'>
                            <h4>Image</h4>
                            <img style={{
                                width: "300px",
                                height: "200px",
                                borderRadius: "unset",
                            }}
                                src={`data:image/png;base64,${blog.image}`}
                                alt="blogimage"
                            />
                        </div>

                        <div>

                            <h5 className='mt-3'>Title</h5>
                            <input class="form-control  "
                                type="text"
                                defaultValue={blog.title}
                                disabled
                            />

                            <h5 className='mt-3'>Description</h5>
                            <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                 rows="3"
                                type="text"
                                defaultValue={blog.description}
                                disabled />


                            <h5 className='mt-3'>Create date</h5>
                            <input
                                className="form-control"
                                type="text"
                                value={moment(blog.createdAt).format('DD-MM-YYYY HH:mm:ss')}
                                disabled
                            />


                            <h5 className='mt-3'>Update date</h5>
                            <input
                                class="form-control"
                                type="text"
                                value={moment(blog.updateDate).format('DD-MM-YYYY HH:mm:ss') !== '01-01-0001 00:00:00' ? moment(blog.updateDate).format('DD-MM-YYYY HH:mm:ss') : 'Not updated'}
                                disabled />




                        </div>


                        <Link to="/blogTable">
                            <button className="btn btn-secondary mt-3 my-2" style={{ float: "left" }}>Back</button>
                        </Link>
                    </div>
                </div>

            </div>






        </>
    )
}

export default BlogDetail