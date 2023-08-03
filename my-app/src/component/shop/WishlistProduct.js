import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiDelete, mdiPlus, mdiMinus } from '@mdi/js';
import Alert from 'react-bootstrap/Alert';

function WishlistProduct() {

  const url = "https://localhost:7012";

  let total = 0;

  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };


  const [wishlists, setWishlists] = useState([]);


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

  //Get Basket from Api
  async function GetBasket() {
    try {
      await axios
        .get(`${url}/api/Wishlist/GetWishlistProducts`, config)
        .then((res) => {
          setWishlists(res.data);
        });
    } catch (error) {
      console.error('An error occurred while fetching the wishlist products:', error);
    }
  }

  useEffect(() => {
    GetBasket();
  }, []);



  //Delete Basket Product
  const DeleteBasket = async (id) => {
    await axios
      .delete(`${url}/api/Wishlist/DeleteWishlistProduct?id=${id}`, config)
      //   .then(function (response) {

      //     // Swal.fire("", "Deleted", "success");
      //     // axios.get(`${url}/api/Basket/Getbasketcount`, config)
      //     // .then((res) => {
      //     //   props.setbasketcount(res.data);
      //     // });
      //   })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
        console.log(error);
      });

    GetBasket();
  };




  return (


    <div>
      <div>
        <section id="table-area">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-12 d-flex align-items-center h-100">
                <div className="card border-0 w-100">
                  <div className="card-header d-flex justify-content-between align-items-center bg-light pt-4">
                    <h5 className="card-title h4 mb-0 py-2">Wishlist List</h5>
                    <Link to="/shop">
                      <button type="button" className="btn btn-secondary my-btn">
                        Add New Product
                      </button>
                    </Link>
                  </div>
                  <div className="card-body">
                    {wishlists && wishlists.length > 0 ? (
                      <table id="productTable" className="table table-bordered align-middle table-hover">
                        <thead className="table-color">
                          <tr>
                            <th className="text-center">Image</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Price of Product</th>
                            <th className="text-center">Setting</th>
                          </tr>
                        </thead>
                        <tbody className="table-body">
                          {wishlists.map((basket, i) => (
                            <tr key={i}>
                              <td style={{ display: "flex", justifyContent: "center" }}>
                                <NavLink to={`/productDetail/${basket.product.id}`}>
                                  <img
                                    style={{
                                      width: "100px",
                                      height: "90px",
                                      borderRadius: "unset",
                                    }}
                                    src={`data:image/jpeg;base64,${basket.product.image}`}
                                    alt=""
                                  />
                                </NavLink>
                              </td>
                              <td className="text-center">{basket.product.name}</td>
                              <td className="text-center">{basket.product.price.toFixed(2)} $</td>
                              <td style={{ textAlign: "center" }}>
                                <Icon path={mdiDelete} size={1} color={"red"} onClick={() => DeleteBasket(basket.product.id)} style={{ cursor: 'pointer' }} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p>{[

                        'danger',

                      ].map((variant) => (
                        <Alert className="text-center" key={variant} variant={variant}>
                          No items in the wishlist.
                        </Alert>
                      ))}</p>
                    )}

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>


    </div>
  )
}

export default WishlistProduct