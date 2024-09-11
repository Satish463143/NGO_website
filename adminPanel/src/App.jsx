import React,{useState} from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import Navbar from './component/Navbar/Navbar'
import Login from './pages/Login/Login'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import TopNav from './component/TopNav/TopNav'
import './App.css'
import Banner from './pages/Banner/Banner'
import Blogs from './pages/Blogs/Blogs'
import BlogAdd from './pages/BlogAdd/BlogAdd'
import UserList from './pages/UserList/UserList'
import Experts from './pages/Experts/Experts'
import AddExperts from './pages/AddExperts/AddExperts'
import EditExperts from './pages/EditExperts/EditExperts'
import Property from './pages/Property/Property'
import AddProperty from './pages/AddProperty/AddProperty'
import EditProperty from './pages/EditProperty/EditProperty'
import BlogEdit from './pages/BlogEdit/BlogEdit'
import Inquery from './pages/Inquery/Inquery'
import Contact from './pages/Contact/Contact'
import MobileNavItem from './component/MobileNavItem/MobileNavItem'

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
                <TopNav isMenuActive={isMenuActive} toggleMenu={toggleMenu}/>
                <MobileNavItem isMenuActive={isMenuActive} toggleMenu={toggleMenu}/>
                <Routes>
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/banner' element={<Banner />} />
                  <Route path='/blogs' element={<Blogs />} />
                  <Route path='/addblogs' element={<BlogAdd />} />
                  <Route path='/editblogs/:id' element={<BlogEdit />} />
                  <Route path='/userList' element={<UserList />} />
                  <Route path='/expertList' element={<Experts />} />
                  <Route path='/addExpert' element={<AddExperts />} />
                  <Route path='/editExpert/:id' element={<EditExperts />} />
                  <Route path='/property' element={<Property />} />
                  <Route path='/addProperty' element={<AddProperty />} />
                  <Route path='/editProperty' element={<EditProperty />} />
                  <Route path='/inquery' element={<Inquery />} />
                  <Route path='/contact' element={<Contact />} />
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
