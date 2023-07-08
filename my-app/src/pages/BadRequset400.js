import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteFoundImage400 from '../assets/img/400.jpg'
import Navbar from "../component/layouts/Navbar";

function BadRequset400() {

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
            <div className='d-flex'>



                <div className='col-12 mt-5 text-center' style={{ background: "#ffffff" }}>

                    <img className='mt-5' src={NoteFoundImage400} style={{ width: "556px", height: "428px" }} alt="" />
                </div>


            </div>
        </>
    )
}

export default BadRequset400