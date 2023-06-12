
import React from 'react';
import Footer from './component/layouts/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Employee from './pages/Employees';
import Blog from './pages/Blog';
import Navbar from './component/layouts/Navbar';
import Shop from './pages/Shop';
import ShopDetail from './pages/ShopDetail';
import BlogDetail from './pages/BlogDetail';
import Login from './pages/Login';





function App() {
  

  return (

    


      <div className='app'>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopDetail" element={<ShopDetail />} />
          <Route path="/blogDetail" element={<BlogDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </div>




  );
}

export default App;
