import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

import './MobileNavItem.css'

const MobileNavItem = ({ isMenuActive, toggleMenu }) => {
  const [menu, setMenu] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/dashboard')) {
      setMenu('dashboard');
    } else if (path.startsWith('/banner')) {
      setMenu('banner');
    } else if (path.startsWith('/gallery')) {
      setMenu('gallery');
    } else if (path.startsWith('/addImages')) {
      setMenu('gallery');
    } else if (path.startsWith('/editgallery')) {
      setMenu('gallery');
    } else if (path.startsWith('/userList')) {
      setMenu('userList');
    } else if (path.startsWith('/partnerList')) {
      setMenu('partnerList');
    } else if (path.startsWith('/addPartner')) {
      setMenu('partnerList');
    } else if (path.startsWith('/editPartner')) {
      setMenu('partnerList');
    } else if (path.startsWith('/project')) {
      setMenu('project');
    } else if (path.startsWith('/editProperty')) {
      setMenu('property');
    } else if (path.startsWith('/addProject')) {
      setMenu('project');
    } else if (path.startsWith('/inquery')) {
      setMenu('inquery');
    } else if (path.startsWith('/contact')) {
      setMenu('inquery');
    } else {
      setMenu('dashboard');
    }
  }, [location.pathname]);

  return (
    <div className={`moobile_nav ${isMenuActive ? 'moobile_navActive' : ''}`}>
      <div className='logo'>
        <img src={logo} alt="logo" />
        <div className={`hamburg_menu ${isMenuActive ? 'menuActive' : ''}`} onClick={toggleMenu}>
          <div className='menu_1'></div>
          <div className='menu_2'></div>
          <div className='menu_3'></div>
        </div>
      </div>
      <div className='admin_box'>
        <div>
          <span>
            {/* Admin SVG */}
          </span>
        </div>
        <div>
          <p>Admin Panel</p>
        </div>
      </div>
      <div className='menu'>
        <nav>
          <ul>
            <Link to="/dashboard">
              <li onClick={() => { setMenu("dashboard"); toggleMenu(); }} className={menu === "dashboard" ? "liActive" : ""}>
                <span>{/* Dashboard SVG */}</span>
                <p>Dashboard</p>
              </li>
            </Link>
            <Link to='/project'>
              <li onClick={() => { setMenu("project"); toggleMenu(); }} className={menu === "project" ? "liActive" : ""}>
                <span>{/* Project SVG */}</span>
                <p>Projects</p>
              </li>
            </Link>
            <Link to="/gallery">
              <li onClick={() => { setMenu("gallery"); toggleMenu(); }} className={menu === "gallery" ? "liActive" : ""}>
                <span>{/* Gallery SVG */}</span>
                <p>Gallery</p>
              </li>
            </Link>
            <Link to="/partnerList">
              <li onClick={() => { setMenu("partnerList"); toggleMenu(); }} className={menu === "partnerList" ? "liActive" : ""}>
                <span>{/* Partners SVG */}</span>
                <p>Partners</p>
              </li>
            </Link>
            <Link to="/inquery">
              <li onClick={() => { setMenu("inquery"); toggleMenu(); }} className={menu === "inquery" ? "liActive" : ""}>
                <span>{/* Inquery SVG */}</span>
                <p>Inquery</p>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <Link to="">
        <div className='admin_box'>
          <div>
            <span>{/* Admin SVG */}</span>
          </div>
          <div>
            <p>Admin Panel</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MobileNavItem;
