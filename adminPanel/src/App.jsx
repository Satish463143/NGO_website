import React, { useState } from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import Navbar from './component/Navbar/Navbar'
import Login from './pages/Login/Login'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import TopNav from './component/TopNav/TopNav'
import './App.css'
import Banner from './pages/Banner/Banner'
import AddImages from './pages/AddImages/AddImages';
import UserList from './pages/UserList/UserList'
import Experts from './pages/Partners/Partners'
import AddPartner from './pages/AddPartner/AddPartner';
import EditExperts from './pages/EditExperts/EditExperts'
import Project from './pages/Project/Project'
import AddProject from './pages/AddProject/AddProject'
import EditProperty from './pages/EditProperty/EditProperty'
import Inquery from './pages/Inquery/Inquery'
import Contact from './pages/Contact/Contact'
import MobileNavItem from './component/MobileNavItem/MobileNavItem'
import Gallery from './pages/Blogs/Gallery'
import ProtectedRoute from '../utils/ProtectedRoute';

const App = () => {
  const location = useLocation();
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div>
      <Routes>
        {/* Login Route - Render outside the body_grid */}
        <Route path='/' element={<Login />} />

        {/* All other routes wrapped with the body_grid layout */}
        <Route
          path='*'
          element={
            <div className='body_grid'>
              {location.pathname !== '/' && <Navbar />}
              <div className='body_box'>
                <TopNav isMenuActive={isMenuActive} toggleMenu={toggleMenu} />
                <MobileNavItem isMenuActive={isMenuActive} toggleMenu={toggleMenu} />
                <Routes>
                  <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                  <Route path='/banner' element={<ProtectedRoute><Banner /></ProtectedRoute>} />
                  <Route path='/gallery' element={<ProtectedRoute><Gallery /></ProtectedRoute>} />
                  <Route path='/addImages' element={<ProtectedRoute><AddImages /></ProtectedRoute>} />
                  <Route path='/userList' element={<ProtectedRoute><UserList /></ProtectedRoute>} />
                  <Route path='/partnerList' element={<ProtectedRoute><Experts /></ProtectedRoute>} />
                  <Route path='/addPartner' element={<ProtectedRoute><AddPartner /></ProtectedRoute>} />
                  <Route path='/editPartner/:id' element={<ProtectedRoute><EditExperts /></ProtectedRoute>} />
                  <Route path='/project' element={<ProtectedRoute><Project /></ProtectedRoute>} />
                  <Route path='/addProject' element={<ProtectedRoute><AddProject /></ProtectedRoute>} />
                  <Route path='/editProperty' element={<ProtectedRoute><EditProperty /></ProtectedRoute>} />
                  <Route path='/inquery' element={<ProtectedRoute><Inquery /></ProtectedRoute>} />
                  <Route path='/contact' element={<ProtectedRoute><Contact /></ProtectedRoute>} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
