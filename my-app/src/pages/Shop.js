import React, { useState, useEffect } from "react";
import axios from "axios";
import Brand from '../component/shop/Brand'
import Products from '../component/shop/Products'
import Navbar from "../component/layouts/Navbar";
import '../assets/css/shop.css'
import Weight from '../component/shop/Weight'
import Color from '../component/shop/Color'
import backgroundPage from '../assets/img/backgroundPage.jpg'
import { Link } from 'react-router-dom';
import ShopCategory from '../component/shop/ShopCategory'
import Icon from '@mdi/react';
import { mdiStarOutline } from '@mdi/js';
import "swiper/css";
import "swiper/css/navigation";
import { MDBRange } from 'mdb-react-ui-kit';

function Shop() {


  //All Product Url
  const baseUrlProduct = "https://localhost:7012/api/Product/GetAll";

  //All Category Url
  const baseUrlCategory = "https://localhost:7012/api/Category/GetAll";

  //Filter items
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const [categorys, setCategorys] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [priceRange, setPriceRange] = useState(0);


  let result = [];

  //get Products from db


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


  async function getAllProducts() {
    await axios.get(baseUrlProduct).then((response) => {
      setItems(response.data);
      setFilteredProducts(response.data);
    });
  }

  //Get categories from db
  async function getAllCategories() {
    await axios.get(baseUrlCategory).then((response) => {
      setCategorys(response.data);
    });
  }
  useEffect(() => {
    getAllProducts();
    getAllCategories();
    getFilteredList("All");
  }, []);

  //Filter for category method
  function getFilteredList(category) {
    if (category === "All") {
      setFilteredProducts(items);
    } else {
      var filteredProducts = items?.filter(
        (item) => item.category && item.category.name.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filteredProducts);
    }
  }

  const [activeCategory, setActiveCategory] = useState("All");

  // const handleClick = (category) => {
  //     setActiveCategory(category);
  //     getFilteredList(category);
  // };

  //Search from filtered items method
  result = filteredProducts.filter((i) =>
    i.name.toLowerCase().includes(value.toLowerCase())
  );


  async function getProductsByCategory(categoryId) {
    try {
      const url = `https://localhost:7012/api/Product/GetCategoryByProduct/${categoryId}`;
      const response = await axios.get(url);
      setFilteredProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  // ...

  // Kategoriye tıklandığında çalışacak fonksiyon
  const handleClick = async (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProducts(items);
    } else {
      const selectedCategory = categorys.find(
        (item) => item.name === category
      );
      if (selectedCategory) {
        await getProductsByCategory(selectedCategory.id);
      }
    }
  };

  const [selectedRating, setSelectedRating] = useState(null);

  const handlePriceRangeChange = (event) => {
    const rangeValue = parseInt(event.target.value);
    setPriceRange(rangeValue);
  
    const filteredProducts = items.filter(
      (item) => item.price <= rangeValue && (selectedRating === null || item.rates === selectedRating)
    );
    setFilteredProducts(filteredProducts);
  };
  
  const handleRatingFilter = (rating) => {
    if (rating === selectedRating) {
      // İki kez tıklanırsa seçimi sıfırla
      setSelectedRating(null);
      setFilteredProducts(items.filter((item) => item.price <= priceRange));
    } else {
      // Yıldıza göre filtrele
      setSelectedRating(rating);
      const filteredProducts = items.filter(
        (item) => item.price <= priceRange && item.rates === rating
      );
      setFilteredProducts(filteredProducts);
    }
  };

  return (

    <>

      <Navbar basketcount={basketcount} />
      <div className='backgroundBlog'>
        <img src={backgroundPage} alt="" />
        <h2>Shop</h2>
        <h6><Link to="/" >Home </Link> / Shop</h6>
      </div>

      {/* <div className='container'>
        <div className='row'>

          <div className='col-3 mt-5'>
            <ShopCategory />
            <Brand />
            <Weight />
            <Color />


          </div>
          <div className='col-9 product-shop'>
            <div className='col-12'>
              <Products  setbasketcount={setbasketcount} />
            </div>

          </div>


        </div>
      </div> */}

      <section id="product-area">
        <div className="container">
          <div className="row">
            <div className="header">
              <h3>All PRODUCTS :</h3>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="brand">
                    <div className="header">
                      <h1>Filter</h1>
                    </div>
                    <div className="content">
                      <input
                        placeholder="search Product"
                        type="text"
                        id="message"
                        name="message"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        className="search-Product"
                      />
                      <div>
                        <div className='category-br'></div>


                        <MDBRange
                          min="0"
                          max="500"
                          onChange={handlePriceRangeChange}
                          defaultValue={priceRange}
                          id='customRange'
                          label='Price range'
                        />

                        <div className='category-br'></div>
                        <h4 className="mt-2">Rating</h4>

                        {[1, 2, 3, 4, 5].map((rating) => (
                          <Icon
                            key={rating}
                            path={mdiStarOutline}
                            size={1}
                            color={rating <= selectedRating ? 'gold' : 'gray'}
                            onClick={() => handleRatingFilter(rating)}
                            style={{ cursor: 'pointer' }}
                          />
                        ))}



                      </div>


                      <div className='col-3 mt-3 brand-body'>


                        <h2 className='text-center'>Category</h2>
                        <div className='category-br'></div>

                        <ul className='category-name'>

                          <li className={`filter-button ${activeCategory === "All" ? "active" : ""
                            }`} ><button onClick={() => handleClick("All")} className='brand-link'>All<span>(1)</span></button></li>

                          {categorys?.map((category, index) => {
                            return (
                              <li key={index}
                                className={`filter-button ${activeCategory === category.name ? "active" : ""
                                  }`} > <button onClick={() => handleClick(category.name)} className='brand-link'> {category.name}<span>(1)</span></button></li>

                            );
                          })}
                          <li ><button className='brand-link'>100g<span>(1)</span></button></li>

                        </ul>



                      </div>


                      {/* <ul className="filter-container">
                        <li
                          className={`filter-button ${activeCategory === "All" ? "active" : ""
                            }`}
                        >
                          <a
                            onClick={() => handleClick("All")}
                            style={{ color: "black" }}
                          >
                            All
                          </a>
                        </li>
                        {categorys?.map((category, index) => {
                          return (
                            <li
                              key={index}
                              className={`filter-button ${activeCategory === category.name ? "active" : ""
                                }`}
                            >
                              <a
                                style={{ color: "white" }}
                                onClick={() => handleClick(category.name)}
                              >
                                {category.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 product-shop">
              {result.length == 0 ? (
                <h1>"There is no product for your search"</h1>
              ) : (
                <Products setbasketcount={setbasketcount} Products={result} />
              )}
            </div>
          </div>
        </div>
      </section>



    </>
  )
}

export default Shop