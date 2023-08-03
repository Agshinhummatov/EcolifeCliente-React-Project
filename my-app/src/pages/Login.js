import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../component/layouts/Navbar";
import "../assets/css/Login/login.css";
import backgroundPage from '../assets/img/backgroundPage.jpg'

function Login() {




  const navigate = useNavigate();

  const url = "https://localhost:7012";

  //Prop for Api End
  const [email, setEmail] = useState();
  const [logpassword, setLogpassword] = useState();



  //Basket count 
  const [basketcount, setbasketcount] = useState(0);

  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // async function getbasketcount() {
  //   if (token) {
  //     await axios.get(`${url}/api/Basket/Getbasketcount`, config).then((res) => {
  //       setbasketcount(res.data);
  //     });
  //   }
  // }

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


  async function login(e) {
    e.preventDefault();

    await axios
      .post(
        `${url}/api/Account/SignIn`,
        {
          Email: email,
          Password: logpassword,
        }
        // { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        if (response.data.status === "success" || response.status === 200) {
          localStorage.setItem("token", JSON.stringify(response.data));
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Signed in succesfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        } else {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Email or password is wrong!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(response);
      })
      .catch(function (error) { });

  }

  return (
    <>

      <Navbar basketcount={basketcount} />

      <div className='backgroundBlog' style={{ marginTop: "92px" }}>
        <img src={backgroundPage} alt="" />
        <h2>Login</h2>
        <h6><Link to="/">Home </Link> / Login</h6>
      </div>
      <section
        id="login-area"
      // style={{ backgroundImage: "url(/images/login-image.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <div className="main">
                <div className="box">
                  <div className="form">
                    <h2>Login</h2>
                    <form onSubmit={(e) => login(e)}>
                      <div className="inputBox">
                        <input
                          type="email"
                          required="required"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <p>Enter your Email *</p>
                        <i />
                      </div>
                      <div className="inputBox">
                        <input
                          type="password"
                          required="required"
                          id="passwordId"
                          onChange={(e) => setLogpassword(e.target.value)}
                        />
                        <p>Enter your Password</p>
                        <i />
                      </div>
                      <div className="links">
                        <a href="">Forgot Password ?</a>
                        <div className="show">
                          <input type="checkbox" id="checkId" />
                          <a href="">Show Password</a>
                        </div>
                      </div>
                      <input type="submit" defaultValue="Sign in" />
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

export default Login