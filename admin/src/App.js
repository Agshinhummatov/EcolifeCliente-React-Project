
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Employees from './pages//Employees'
import EmployeeDetail from './components/admin/employee/EmployeeDetail';

import BannerTable from './pages/Banner/BannerTable';
import BannerDetail from './pages/Banner/BannerDetail';
import BannerCreate from './pages/Banner/BannerCreate';
import BannerUpdate from './pages/Banner/BannerUpdate';
import AdvertisingTable from './pages/advertising/AdvertisingTable';
import Login from './pages/Login';
import Navbar from './components/layout/Navbar';
import AdvertisingDetail from './pages/advertising/AdvertisingDetail';
import AdvertisingCreate from './pages/advertising/AdvertisingCreate';
import AdvertisingUpdate from './pages/advertising/AdvertisingUpdate';
import BenefitTable from './pages/benefit/BenefitTable';
import BenefitDetail from './pages/benefit/BenefitDetail';
import BenefitCreate from './pages/benefit/BenefitCreate';
import BenefitUpdate from './pages/benefit/BenefitUpdate';
import SliderTable from './pages/slider/SliderTable';
import SliderDetail from './pages/slider/SliderDetail';
import SliderCreate from './pages/slider/SliderCreate';
import SliderUpdate from './pages/slider/SliderUpdate';





function App() {
  return (

  
    <Router>
      <Navbar />
      <div className='app'>
       

        <Routes>

          <Route path="/dashborad" element={<Home />} />

          <Route path="/banner" element={<BannerTable />} />
          <Route path="/banner/detail/:id" element={<BannerDetail />} />
          <Route path="/bannerCreate" element={<BannerCreate />} />
          <Route path="/bannerUpdate/:id" element={<BannerUpdate />} />

          <Route path="/advertising" element={<AdvertisingTable/>} />
          <Route path="/advertising/detail/:id" element={<AdvertisingDetail/>} />
          <Route path="/advertisingCreate" element={<AdvertisingCreate />} />
          <Route path="/advertisingUpdate/:id" element={<AdvertisingUpdate />} />


          <Route path="/slider" element={<SliderTable />} />
          <Route path="/slider/detail/:id" element={<SliderDetail/>} />
          <Route path="/sliderCreate" element={<SliderCreate />} />
          <Route path="/sliderUpdate/:id" element={<SliderUpdate />} />

          <Route path="/benefit" element={<BenefitTable />} />
          <Route path="/benefit/detail/:id" element={<BenefitDetail />} />
          <Route path="/benefitCreate" element={<BenefitCreate />} />
          <Route path="/benefitUpdate/:id" element={<BenefitUpdate />} />
          <Route path="/adminLogin" element={<Login/>} />
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
