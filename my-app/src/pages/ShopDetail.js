import axios from "axios";
import React, { useEffect, useState } from "react";
import backgroundPage from '../assets/img/backgroundPage.jpg'
import ProductDetail from '../component/shop/ProductDetail'
import { Link, useParams } from 'react-router-dom';
import Advertising from '../component/advertising/Advertising';
import Product from '../component/shop/Products';
import Category from '../component/category/Category';
import Navbar from "../component/layouts/Navbar";
import FiltredProduct from "../component/shop/FiltredProduct";
import TheBestProductFiltred from "../component/shop/TheBestProductFiltred";



function ShopDetail() {

    const { id } = useParams();

    const url = "https://localhost:7012";

    const [product, setproduct] = useState([]);

    const [basketcount, setbasketcount] = useState(0);

   
    let token = JSON.parse(localStorage.getItem("token"));

    
    const config = {

        headers: { Authorization: `Bearer ${token}` },
    };


    async function getbasketcount() {
        if (token) {
          try {
            const response = await axios.get(`${url}/api/Basket/Getbasketcount`, config);
            setbasketcount(response.data);
          } catch (error) {
            console.error("Error retrieving basket count:", error);
            // Handle the error, e.g., display an error message or take necessary actions
          }
        }
      }
    

    //product for id
    async function Getproduct() {
        await axios.get(`${url}/api/Product/GetById/${id}`).then((res) => {
            setproduct(res.data);
        });
    }


    //basket count
 

    useEffect(() => {
        Getproduct();
        getbasketcount();
      
    }, []);


    return (

        <>
            <Navbar basketcount={basketcount} />
            <div className='backgroundBlog' style={{marginTop:"92px"}}>
                <img src={backgroundPage} alt="" />

                <h2>Shop Detail</h2>
                <h6><Link to='/' href="">Home </Link> /Shop detail</h6>
            </div>



            <div className='container'>
                <div className='d-flex'>



                    <div className='col-12'>


                        <ProductDetail product={product} id={id} setbasketcount={setbasketcount} />

                    </div>

                </div>

                <div className='col-12'>

                    <Advertising />
                </div>


                <h2 className='text-center mt-5'>New Products</h2>
                <div className='col-12'>

                <FiltredProduct setbasketcount={setbasketcount} />
                </div>

                <h2 className='text-center mt-5'>The Best Products</h2>
                <div className='col-12'>

                   <TheBestProductFiltred setbasketcount={setbasketcount} />

                </div>

                <h2 className='text-center mt-5'>Categories:</h2>
                <div className='col-12'>

                    <Category />
                </div>

            </div>
        </>
    )
}

export default ShopDetail