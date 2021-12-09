import React  from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Home from './pages/Welcome';
import Products from './pages/Products';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Sustainability from './pages/Sustainability';
import Faq from './pages/Faq';
import Signup from './components/Signup';
import Connect from './components/Connect';
import ContactUs from './pages/ContactUs';
import HeaderNav from './components/HeaderNav';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
      <div className='main-grid'>
        <TopBar />
        <HeaderNav />
        <MainContent>
          <Routes>
            <Route path='/' element={<Navigate replace to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/services' element={<Services />} />
            <Route path='/sustainability' element={<Sustainability />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/contact-us' element={<ContactUs />} />
          </Routes>
        </MainContent>
        <Signup />
        <Connect />
        <Footer />
      </div>
  );
}

export default App;
