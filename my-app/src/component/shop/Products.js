import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import ReactPaginate from "react-paginate";
import Swal from "sweetalert2";
import "swiper/css";
import "swiper/css/navigation";
import Icon from '@mdi/react';
import { mdiStarOutline, mdiShoppingOutline, mdiHeartOutline, mdiEyeOutline } from '@mdi/js';
import '../../assets/css/product.css'

import product2 from '../../assets/img/product2.jpg'







function Product(props) {

  const url = "https://localhost:7012";

  const ref = useRef(null);
   const[token,setToken]=React.useState();
  //Get token of current user send backend by request header

  const navigate = useNavigate();
  
 
 


  const [products, setProducts] = useState([]);
  const[config,setConfig]=React.useState([]);

  //paginate items start
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 4;

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")));
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
    if(token){
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      }
      setConfig(config);
    }
    else{
      const config=null;
      setConfig(config);
    }

  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };
  //paginate items end

  //sweet alert
  const Success = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2400,
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
    timer: 2400,
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

  //Add products to basket method
  async function AddBasket(id) {
    if(config!=null){
      await axios
      .post(`${url}/api/Basket/AddBasket?id=${id}`, null, config)
      .then((res) => {
        if (res.data.status === "success" || res.status === 200) {
          Success.fire({
            icon: "success",
            title: "Product successfully added",
          });
          axios.get(`${url}/api/Basket/Getbasketcount`, config).then((res) => {
            props.setbasketcount(res.data);
          });
        }
      })
      
    }else{ navigate("/login");}
   
    
      
    ref.current?.scrollIntoView();
  }

  return (

    <div>

      <div className='container'>

        <div className='row'>
          {currentItems?.map((product, i) => {
            return (
              <div className='col-lg-3 col-md-6 col-sm-6' key={i} ref={ref}>
                <div className="card-pr" cart-id="1">

                  <div className="imagesBx">
                    {/* <img
                      src={`data:image/jpeg;base64,${product.image}`}
                      alt=""
                    /> */}
                    <img src={product2} alt="" />
                    <img className='rear-img' src={product2} alt="images" />
                   
                    <ul className="icon-shop">
                      <li>
                        <Icon path={mdiHeartOutline} size={1} />
                        <span>Add to WishList</span>
                      </li>
                      <li onClick={() => AddBasket(product.id)}>
                        <Icon path={mdiShoppingOutline} size={1} />
                        <span >Add to Cart</span>

                      </li>

                      <Link className="detail" href="product-detail.html">
                        <li>
                          <Icon path={mdiEyeOutline} size={1} color="black" />
                          <span>View Details</span>
                        </li>
                      </Link>

                    </ul>
                  </div>

                  <div className="productName">
                    <h4>{product.categoryName} </h4>
                    <Link href="">{product.name}</Link>
                  </div>
                  <div className="star text-center mt-3">
                    <Icon path={mdiStarOutline} size={1} color="gold" />
                    <Icon path={mdiStarOutline} size={1} color="gold" />
                    <Icon path={mdiStarOutline} size={1} color="gold" />
                    <Icon path={mdiStarOutline} size={1} color="gold" />
                    <Icon path={mdiStarOutline} size={1} color="gold" />
                  </div>
                  <div className="price text-center mt-3">
                    <span>{product.price}$</span>
                    <span><del>35$</del></span>
                  </div>

                </div>

              </div>
            );
          })}
          {/* <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className="card-pr" cart-id="1">

              <div className="imagesBx">
                <img src={product1} alt="images" />

                <img className='rear-img' src={product2} alt="images" />
                <ul className="icon-shop">
                  <li>
                    <Icon path={mdiHeartOutline} size={1} />
                    <span>Add to WishList</span>
                  </li>
                  <li>
                    <Icon path={mdiShoppingOutline} size={1} />
                    <span>Add to Cart</span>

                  </li>

                  <Link className="detail" href="product-detail.html">
                    <li>
                      <Icon path={mdiEyeOutline} size={1} color="black" />
                      <span>View Details</span>
                    </li>
                  </Link>

                </ul>
              </div>

              <div className="productName">
                <h4>Manufacturer </h4>
                <Link href="">Almond Protein Superfoods</Link>
              </div>
              <div className="star text-center mt-3">
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
              </div>
              <div className="price text-center mt-3">
                <span>25$</span>
                <span><del>35$</del></span>
              </div>

            </div>

          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className="card-pr" cart-id="1">

              <div className="imagesBx">
                <img src={product1} alt="images" />

                <img className='rear-img' src={product2} alt="images" />
                <ul className="icon-shop">
                  <li>
                    <Icon path={mdiHeartOutline} size={1} />
                    <span>Add to WishList</span>
                  </li>
                  <li>
                    <Icon path={mdiShoppingOutline} size={1} />
                    <span>Add to Cart</span>

                  </li>

                  <Link className="detail" href="product-detail.html">
                    <li>
                      <Icon path={mdiEyeOutline} size={1} color="black" />
                      <span>View Details</span>
                    </li>
                  </Link>

                </ul>
              </div>

              <div className="productName">
                <h4>Manufacturer </h4>
                <Link href="">Almond Protein Superfoods</Link>
              </div>
              <div className="star text-center mt-3">
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
              </div>
              <div className="price text-center mt-3">
                <span>25$</span>
                <span><del>35$</del></span>
              </div>

            </div>

          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className="card-pr" cart-id="1">

              <div className="imagesBx">
                <img src={product1} alt="images" />

                <img className='rear-img' src={product2} alt="images" />
                <ul className="icon-shop">
                  <li>
                    <Icon path={mdiHeartOutline} size={1} />
                    <span>Add to WishList</span>
                  </li>
                  <li>
                    <Icon path={mdiShoppingOutline} size={1} />
                    <span>Add to Cart</span>

                  </li>

                  <Link className="detail" href="product-detail.html">
                    <li>
                      <Icon path={mdiEyeOutline} size={1} color="black" />
                      <span>View Details</span>
                    </li>
                  </Link>

                </ul>
              </div>

              <div className="productName">
                <h4>Manufacturer </h4>
                <Link href="">Almond Protein Superfoods</Link>
              </div>
              <div className="star text-center mt-3">
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
              </div>
              <div className="price text-center mt-3">
                <span>25$</span>
                <span><del>35$</del></span>
              </div>

            </div>

          </div> */}




        </div>



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
  )
}

export default Product