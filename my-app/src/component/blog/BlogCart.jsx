import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import "../../assets/css/blog.css"

import blogImageTwo from '../../assets/img/blog2.jpg'
import ReactPaginate from "react-paginate";



function BlogCart() {

    const baseURL = "https://localhost:7012/";

    const [blog, setBlog] = useState([])

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    let rowNumber = (currentPage - 1) * itemsPerPage;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(blog.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(blog.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, blog]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blog.length;
        setItemOffset(newOffset);
        setCurrentPage(event.selected + 1);
    };

    

    useEffect(() => {
        axios.get(`${baseURL}api/Blog/GetALL`).then((response) => {
            setBlog(response.data)
        })
    }, [])




    return (
        <>
            <section>

                <div className='container'>
                    <div className='row'>
                    {blog.map((item, i) => (
  <div className='col-lg-4 col-md-6 col-sm-6 mt-2' fade key={i}>
    <div className="blog-item">
      <div className="blog-content">
        <NavLink className="detail" to={`/blogDetail/${item.id}`}>
          <div className='blog-img'>
            <img src={`data:image/jpg;base64,${item.image}`} alt="" />
          </div>
        </NavLink>
        <h2 className="blog-title">
          <a href="blog.html">{item.title}</a>
        </h2>
        <div className="blog-meta">
          <p>{new Date(item.createdAt).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}</p>
        </div>
        <p className="blog-desc">
          {item.description.length > 50
            ? item.description.slice(0, 50) + "..."
            : item.description}
        </p>
      </div>
    </div>
  </div>
))}


<ReactPaginate
                                breakLabel="..."
                                nextLabel="next>"
                                onPageChange={handlePageClick}
                                marginPagesDisplayed={0}
                                pageRangeDisplayed={3}
                                pageCount={pageCount}
                                previousLabel="<previous"
                                renderOnZeroPageCount={null}
                                containerClassName="pagination"
                                pageLinkClassName="page-num"
                                previousClassName="page-num"
                                nextLinkClassName="page-num"
                                activeLinkClassName="active"
                            />


 
                    


                    </div>
                </div>
            </section>

        </>
    )
}

export default BlogCart