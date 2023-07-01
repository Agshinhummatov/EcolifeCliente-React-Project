import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import swal from "sweetalert2";
import moment from 'moment';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar';

function SliderTable() {

    let count = 1;
    const url = 'https://localhost:7012';

    const [slider, setSlider] = useState([]);

    //Setting Authorization Token in Request Headers using Bearer Authentication
    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };


    //Retrieves all Slider data from the API.

    const getAllSlider = async () => {
        try {
          const response = await axios.get(`${url}/api/slider/GetAll`);
          setSlider(response.data);
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(() => {
        getAllSlider();
    }, []);


    //Deletes an Slider from the API.
    const DeleteSlider = async (id) => {
        await axios.delete(`${url}/api/Slider/Delete/${id}`, config,)
            .then((res) => {
                swal.fire("", "Deleted Slider", "success");
                console.log(res);
                getAllSlider();
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
                        Slider Table


                    </h2>

                    <div className="d-flex">
                        <div className="col-lg-12 grid-margin stretch-card my-5">

                            <div >
                                <Link to="/sliderCreate">
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
                                        slider.map((slider, index) => (
                                            <tr key={index} style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                <td>{count++}</td>
                                                <td>
                                                    <img style={{
                                                        width: "100px",
                                                        height: "70px",
                                                        borderRadius: "unset",
                                                    }}
                                                        src={`data:image/png;base64,${slider.image}`}
                                                        alt="sliderImage"
                                                    />
                                                </td>
                                                <td className="py-1" dangerouslySetInnerHTML={{ __html: slider.title }}></td>
                                                <td>{moment(slider.createdAt).format('DD-MM-YYYY HH:mm:ss')}</td>
                                                <td>{moment(slider.updateDate).format('DD-MM-YYYY HH:mm:ss') !== '01-01-0001 00:00:00' ? moment(slider.updateDate).format('DD-MM-YYYY HH:mm:ss') : 'Not updated'}</td>
                                                <td>


                                                    <Link to={`/slider/detail/${slider.id}`}>
                                                        <button className="btn btn-outline-info" style={{ marginRight: "15px" }}>Detail</button>

                                                    </Link>

                                                    <Link to={`/sliderUpdate/${slider.id}`}>
                                                        <button className="btn  btn-outline-primary" style={{ marginRight: "15px" }}>Update</button>
                                                    </Link>
                                                    <button
                                                        onClick={() => DeleteSlider(slider.id)}
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

export default SliderTable