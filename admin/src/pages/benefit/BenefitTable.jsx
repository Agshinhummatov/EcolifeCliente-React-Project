import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import swal from "sweetalert2";
import moment from 'moment';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar';

function BenefitTable() {

    let count = 1;
    const url = 'https://localhost:7012';

    const [benefit, setBenefit] = useState([]);

      //Setting Authorization Token in Request Headers using Bearer Authentication
      let token = JSON.parse(localStorage.getItem("token"));

      const config = {
          headers: { Authorization: `Bearer ${token}` },
      };
  

      //Retrieves all Benefit data from the API.
      const getAllBenefit = async () => {
        try {
          const response = await axios.get(`${url}/api/benefit/GetAll`);
          setBenefit(response.data);
        } catch (error) {
          console.error(error);
        }
      };


    useEffect(() => {
        getAllBenefit();
    }, []);


     //Deletes an Benefit from the API.
    const DeleteBenefit = async (id) => {
        await axios.delete(`${url}/api/Benefit/Delete/${id}`,config,)
            .then((res) => {
                swal.fire("", "Deleted Benefit", "success");
                console.log(res);
                getAllBenefit();
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
                        Benefit Table


                    </h2>

                    <div className="d-flex">
                        <div className="col-lg-12 grid-margin stretch-card my-5">

                            <div >
                                <Link to="/benefitCreate">
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
                                        benefit.map((benefit, index) => (
                                            <tr key={index} style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                <td>{count++}</td>
                                                <td>
                                                    <img style={{
                                                        width: "100px",
                                                        height: "70px",
                                                        borderRadius: "unset",
                                                    }}
                                                        src={`data:image/png;base64,${benefit.image}`}
                                                        alt="Benefitimage"
                                                    />
                                                </td>
                                                <td className="py-1" dangerouslySetInnerHTML={{ __html: benefit.title }}></td>
                                                <td>{moment(benefit.createdAt).format('DD-MM-YYYY HH:mm:ss')}</td>
                                                <td>{moment(benefit.updateDate).format('DD-MM-YYYY HH:mm:ss') !== '01-01-0001 00:00:00' ? moment(benefit.updateDate).format('DD-MM-YYYY HH:mm:ss') : 'Not updated'}</td>
                                                <td>


                                                    <Link to={`/benefit/detail/${benefit.id}`}>
                                                        <button className="btn btn-outline-info" style={{ marginRight: "15px" }}>Detail</button>

                                                    </Link>

                                                    <Link to={`/benefitUpdate/${benefit.id}`}>
                                                        <button className="btn  btn-outline-primary" style={{ marginRight: "15px" }}>Update</button>
                                                    </Link>
                                                    <button
                                                        onClick={() => DeleteBenefit(benefit.id)}
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

export default BenefitTable