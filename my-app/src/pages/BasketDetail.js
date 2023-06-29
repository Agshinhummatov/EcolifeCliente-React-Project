import React, { useState, useEffect } from "react";
import axios from "axios";
import BasketProducts from "../component/shop/BasketProducts";
import Navbar from "../component/layouts/Navbar";


function BasketDetail() {

    const url = "https://localhost:7012";


    //Basket count 
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
  
  
    useEffect(() => {
      getbasketcount();
    }, []);
  
    return (

        <>

      <Navbar basketcount={basketcount} />
            <section
                id="header-area"
                style={{ backgroundImage: 'url("/images/heart-image.webp")' }}
            >
                <div className="container">
                    <div className="row">
                        <div className="head">
                            <h1>Products</h1>
                        </div>
                    </div>
                </div>
            </section>
            <BasketProducts setbasketcount={setbasketcount} />


        </>
    )
}

export default BasketDetail