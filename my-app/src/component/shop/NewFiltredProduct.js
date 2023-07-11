import React, { useState, useEffect } from "react";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";

import Product from "./Products";

function NewFiltredProduct() {

    //All Product Url
    const baseUrlProduct = "https://localhost:7012/api/Product/GetAll";

    //All Category Url
    const baseUrlCategory = "https://localhost:7012/api/Category/GetAll";

    //Filter items
    const [items, setItems] = useState([]);
    const [value, setValue] = useState("");
    const [categorys, setCategorys] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    let result = [];

    //get Products from db
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


    return (

        <div>

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
                                            <ul className="filter-container">
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
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 product-shop">
                            {result.length == 0 ? (
                                <h1>"There is no product for your search"</h1>
                            ) : (
                                <Product Products={result} />
                            )}
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default NewFiltredProduct