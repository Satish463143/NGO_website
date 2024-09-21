import React,{useEffect} from 'react'
import {HashRouter as Router, Routes, Route,useLocation} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import ProjectPage from './Pages/ProjectPage/ProjectPage'
import MobileNav from './component/MobileNav/MobileNav'
import GalleryPage from './Pages/GalleryPage/GalleryPage'
import OurInitiative from './Pages/OurInitiative/OurInitiative'
import PartnerPage from './Pages/PartnerPage/PartnerPage'
import Donate from './component/Donate/Donate'
import ContactPage from './Pages/ContactPage/ContactPage'
import WhoWwAre from './Pages/WhoWwAre/WhoWwAre'
import WhatWeDo from './Pages/WhatWeDo/WhatWeDo'
const App = () => {
  const ScrollToSection = () => {
    const { hash, pathname } = useLocation();
  
    useEffect(() => {
      if (hash) {
        const sectionId = hash.replace('#', '');
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView();
        }
      } else if (pathname === '/' && !hash) {
        window.scrollTo({ top: 0 });
      }
      else if (pathname === '/gallery' && !hash) {
        window.scrollTo({ top: 0 });
      }
      else if (pathname === '/ourInitiative' && !hash) {
        window.scrollTo({ top: 0 });
      }
      else if (pathname === '/Our-Partners' && !hash) {
        window.scrollTo({ top: 0 });
      }
      else if (pathname === '/contact' && !hash) {
        window.scrollTo({ top: 0 });
      }
      else if (pathname === '/WhoWEAre' && !hash) {
        window.scrollTo({ top: 0 });
      }
      else if (pathname === '/WhatWeDo' && !hash) {
        window.scrollTo({ top: 0 });
      }
      else if (pathname === '/project' && !hash) {
        window.scrollTo({ top: 0 });
      }
    }, [hash, pathname]);
  
    return null; 
  };
  return (
    <div>
      
      <Navbar/>
      <MobileNav/>   
      <ScrollToSection/>   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project/:id' element={<ProjectPage/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
        <Route path='/ourInitiative' element={<OurInitiative/>}/>
        <Route path='/Our-Partners' element={<PartnerPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/WhoWEAre' element={<WhoWwAre/>}/>
        <Route path='/WhatWeDo' element={<WhatWeDo/>}/>
      </Routes>
      <Donate/>
      <Footer/>      
    </div>
  )
}

export default App