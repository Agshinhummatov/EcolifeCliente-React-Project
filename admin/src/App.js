
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Employees from './pages//Employees'
import EmployeeDetail from './components/admin/employee/EmployeeDetail';

import BannerTable from './pages/Banner/BannerTable';
import BannerDetail from './pages/Banner/BannerDetail';
import BannerCreate from './pages/Banner/BannerCreate';



function App() {
  return (
    <Router>
      <div className='app'>
        <header>
      
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/banner" element={<BannerTable />} />
          <Route path="/banner/detail/:id" element={<BannerDetail />} />
          <Route path="/bannerCreate" element={<BannerCreate />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/employee" element={<Employees/>} />
          <Route path="/employee/detail/:id" element={<EmployeeDetail/>} />
        </Routes>
      </div>

    </Router>


  );
}

export default App;
