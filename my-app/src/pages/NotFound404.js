import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteFoundImage404 from '../assets/img/404.jpg'
import Navbar from "../component/layouts/Navbar";

function NotFound404() {

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


        <div >
            <Navbar basketcount={basketcount} />
            <div className='col-12  text-center' style={{ background: "#fdd100" }}>

                <img  src={NoteFoundImage404} style={{ width: "500px", height: "500px" }} alt="" />
            </div>


        </div>
    )
}

export default NotFound404