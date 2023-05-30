
import Header from './component/layouts/Header';
import Footer from './component/layouts/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Employee from './pages/Employees';





function App() {

  return (

    <Router>
      

      <div className='app'>
      <Header />
        <Routes>
          
        <Route  path="/" element={<Home/>}/>

        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/employee" element={<Employee/>}/>

        </Routes>

        <Footer />
      </div>

     
    </Router>


  );
}

export default App;
