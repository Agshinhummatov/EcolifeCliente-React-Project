
import React from 'react';
import Footer from './component/layouts/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Employee from './pages/Employees';
import Blog from './pages/Blog';
// import Navbar from './component/layouts/Navbar';
import Shop from './pages/Shop';
import ShopDetail from './pages/ShopDetail';
import BlogDetail from './pages/BlogDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import BasketDetail from './pages/BasketDetail';
import BadRequset400 from './pages/BadRequset400';
import NotFound404 from './pages/NotFound404';

import WishlistDetail from './pages/WishlistDetail';
import NewFiltredProduct from './component/shop/NewFiltredProduct';
// import BlogInfo from './component/blog/BlogInfo';





function App() {
  

  

  return (

    


      <div className='app'>
        {/* <Navbar /> */}
        <Routes>

           <Route path="*" element={<NotFound404 />} />
          <Route path="/404" element={<NotFound404 />} />
          <Route path="/400" element={<BadRequset400 />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productDetail/:id" element={<ShopDetail />} />
          <Route path="/blogDetail/:id" element={<BlogDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/basketDetail" element={<BasketDetail />} />
          <Route path="/wishlistDetail" element={<WishlistDetail />} />
          <Route path="/filtredProduct" element={<NewFiltredProduct />} />
          {/* <Route path="/blogDetail/:id" element={<BlogInfo />} /> */}
          
        </Routes>

        <Footer />
      </div>




  );
}

export default App;
