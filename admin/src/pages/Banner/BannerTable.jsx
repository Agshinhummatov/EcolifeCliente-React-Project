import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import swal from "sweetalert2";
import moment from 'moment';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar';




function BannerTable() {


    let count = 1;

    const url = 'https://localhost:7012';

    const [banner, setBanner] = useState([]);
    
  //Setting Authorization Token in Request Headers using Bearer Authentication
    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    //Retrieves all banner data from the API.
    const getAllBanner = async () => {
        try {
            const response = await axios.get(`${url}/api/banner/GetAll`);
            setBanner(response.data);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        getAllBanner();
    }, []);


    //Deletes an banner from the API.
    const DeleteBanner = async (id) => {
        await axios.delete(`${url}/api/Banner/Delete/${id}`,config,)
            .then((res) => {
                swal.fire("", "Deleted Banner", "success");
                console.log(res);
                getAllBanner();
            })
            .catch((err) => {
                swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
                console.log(err);
            });
    };



    return (

        <>

    
            <div className='d-flex'>

                <div className='col-2'>

                    <Sidebar />

                </div>

                <div className='col-10 mt-5'>

                    <h2 className='text-center mt-4'>
                        Banner Table


                    </h2>

                    <div className="d-flex">
                        <div className="col-lg-12 grid-margin stretch-card my-5">
                           
                            <div >
                                <Link to="/BannerCreate">
                                    <button className="btn btn-success my-2" style={{ float: "right" }}>Create</button>
                                </Link>
                               
                            </div>
                            <Table striped bordered hover variant="dark" >
                                <thead>
                                    <tr style={{ textAlign: "center" }}>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Create date</th>
                                        <th>Update date</th>
                                        <th>Settings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        banner.map((banner, index) => (
                                            <tr key={index} style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                <td>{count++}</td>
                                                <td>
                                                    <img style={{
                                                        width: "100px",
                                                        height: "70px",
                                                        borderRadius: "unset",
                                                    }}
                                                        src={`data:image/png;base64,${banner.image}`}
                                                        alt="bannerimage"
                                                    />
                                                </td>
                                                <td className="py-1" dangerouslySetInnerHTML={{ __html: banner.title }}></td>
                                                <td>{moment(banner.createdAt).format('DD-MM-YYYY HH:mm:ss')}</td>
                                                <td>{moment(banner.updateDate).format('DD-MM-YYYY HH:mm:ss') !== '01-01-0001 00:00:00' ? moment(banner.updateDate).format('DD-MM-YYYY HH:mm:ss') : 'Not updated'}</td>
                                                <td>
                                                   

                                                    <Link to={`/banner/detail/${banner.id}`}>
                                                        <button className="btn btn-outline-info" style={{ marginRight: "15px" }}>Detail</button>

                                                    </Link>

                                                    <Link to={`/BannerUpdate/${banner.id}`}>
                                                        <button className="btn  btn-outline-primary" style={{ marginRight: "15px" }}>Update</button>
                                                    </Link>
                                                    <button
                                                        onClick={() => DeleteBanner(banner.id)}
                                                        type="button"
                                                        className="btn btn-outline-danger"
                                                    >
                                                        Delete
                                                    </button>

                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>



                </div>

            </div>
        </>
    )
}

export default BannerTable