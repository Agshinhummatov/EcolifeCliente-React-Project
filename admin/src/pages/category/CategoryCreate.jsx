import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar'

function CategoryCreate() {

    const navigate = useNavigate();
    const url = 'https://localhost:7012';

    const [category, setCategory] = useState([]);
    const [categoryImage, setCategoryImage] = useState();
    const [showImage, setShowImage] = useState(null);
    const [name, setName] = useState('');
    const [isNameEmpty, setIsNameEmpty] = useState(false);

    //Setting Authorization Token in Request Headers using Bearer Authentication
    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    //Get All Category API

    const getAllCategory = async () => {
        try {
            const response = await axios.get(`${url}/api/category/GetAll`, config);
            setCategory(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);


    const newCategory = {
        photo: categoryImage,
        name: name,
    };


    //Create Category


    const CreateCategory = async (e) => {
        e.preventDefault();

        if (name.trim() === '') {
            setIsNameEmpty(true);
            return;
        }



        const formData = new FormData();
        for (const [key, value] of Object.entries(newCategory)) {
            formData.append(key, value);
        };

        await axios.post(`${url}/api/Category/Create`, formData, config, {
            headers: {
                Accept: "*/*"
            }
        })
            .then((res) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Category Created',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
                navigate('/categoryTable');
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Category not Created',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err);
                navigate('/CategoryCreate');
            });


    };

    //File Upload Handler: Setting Image and Displaying Preview
    const fileUploadHandler = async (e) => {
        const files = e.target.files[0];
        setCategoryImage(files);
        setShowImage(URL.createObjectURL(files));
    };




    return (

        <>

            <div className='d-flex'>

                <div className='col-2'>

                    <Sidebar />

                </div>


                <div className='col-10 mt-5'>

                    <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
                        <h2 className='my-5' style={{ textAlign: "center" }}>Create Category</h2>
                        <Form onSubmit={(e) => CreateCategory(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <p>Image</p>
                                {
                                    showImage !== null ?
                                        <img
                                            style={{
                                                width: "200px",
                                                height: "100px",
                                                marginBottom: "10px",
                                                borderRadius: "unset",
                                            }}
                                            src={showImage}
                                            alt="header image"
                                        /> : null
                                }
                                <Form.Control
                                    type="file"
                                    required
                                    onChange={(e) => fileUploadHandler(e)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Name"
                                    required
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = 'Enter Name'}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>




                            <Button variant="outline-primary" type="submit">
                                Create
                            </Button>
                            <Link to="/categoryTable">
                                <Button variant="outline-dark" type="submit" className='mx-2'>
                                    Cancel
                                </Button>
                            </Link>
                        </Form>
                    </div>



                </div>


            </div>



        </>
    )
}

export default CategoryCreate