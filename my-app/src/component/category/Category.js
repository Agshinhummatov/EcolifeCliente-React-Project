import React, { useState, useEffect } from 'react'
import axios from "axios";
import "../../assets/css/category.css"
import { Link } from 'react-router-dom'

function Category() {

    const [category, setCategory] = useState([])

    const baseURL = "https://localhost:7012/";

    useEffect(() => {
        axios.get(`${baseURL}api/Category/GetALL`).then((response) => {
            setCategory(response.data)
        })
    }, [])

    return (
        <>
            <section>
                <div className='container'>

                    <div className='row'>

                        {category?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 4).map((item, i) => (
                            <div className='col-lg-3 col-md-6 col-sm-12   mt-5'>



                                <Link className='category-img d-flex category-img justify-content-sm-center justify-content-xs-center ' href=""><img src={`data:image/jpg;base64,${item.categoryImage}`} alt="" /></Link>
                                <h5 className='category-title'>{item.name}</h5>
                                <p className='category-count'>17 Products</p>
                            </div>

                        ))
                        }
   
                    </div>

                </div>

            </section>

        </>
    )
}

export default Category