import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import swal from "sweetalert2";
import moment from 'moment';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar';

function AdvertisingTable() {

    let count = 1;

    const url = 'https://localhost:7012';

    const [advertising, setAdvertising] = useState([]);

    const getAllAdvertising = async () => {
        await axios.get(`${url}/api/advertising/GetAll`)
            .then((res) => {
                setAdvertising(res.data);
            });
    }

    useEffect(() => {
        getAllAdvertising();
    }, []);

    const Deleteadvertising = async (id) => {
        await axios.delete(`${url}/api/Advertising/Delete/${id}`)
            .then((res) => {
                swal.fire("", "Deleted Advertising", "success");
                console.log(res);
                getAllAdvertising();
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


                <div className='col-10'>

                    <h1 className='text-center mt-5'>
                        Advertising

                    </h1>

                    <div className="d-flex">
                        <div className="col-lg-12 grid-margin stretch-card my-5">
                            <h2 className="mx-auto">Advertising Table</h2>
                            <div className='d-flex justify-content-between'>
                                <Link to="/advertisingCreate">
                                    <button className="btn btn-success my-2" style={{ float: "right" }}>Create</button>
                                </Link>
                                <Link to="/">
                                    <button className="btn btn-success my-2" style={{ float: "right" }}>Dashboard</button>
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
                                        <th>Setting</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        advertising.map((advertising, index) => (
                                            <tr key={index} style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                <td>{count++}</td>
                                                <td>
                                                    <img style={{
                                                        width: "100px",
                                                        height: "70px",
                                                        borderRadius: "unset",
                                                    }}
                                                        src={`data:image/png;base64,${advertising.image}`}
                                                        alt="advertisingimage"
                                                    />
                                                </td>
                                                <td className="py-1" dangerouslySetInnerHTML={{ __html: advertising.title }}></td>
                                                <td>{moment(advertising.createdAt).format('DD-MM-YYYY HH:mm:ss')}</td>
                                                <td>{moment(advertising.updateDate).format('DD-MM-YYYY HH:mm:ss') !== '01-01-0001 00:00:00' ? moment(advertising.updateDate).format('DD-MM-YYYY HH:mm:ss') : 'Not updated'}</td>
                                                <td>


                                                    <Link to={`/advertising/detail/${advertising.id}`}>
                                                        <button className="btn btn-outline-info" style={{ marginRight: "15px" }}>Detail</button>

                                                    </Link>

                                                    <Link to={`/advertisingUpdate/${advertising.id}`}>
                                                        <button className="btn  btn-outline-primary" style={{ marginRight: "15px" }}>Update</button>
                                                    </Link>
                                                    <button
                                                        onClick={() => Deleteadvertising(advertising.id)}
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

export default AdvertisingTable