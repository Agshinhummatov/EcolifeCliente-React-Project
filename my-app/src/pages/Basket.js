// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import BasketProducts from "../components/BasketProducts";



// function Basket() {


//   const url = "https://localhost:7012";

//   const [basketcount, setbasketcount] = useState(0);

//   const [products, setProducts] = useState([]);

//   let token = JSON.parse(localStorage.getItem("token"));

//   const config = {
//     headers: { Authorization: `Bearer ${token}` },
//   };


//   async function getbasketcount() {
//     if (token) {
//       await axios.get(`${url}/api/Basket/Getbasketcount`, config).then((res) => {
//         setbasketcount(res.data);
//       });
//     }
//   }


//   // async function GetProducts() {
//   //   if (token) {
//   //     await axios.get(`${url}/api/Basket/GetBasketProducts`, config).then((res) => {
//   //       setProducts(res.data);
//   //     });
//   //   }
//   // }


//   useEffect(() => {
//     getbasketcount();
//     setProducts([]);
//     // GetProducts();
//   }, []);

//   return (
//     <div>

//       <Navbar basketcount={basketcount} />
//       <section
//         id="header-area"
//         style={{ backgroundImage: 'url("/images/heart-image.webp")' }}
//       >
//         <div className="container">
//           <div className="row">
//             {products?.map((product, i) => {
//               return (
//                 <div className="col-3">
//                   <h1>{product.name}</h1>
//                   <h1>{product.price}</h1>

//                 </div>

//               );
//             })}
//           </div>
//         </div>
//       </section>
//       <BasketProducts setbasketcount={setbasketcount} />
//       <Footer />

//     </div>
//   );
// }

// export default Basket;