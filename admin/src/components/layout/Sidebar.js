import React from 'react'
import { Link, } from "react-router-dom";
import '../../assets/css/sidebar/sidebar.css'
import '@fortawesome/fontawesome-free/css/all.css';

function Sidebar() {



  return (
    <>


      <div className="sidebar mt-5">
        <ul className="sidebar-menu">
          <li className="menu-item ">
            <i className="fa fa-home"></i>

            <Link to="/dashborad"> Dashborad</Link>

          </li>
          <li className="menu-item">
            <i class="fa-solid fa-dice-d6"></i>
            <Link to="/banner"> Banner</Link>
          </li>
          <li className="menu-item">
            <i class="fa-regular fa-clipboard"></i>
            <Link to="/advertising">Advertising</Link>
          </li>

          <li className="menu-item">
            <i class="fa-brands fa-slideshare"></i>
            <Link to="/aboutInfo">About</Link>
          </li>


          <li className="menu-item">
            <i class="fa-solid fa-chart-line"></i>
            <Link to="/benefit">Benefit</Link>
          </li>


          <li className="menu-item">
            <i class="fa-solid fa-chart-line"></i>
            <Link to="/categoryTable">Category</Link>
          </li>

          <li className="menu-item">
            <i class="fa-brands fa-slideshare"></i>
            <Link to="/slider">Slider</Link>
          </li>

          <li className="menu-item">
            <i class="fa-brands fa-slideshare"></i>
            <Link to="/blogTable">Blog</Link>
          </li>


          <li className="menu-item">
            <i class="fa-brands fa-slideshare"></i>
            <Link to="/productTable">Product</Link>
          </li>

          <li className="menu-item">
            <i class="fa-brands fa-slideshare"></i>
            <Link to="/contactTable">Contact</Link>
          </li>
          <li className="menu-item">
            <i className="fa fa-envelope"></i>
            <span>Mesajlar</span>
          </li>
          <li className="menu-item">
            <i className="fa fa-cog"></i>
            <span>Ayarlar</span>
          </li>
        </ul>
      </div>

    </>
  )
}

export default Sidebar
