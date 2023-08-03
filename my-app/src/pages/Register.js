import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useNavigate } from 'react-router-dom';
import backgroundPage from '../assets/img/backgroundPage.jpg'
import Swal from "sweetalert2";
import Navbar from "../component/layouts/Navbar";
import "../assets/css/register.css";

function Register() {


  const url = "https://localhost:7012";

  const navigate = useNavigate();
  
  //Prop for api start
  const [fullname, setFullname] = useState();
  const [username, setUsername] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();


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


  async function register(e) {
    e.preventDefault();
    await axios
      .post(
        `${url}/api/Account/SignUp`,
        {
          email: mail,
          password: password,
          fullname: fullname,
          username: username,
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        if(response.data.statusMessage = "Failed"){
          Swal.fire({
            position: "top-end",
            icon: "error",            
            text: response.data.errors,
            showConfirmButton: true,
           
          });
        }
        if(response.data.statusMessage = "Succes"){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You registered succesfully",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(response);
          navigate("/login");
        }      
      
       
      })
      .catch(function (error) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something went wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }


  return (
    <>

<Navbar basketcount={basketcount} />
      <div className='backgroundBlog' style={{marginTop:"92px"}}>
        <img src={backgroundPage} alt="" />
        <h2>Register</h2>
        <h6><Link to="/">Home </Link> / Register</h6>
      </div>
       <section
        id="register-area"
        style={{
          backgroundImage: "url(/images/Register-image.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12  col-sm-12">
              <div className="main">
                <div className="box">
                  <div className="form">
                    <h2>Register</h2>
                    <form onSubmit={(e) => register(e)}>
                      <div className="inputBox">
                        <input
                          type="text"
                          required="required"
                          onChange={(e) => setFullname(e.target.value)}
                        />
                        <p>Fullname *</p>
                        <i />
                      </div>
                      <div className="inputBox">
                        <input
                          type="text"
                          required="required"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <p>Username *</p>
                        <i />
                      </div>
                      <div className="inputBox">
                        <input
                          type="text"
                          required="required"
                          onChange={(e) => setMail(e.target.value)}
                        />
                        <p>Email *</p>
                        <i />
                      </div>
                      <div className="inputBox">
                        <input
                          type="password"
                          required="required"
                          id="passwordId"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <p>Password *</p>
                        <i />
                      </div>
                   
                  
                      <input type="submit" defaultValue="Sign up" style={{marginTop :"27px"}} />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default Register