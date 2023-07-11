
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
import AboutInfoTable from './pages/aboutInfo/AboutInfoTable';
import AboutInfoDetail from './pages/aboutInfo/AboutInfoDetail';
import AboutInfoCreate from './pages/aboutInfo/AboutInfoCreate';
import AboutInfoUpdate from './pages/aboutInfo/AboutInfoUpdate';
import CategoryTable from './pages/category/CategoryTable';
import CategoryDetail from './pages/category/CategoryDetail';
import NotFound404 from './pages/notFound/NotFound404';
import CategoryCreate from './pages/category/CategoryCreate';
import CategoryUpdate from './pages/category/CategoryUpdate';
import BadRequset400 from './pages/notFound/BadRequset400';
import BlogTable from './pages/blog/BlogTable';
import BlogCreate from './pages/blog/BlogCreate';
import BlogDetail from './pages/blog/BlogDetail';
import BlogUpdate from './pages/blog/BlogUpdate';
import ProductTable from './pages/product/ProductTable';
import ProductCreate from './pages/product/ProductCreate';
import ProductUpdate from './pages/product/ProductUpdate';
import ProductDetail from './pages/product/ProductDetail';
import ContactTable from './pages/contact/ContactTable';
import ContactDetail from './pages/contact/ContactDetail';
import Protection from './pages/Protection';





function App() {



  return (

  
    <Router>
      
      <Navbar />
      <div className='app'>
       

        <Routes>

        
          <Route path="/" element={<Login/>} />
          
          <Route element={<Protection />}>
          <Route path="/dashborad" element={<Home />} />
          <Route path="*" element={<NotFound404 />} />
          <Route path="/404" element={<NotFound404 />} />
          <Route path="/400" element={<BadRequset400 />} />

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

          <Route path="/aboutInfo" element={<AboutInfoTable/>} />
          <Route path="/about/detail/:id" element={<AboutInfoDetail/>} />
          <Route path="/aboutCreate" element={<AboutInfoCreate />} />
          <Route path="/aboutUpdate/:id" element={<AboutInfoUpdate />} />


          <Route path="/categoryTable" element={<CategoryTable/>} />
          <Route path="/categoryTable/detail/:id" element={<CategoryDetail/>} />
          <Route path="/categoryCreate" element={<CategoryCreate />} />
          <Route path="/categoryUpdate/:id" element={<CategoryUpdate />} />

          <Route path="/blogTable" element={<BlogTable/>} />
          <Route path="/blogTable/detail/:id" element={<BlogDetail/>} />
          <Route path="/blogCreate" element={<BlogCreate />} />
          <Route path="/blogUpdate/:id" element={<BlogUpdate />} />


          <Route path="/productTable" element={<ProductTable/>} />
          <Route path="/productCreate" element={<ProductCreate />} />
          <Route path="/productUpdate/:id" element={<ProductUpdate />} />
          <Route path="/productTable/detail/:id" element={<ProductDetail/>} />

          <Route path="/contactTable" element={<ContactTable/>} />
          <Route path="/contact/detail/:id" element={<ContactDetail/>} />

          <Route path="/benefit" element={<BenefitTable />} />
          <Route path="/benefit/detail/:id" element={<BenefitDetail />} />
          <Route path="/benefitCreate" element={<BenefitCreate />} />
          <Route path="/benefitUpdate/:id" element={<BenefitUpdate />} />
         
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/employee" element={<Employees/>} />
          <Route path="/employee/detail/:id" element={<EmployeeDetail/>} />

          </Route>
        </Routes>
      </div>

    </Router>


  );
}

export default App;
