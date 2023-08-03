import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from '../component/shop/Products'
import Navbar from "../component/layouts/Navbar";
import '../assets/css/shop.css'
import backgroundPage from '../assets/img/backgroundPage.jpg'
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiStarOutline } from '@mdi/js';
import "swiper/css";
import "swiper/css/navigation";


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


  const [priceRange, setPriceRange] = useState(50); // Initial price range value
  const [thumb1Value, setThumb1Value] = useState(25); // Initial thumb1 value
  const [thumb2Value, setThumb2Value] = useState(75);

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

  useEffect(() => {
    // When the priceRange value changes, filter the products accordingly
    const filteredProducts = items.filter(
      (item) => item.price <= priceRange && (selectedRating === null || item.rates === selectedRating)
    );
    setFilteredProducts(filteredProducts);
  }, [priceRange, selectedRating]); // Listen for changes in priceRange and selectedRating

  const handlePriceRangeChange = () => {
    // Use thumb1Value and thumb2Value to calculate the priceRange
    const newPriceRange = thumb2Value - thumb1Value;
    setPriceRange(newPriceRange);
  };

  const handleThumb1Change = (e) => {
    setThumb1Value(parseInt(e.target.value));
    handlePriceRangeChange(); // Update the price range when thumb1Value changes
  };

  const handleThumb2Change = (e) => {
    setThumb2Value(parseInt(e.target.value));
    handlePriceRangeChange(); // Update the price range when thumb2Value changes
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
      <div className='backgroundBlog' style={{ marginTop: "92px" }}>
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


            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="row">
                <div className="col-lg-12 col-sm-12 mt-5">
                  <div className="brand">

                    <div className="content">
                      <input
                        placeholder="Search"
                        type="text"
                        id="message"
                        name="message"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        className="search-Product"
                        style={{ outline: "none", paddingLeft: "10px" }}
                      />
                      <div>
                        <div className='category-br'></div>
                        <div className="range-slider-container">
                          <input
                            type="range"
                            min="0"
                            max="50"
                            value={thumb1Value}
                            onChange={handleThumb1Change}
                            className="range-slider"
                          />
                          <input
                            type="range"
                            min="50"
                            max="500"
                            value={thumb2Value}
                            onChange={handleThumb2Change}
                            className="range-slider"
                          />

                        </div>
                        <div className="thumb-values">
                          <span>Min $:{thumb1Value} </span>
                          <span>Max $:{thumb2Value} </span>
                        </div>
                       

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


                        <div className='category-br'></div>
                      </div>


                      <div style={{ width: "100%" }} className='col-3 mt-3 brand-body'>

                        <div style={{ width: "100%" }}>
                          <h3 >Category</h3>
                          <div className='category-br'></div>

                          <ul className='category-name'>

                            <li className={`filter-button ${activeCategory === "All" ? "active" : ""
                              }`} ><button onClick={() => handleClick("All")} className='brand-link'>All</button></li>

                            {categorys?.map((category, index) => {
                              return (
                                <li key={index}
                                  className={`filter-button ${activeCategory === category.name ? "active" : ""
                                    }`} > <button onClick={() => handleClick(category.name)} className='brand-link'>{category.name}</button></li>

                              );
                            })}


                          </ul>

                        </div>

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
                <h2 className="mt-5 text-center">"There is no product for your search"</h2>
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