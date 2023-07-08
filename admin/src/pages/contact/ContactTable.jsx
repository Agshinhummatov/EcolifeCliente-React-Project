import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import swal from "sweetalert2";
import moment from 'moment';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar';


function ContactTable() {

    let count = 1;

    const url = 'https://localhost:7012';

    const [contact, setContact] = useState([]);

     //Setting Authorization Token in Request Headers using Bearer Authentication
     let token = JSON.parse(localStorage.getItem("token"));

     const config = {
         headers: { Authorization: `Bearer ${token}` },
     };
 



    //Retrieves all Contact data from the API.
    const getAllContact = async () => {
        try {
            const response = await axios.get(`${url}/api/Contact/GetAll`);
            setContact(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAllContact();
    }, []);



     //Deletes an Contact from the API.
     const DeleteContact = async (id) => {
        await axios.delete(`${url}/api/Contact/Delete/${id}`,config,)
            .then((res) => {
                swal.fire("", "Deleted Contact", "success");
                console.log(res);
                getAllContact();
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

                    <h2 className='text-center mt-5'>
                        contact Table

                    </h2>

                    <div className="d-flex">
                        <div className="col-lg-12 grid-margin stretch-card my-5">

                            <div >
                                <Link to="/contactCreate">
                                    <button className="btn btn-success my-2" style={{ float: "right" }}>Create</button>
                                </Link>

                            </div>
                            <Table striped bordered hover variant="dark" >
                                <thead>
                                    <tr style={{ textAlign: "center" }}>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Subject</th>
                                        <th>Create date</th>
                                      
                                        <th>Settings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        contact.map((contact, index) => (
                                            <tr key={index} style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                <td>{count++}</td>
                                                
                                                <td className="py-1" dangerouslySetInnerHTML={{ __html: contact.name }}></td>
                                                <td className="py-1" dangerouslySetInnerHTML={{ __html: contact.subject }}></td>
                                                <td>{moment(contact.createdAt).format('DD-MM-YYYY HH:mm:ss')}</td>
                                               
                                                <td>


                                                    <Link to={`/contact/detail/${contact.id}`}>
                                                        <button className="btn btn-outline-info" style={{ marginRight: "15px" }}>Detail</button>

                                                    </Link>

                                                   
                                                    <button
                                                        onClick={() => DeleteContact(contact.id)}
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

export default ContactTable