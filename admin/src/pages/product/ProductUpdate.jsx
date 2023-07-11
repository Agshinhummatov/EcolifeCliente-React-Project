import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar';


function ProductUpdate() {

    const { id } = useParams();

    const navigate = useNavigate();

    const url = 'https://localhost:7012';

    const [product, setProduct] = useState([]);
    const [image, setImage] = useState();
    const [showImage, setShowImage] = useState(null);
    const [showHoverImage, setShowHoverImage] = useState(null);
    const [hoverImage, setHoverImage] = useState();

    const [categories, setCategories] = useState([]);
    const [categoryInput, setCategoryInput] = useState();
    const [description, setDescription] = useState();
    const [name, setName] = useState();
    const [count, setCount] = useState();
    const [price, setPrice] = useState();
    const [rates, setRates] = useState();


    //Setting Authorization Token in Request Headers using Bearer AuthenticagetProducttion
    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };


    //Get  by id Product  from API
    const getProduct = async () => {
        try {
            const response = await axios.get(`${url}/api/Product/GetById/${id}`);
            setProduct(response.data);
            setImage(response.data.image);
            setName(response.data.name);
            setDescription(response.data.description);
            setHoverImage(response.data.hoverImage);
            setCount(response.data.count);
            setPrice(response.data.price);
            setRates(response.data.rates);
            setCategoryInput(response.data.categoryId);

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
        getProduct();
        getAllCategory();
    }, []);

    const getAllCategory = async () => {
        try {
            const response = await axios.get(`${url}/api/Category/GetAll`);
            setCategories(response.data);
        } catch (error) {
            console.error(error);
        }
    };







    const newProduct = {
        photo: image,
        hoverPhoto: hoverImage,
        description: description,
        categoryId: categoryInput,
        price: price,
        count: count,
        rates: rates,
        name: name,
    };


    const UpdateProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const [key, value] of Object.entries(newProduct)) {
            formData.append(key, value);
        };

        await axios.put(`${url}/api/Product/Update/${id}`, formData, config, {
            headers: {
                Accept: "*/*"
            }
        })
            .then((res) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Product Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Product not Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err);
            });

        navigate('/productTable');
    };


    //File Upload Handler: Setting Image and Displaying Preview
    const fileUploadHandler = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setShowImage(URL.createObjectURL(file));
    };


    //File Upload Handler: Setting Image and Displaying Preview
    const fileUploadHandlers = async (e) => {
        const files = e.target.files[0];

        setHoverImage(files);
        setShowHoverImage(URL.createObjectURL(files));
    };







    return (

        <>

            <div className='d-flex'>


                <div className='col-2'>

                    <Sidebar />

                </div>

                <div className='col-10 mt-5'>
                    <div className="create-btn-area container" style={{ maxWidth: "500px" }}>
                        <h2 className='my-5' style={{ textAlign: "center" }}>Update Product</h2>
                        <Form onSubmit={(e) => UpdateProduct(e)}>
                            <p>Image</p>
                            {
                                image !== null ?
                                    <img
                                        style={{
                                            width: "200px",
                                            height: "100px",
                                            marginBottom: "10px",
                                            borderRadius: "unset",
                                        }}
                                        src={showImage || `data:image/jpg;base64,${image}`}
                                        alt=""
                                    /> : null
                            }


                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    type="file"
                                    onChange={(e) => fileUploadHandler(e)}
                                />
                            </Form.Group>

                            <p>Hover Image</p>
                            {
                                hoverImage !== null ?

                                    <img
                                        style={{
                                            width: "200px",
                                            height: "100px",
                                            marginBottom: "10px",
                                            borderRadius: "unset",
                                        }}
                                        src={showHoverImage || `data:image/jpg;base64,${hoverImage}`}
                                        alt=""
                                    /> : null
                            }

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    type="file"
                                    onChange={(e) => fileUploadHandlers(e)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name={name}
                                    placeholder={name}
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    name={description}
                                    placeholder={description}
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    name={price}
                                    placeholder={price}
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Count</Form.Label>
                                <Form.Control
                                    type="number"
                                    name={count}
                                    placeholder={count}
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = count}
                                    onChange={(e) => setCount(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Rates</Form.Label>
                                <Form.Control
                                    type="number"
                                    name={rates}
                                    placeholder={rates}
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = rates}
                                    onChange={(e) => setRates(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Select
                                    aria-label="Product Category"
                                    value={categoryInput} // Set the selected category ID as the value
                                    onChange={(e) => setCategoryInput(e.target.value)}
                                >
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Button variant="outline-primary" type="submit">
                                Update
                            </Button>
                            <Link to="/productTable">
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

export default ProductUpdate