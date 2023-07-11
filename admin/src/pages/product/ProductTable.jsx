import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import moment from 'moment';
import axios from 'axios';
import Sidebar from '../../components/layout/Sidebar';
import ReactPaginate from "react-paginate";
import "../../assets/css/pagination/pagination.css";

function ProductTable() {

    const url = "https://localhost:7012";

    const [products, setProducts] = useState([]);

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    let rowNumber = (currentPage - 1) * itemsPerPage;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, products]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
        setCurrentPage(event.selected + 1);
    };
    //Paginate ends

    
    //Setting Authorization Token in Request Headers using Bearer Authentication
    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    //sweet alert
    const Success = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    const Reject = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });


    //Get Products from Api
    async function GetProducts() {
        await axios.get(`${url}/api/Product/GetAll`).then((res) => {
            setProducts(res.data);

        });
    }

    useEffect(() => {
        GetProducts();
    }, []);


    //Delete Product
    // const DeleteProduct = async (id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!",
    //     })
    //         .then((result) => {
    //             GetProducts();
    //             if (result.isConfirmed) {
    //                 GetProducts();
    //                 axios
    //                     .delete(`${url}/api/Product/Delete/${id}`,config,)
    //                     .then(function (response) {
    //                         Swal.fire("", "Deleted", "success");
    //                     });
    //                 GetProducts();
    //             }
    //         })
    //         .catch(function (error) {
    //             Swal.fire({
    //                 icon: "error",
    //                 title: "Oops...",
    //                 text: "Something went wrong!",
    //                 footer: '<a href="">Why do I have this issue?</a>',
    //             });
    //             console.log(error);
    //         });
    // };


    //Deletes an Product from the API.
    const DeleteProduct = async (id) => {
        await axios.delete(`${url}/api/Product/Delete/${id}`, config,)
            .then((res) => {
                Swal.fire("", "Deleted Product", "success");
                console.log(res);
                GetProducts();
            })
            .catch((err) => {
                Swal.fire({
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
                        Product Table
                    </h2>

                    <div className="d-flex">
                        <div className="col-lg-12 grid-margin stretch-card my-5">

                            <div >
                                <Link to="/productCreate">
                                    <button className="btn btn-success my-2" style={{ float: "right" }}>Create</button>
                                </Link>

                            </div>
                            <Table striped bordered hover variant="dark" >
                                <thead>
                                    <tr style={{ textAlign: "center" }}>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Create date</th>
                                        <th>Update date</th>
                                        <th>Settings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentItems?.map((product, index) => (
                                            <tr key={index} style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                <td>{++rowNumber}</td>
                                                <td>
                                                    <img style={{
                                                        width: "100px",
                                                        height: "70px",
                                                        borderRadius: "unset",
                                                    }}
                                                        src={`data:image/png;base64,${product.image}`}
                                                        alt="productimage"
                                                    />
                                                </td>
                                                <td className="py-1" dangerouslySetInnerHTML={{ __html: product.name }}></td>
                                                <td>{moment(product.createdAt).format('DD-MM-YYYY HH:mm:ss')}</td>
                                                <td>{moment(product.updateDate).format('DD-MM-YYYY HH:mm:ss') !== '01-01-0001 00:00:00' ? moment(product.updateDate).format('DD-MM-YYYY HH:mm:ss') : 'Not updated'}</td>
                                                <td>


                                                    <Link to={`/productTable/detail/${product.id}`}>
                                                        <button className="btn btn-outline-info" style={{ marginRight: "15px" }}>Detail</button>

                                                    </Link>

                                                    <Link to={`/productUpdate/${product.id}`}>
                                                        <button className="btn  btn-outline-primary" style={{ marginRight: "15px" }}>Update</button>
                                                    </Link>
                                                    <button
                                                        onClick={() => DeleteProduct(product.id)}
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

                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="next>"
                                onPageChange={handlePageClick}
                                marginPagesDisplayed={0}
                                pageRangeDisplayed={3}
                                pageCount={pageCount}
                                previousLabel="<previous"
                                renderOnZeroPageCount={null}
                                containerClassName="pagination"
                                pageLinkClassName="page-num"
                                previousClassName="page-num"
                                nextLinkClassName="page-num"
                                activeLinkClassName="active"
                            />
                        </div>
                    </div>



                </div>

            </div>



        </>
    )
}

export default ProductTable