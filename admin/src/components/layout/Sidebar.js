import React from 'react'
import { Link,} from "react-router-dom";
import '../../assets/css/sidebar/sidebar.css'
import '@fortawesome/fontawesome-free/css/all.css';

function Sidebar() {
  

  
  return (
    <>


      <div className="sidebar">
        <ul className="sidebar-menu">
          <li className="menu-item ">
            <i className="fa fa-home"></i>

           <Link to="/dashborad"> Dashborad</Link>
          
          </li>
          <li className="menu-item">
            <i className="fa fa-user"></i>
            <Link to="/banner"> Banner</Link>
          </li>
          <li className="menu-item">
            <i className="fa fa-user"></i>
            <Link to="/advertising">Advertising</Link>
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
