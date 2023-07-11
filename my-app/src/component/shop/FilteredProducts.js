import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import ReactPaginate from "react-paginate";
import '../../assets/css/product.css'

function FilteredProducts(props) {
    
    let products = props.filteredProducts;

    const ref = useRef(null);

    //Pagineate items
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3;

    //Paginate function
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(products?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products?.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, products]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products?.length;

        setItemOffset(newOffset);
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };


    return (

        <div>

            <div className='container'>

                <div className='d-flex'>
                    {currentItems?.map((product, i) => {
                        return (
                            <div className='col-lg-4 col-md-6 col-sm-6' key={i} ref={ref}>
                                <div className="card-pr" cart-id="1">

                                    <div className="imagesBx">

                                        <img
                                            src={`data:image/jpeg;base64,${product.image}`}
                                            alt=""
                                        />


                                        <img className='rear-img' src={`data:image/jpeg;base64,${product.hoverImage}`}
                                            alt="" />

                                        <ul className="icon-shop">
                                            {/* <li onClick={() => AddWishlist(product.id)}>
                                                <Icon path={mdiHeartOutline} size={1} />
                                                <span>Add to WishList</span>
                                            </li>
                                            <li onClick={() => AddBasket(product.id)}>
                                                <Icon path={mdiShoppingOutline} size={1} />
                                                <span >Add to Cart</span>

                                            </li> */}

                                            {/* <NavLink className="detail" to={`/productDetail/${product.id}`}>
                                                <li>
                                                    <Icon path={mdiEyeOutline} size={1} color="black" />
                                                    <span>View Details</span>
                                                </li>
                                            </NavLink> */}

                                        </ul>
                                    </div>

                                    <div className="productName">
                                        <Link style={{ fontSize: "15px", color: "#999999" }} href="">{product.categoryName}</Link>
                                        <h4 style={{ fontSize: "20px" }} className="mt-1">{product.name} </h4>

                                    </div>

{/* 
                                    <div className="star text-center mt-3" >

                                        {Array(product.rates).fill().map((_, i) => (
                                            <Icon key={i} path={mdiStarOutline} size={1} color="gold" />
                                        ))}

                                        {Array(totalStars - product.rates).fill().map((_, i) => (
                                            <Icon key={i} path={mdiStarOutline} size={1} color="grey" />
                                        ))}


                                    </div> */}

                                    <div className="price text-center mt-3">
                                        <span>{product.price}$</span>

                                    </div>

                                </div>

                            </div>
                        );
                    })}





                </div>


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
    )
}

export default FilteredProducts