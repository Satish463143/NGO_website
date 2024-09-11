import React,{useState,useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'

import './MobileNavItem.css'

const MobileNavItem = ({ isMenuActive, toggleMenu }) => {
    const [menu, setMenu] = useState("Home");
    const location = useLocation();
    // const [menuLeft, setMenuLeft]= useState(false)
    
    useEffect(() => {
      const path = location.pathname;
        if (path.startsWith('/dashboard')) {
        setMenu('dashboard');
      }else if (path.startsWith('/banner')) {
        setMenu('banner');
      }else if (path.startsWith('/blogs')) {
        setMenu('blogs');
      }else if (path.startsWith('/addblogs')) {
        setMenu('blogs');
      
      }else if (path.startsWith('/editblogs')) {
        setMenu('blogs');
      }
      else if (path.startsWith('/userList')) {
        setMenu('userList');
      }
      else if (path.startsWith('/expertList')) {
        setMenu('expertList');
      }
      else if (path.startsWith('/addExpert')) {
        setMenu('expertList');
      }
      else if (path.startsWith('/editExpert')) {
        setMenu('expertList');
      }
      else if (path.startsWith('/property')) {
        setMenu('property');
      }
      else if (path.startsWith('/editProperty')) {
        setMenu('property');
      }
      else if (path.startsWith('/addProperty')) {
        setMenu('property');
      }
      else if (path.startsWith('/inquery')) {
        setMenu('inquery');
      }
      else if (path.startsWith('/contact')) {
        setMenu('inquery');
      }
      else {
        setMenu('dashboard');
      }
    }, [location.pathname]);
    
    return (  
      <div className={`moobile_nav ${isMenuActive ? 'moobile_navActive' : ''} `} >
          <div className='logo'>
            <img src="../src/assets/images/logo.png" alt="" />
            <div className={`hamburg_menu ${isMenuActive ? 'menuActive' : ''}`} onClick={toggleMenu}>
                <div className='menu_1'></div>
                <div className='menu_2'></div>
                <div className='menu_3'></div>
            </div>
          </div>
          <div className='admin_box'>
            <div>
              <span>
                <svg height="24" version="1.1" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                  <g transform="translate(0 -1028.4)"><path d="m12 1039.4c-1.277 0-2.4943 0.2-3.5938 0.7 0.6485 1.3 2.0108 2.3 3.5938 2.3s2.945-1 3.594-2.3c-1.1-0.5-2.317-0.7-3.594-0.7z" fill="#95a5a6"/>
                    <path d="m8.4062 1041.1c-2.8856 1.3-4.9781 4-5.3437 7.3 0 1.1 0.8329 2 1.9375 2h14c1.105 0 1.938-0.9 1.938-2-0.366-3.3-2.459-6-5.344-7.3-0.649 1.3-2.011 2.3-3.594 2.3s-2.9453-1-3.5938-2.3z" fill="#d35400"/>
                    <path d="m8.4062 1040.1c-2.8856 1.3-4.9781 4-5.3437 7.3 0 1.1 0.8329 2 1.9375 2h14c1.105 0 1.938-0.9 1.938-2-0.366-3.3-2.459-6-5.344-7.3-0.649 1.3-2.011 2.3-3.594 2.3s-2.9453-1-3.5938-2.3z" fill="#e67e22"/>
                    <path d="m12 11c-1.147 0-2.2412 0.232-3.25 0.625 0.9405 0.616 2.047 1 3.25 1 1.206 0 2.308-0.381 3.25-1-1.009-0.393-2.103-0.625-3.25-0.625z" fill="#7f8c8d" transform="translate(0 1028.4)"/>
                    <path d="m17 4a5 5 0 1 1 -10 0 5 5 0 1 1 10 0z" fill="#060060" transform="translate(0 1031.4)"/>
                    <path d="m8.4062 1040.1c-0.3172 0.2-0.6094 0.3-0.9062 0.5 0.8153 1.6 2.541 2.8 4.5 2.8s3.685-1.2 4.5-2.8c-0.297-0.2-0.589-0.3-0.906-0.5-0.649 1.3-2.011 2.3-3.594 2.3s-2.9453-1-3.5938-2.3z" fill="#d35400" />
                  </g>
                </svg>
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
                  <li onClick={`() => setMenu("dashboard")} className={menu === "dashboard" ? "liActive" : "" toggleMenu`}>
                    <span>
                      <svg  version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="info"/><g id="icons"><g id="dashboard">
                          <path d="M5,18H3c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2C7,18.9,6.1,18,5,18z"/>
                          <path d="M13,16h-2c-1.1,0-2,0.9-2,2v2c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2v-2C15,16.9,14.1,16,13,16z"/>
                          <path d="M21,12h-2c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2v-6C23,12.9,22.1,12,21,12z"/>
                          <path d="M22,2h-6.6c-0.9,0-1.3,1.1-0.7,1.7l1.9,1.9C12.9,9.8,7.6,13,2,13c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1    c6.7,0,12.9-1.9,17.4-6.6l1.8,1.8c0.6,0.6,1.7,0.2,1.7-0.7V3C23,2.4,22.6,2,22,2z"/>
                        </g></g>
                      </svg>
                    </span>
                    <p>Dashboard</p>
                    </li>
                </Link>
                <Link to='/banner'>
                  <li onClick={`() => setMenu("banner")} className={menu === "banner" ? "liActive" : "" toggleMenu`} >
                    <span>
                      <svg height="25" viewBox="0 0 48 48" width="25" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38 14h-16v12h16v-12zm4-8h-36c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 3.96 4 3.96h36c2.21 0 4-1.76 4-3.96v-28c0-2.21-1.79-4-4-4zm0 32.03h-36v-28.06h36v28.06z"/>
                        <path d="M0 0h48v48h-48z" fill="none"/>
                      </svg>
                    </span>
                    <p>Banner</p>
                  </li>
                </Link>
                <Link to='/property'>
                  <li onClick={`() => setMenu("property")} className={menu === "property" ? "liActive" : "" toggleMenu`}>
                    <span>
                      <svg version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g class="st0" id="grid_system"/><g id="_icons"><g>
                          <path d="M16.3,9h-0.6C15.3,9,15,9.3,15,9.7v0.6c0,0.4,0.3,0.7,0.7,0.7h0.6c0.4,0,0.7-0.3,0.7-0.7V9.7C17,9.3,16.7,9,16.3,9z"/>
                          <path d="M21,19V7.5c0-1.3-0.8-2.4-2-3l-3.8-1.6c-0.7-0.3-1.5-0.2-2.2,0.2c-0.6,0.4-1,1.1-1,1.9v4.3l-6.8,2.3C3.9,12,3,13.2,3,14.6    V19c-0.6,0-1,0.4-1,1s0.4,1,1,1h1h3h3h3h7h1c0.6,0,1-0.4,1-1S21.6,19,21,19z M9,19H8v-1h1V19z M12,19h-1v-2c0-0.6-0.4-1-1-1H7    c-0.6,0-1,0.4-1,1v2H5v-4.4c0-0.5,0.3-1,0.8-1.2l6.2-2.1V19z M19,19h-1v-3c0-0.6-0.4-1-1-1h-1c-0.6,0-1,0.4-1,1v3h-1v-9V5    c0-0.1,0.1-0.2,0.1-0.3c0.1,0,0.2-0.1,0.3,0l3.8,1.6C18.7,6.5,19,7,19,7.5V19z"/>
                        </g></g>
                      </svg>
                    </span>
                      <p>Property</p>
                  </li>
                </Link>
                <Link to="/userList">
                  <li onClick={`() => setMenu("userList")} className={menu === "userList" ? "liActive" : "" toggleMenu`}>
                    <span>
                      <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><title/>
                        <path d="M24,21A10,10,0,1,1,34,11,10,10,0,0,1,24,21ZM24,5a6,6,0,1,0,6,6A6,6,0,0,0,24,5Z"/>
                        <path d="M42,47H6a2,2,0,0,1-2-2V39A16,16,0,0,1,20,23h8A16,16,0,0,1,44,39v6A2,2,0,0,1,42,47ZM8,43H40V39A12,12,0,0,0,28,27H20A12,12,0,0,0,8,39Z"/>
                      </svg>
                    </span>
                    <p>User</p>
                  </li>
                </Link>
                <Link to="/blogs">
                  <li onClick={`() => setMenu("blogs")} className={menu === "blogs" ? "liActive" : "" toggleMenu`}>
                    <span>
                      <svg height="25" version="1.1" viewBox="0 0 96 96" width="25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M59.5 20h-23c-6.056 0-10.624 4.296-10.624 10s4.568 10 10.624 10h23c8.5 0 16.5 10.52 16.5 18.672v1.656c0 8.204-7.864 15.672-16.5 15.672h-23c-8.48 0-16.5-7.82-16.5-16.092v-49.72c0-5.904-4.204-10.188-10-10.188s-10 4.284-10 10.188v49.812c0 0.228 0.060 0.436 0.128 0.64-0.072 0.204-0.128 0.416-0.128 0.64 0 19.792 15.692 34.72 36.5 34.72h23c21.152 0 36.5-14.132 36.5-33.608v-3.172c0-20.892-17.056-39.22-36.5-39.22z" fill="#000000"/>
                      </svg>
                    </span>
                    <p>Blogs</p>
                  </li>
                </Link>
                <Link to="/expertList">
                  <li  onClick={`() => setMenu("expertList")} className={menu === "expertList" ? "liActive" : "" toggleMenu`}>
                    <span>
                      <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="128" cy="120" fill="none" r="40" stroke="#000" stroke-miterlimit="10" stroke-width="16"/>
                        <path d="M63.8,199.4a72,72,0,0,1,128.4,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                        <circle cx="200" cy="56" fill="none" r="16" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                        <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="200" x2="200" y1="40" y2="28"/>
                        <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="186.1" x2="175.8" y1="48" y2="42"/>
                        <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="186.1" x2="175.8" y1="64" y2="70"/>
                        <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="200" x2="200" y1="72" y2="84"/>
                        <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="213.9" x2="224.2" y1="64" y2="70"/>
                        <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="213.9" x2="224.2" y1="48" y2="42"/>
                        <path d="M223.3,116.5A87.7,87.7,0,0,1,224,128a96,96,0,1,1-96-96,87,87,0,0,1,8.9.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                      </svg>
                    </span>
                    <p>Experts</p>
                  </li>
                </Link>
                <Link to="/inquery">
                  <li onClick={`() => setMenu("inquery")} className={menu === "inquery" ? "liActive" : "" toggleMenu`}>
                    <span>
                      <svg enable-background="new 0 0 48 48" height="25px" id="Layer_1" version="1.1" viewBox="0 0 48 48" width="25px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_3"><g><path d="M23.262,30.516c-0.899,0-1.585,0.225-2.056,0.674c-0.471,0.451-0.707,1.115-0.707,1.994    c0,0.848,0.241,1.504,0.723,1.971c0.482,0.466,1.161,0.697,2.04,0.697c0.858,0,1.528-0.237,2.009-0.713    c0.481-0.478,0.723-1.129,0.723-1.955c0-0.857-0.238-1.518-0.715-1.979C24.803,30.745,24.131,30.516,23.262,30.516z" fill="#241F20"/><path d="M29.329,13.703c-1.271-1.036-2.985-1.554-5.141-1.554c-2.616,0-5.092,0.654-7.425,1.962l1.711,3.438    c2.009-1.025,3.799-1.539,5.368-1.539c0.9,0,1.602,0.178,2.104,0.534c0.503,0.355,0.754,0.874,0.754,1.554    c0,0.607-0.176,1.156-0.525,1.648c-0.351,0.492-1.074,1.13-2.174,1.915c-1.141,0.837-1.926,1.627-2.354,2.37    c-0.43,0.742-0.644,1.617-0.644,2.621v1.162h4.159v-0.941c0-0.628,0.134-1.137,0.399-1.523c0.268-0.387,0.902-0.952,1.907-1.695    c1.466-1.046,2.459-1.988,2.982-2.826c0.522-0.838,0.784-1.832,0.784-2.982C31.236,16.12,30.602,14.738,29.329,13.703z" fill="#241F20"/><path d="M24,0C10.745,0,0,10.745,0,24s10.745,24,24,24s24-10.745,24-24S37.255,0,24,0z M24,44    C12.954,44,4,35.046,4,24C4,12.955,12.954,4,24,4s20,8.955,20,20C44,35.046,35.046,44,24,44z" fill="#241F20"/></g></g></svg>
                    </span>
                    <p>Inquery</p>
                  </li>
                </Link>
                
              </ul>
            </nav>
  
          </div>
          <Link to="">
        <div className='admin_box'>
          <div>
            <span>
              <svg height="24" version="1.1" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                <g transform="translate(0 -1028.4)"><path d="m12 1039.4c-1.277 0-2.4943 0.2-3.5938 0.7 0.6485 1.3 2.0108 2.3 3.5938 2.3s2.945-1 3.594-2.3c-1.1-0.5-2.317-0.7-3.594-0.7z" fill="#95a5a6"/>
                  <path d="m8.4062 1041.1c-2.8856 1.3-4.9781 4-5.3437 7.3 0 1.1 0.8329 2 1.9375 2h14c1.105 0 1.938-0.9 1.938-2-0.366-3.3-2.459-6-5.344-7.3-0.649 1.3-2.011 2.3-3.594 2.3s-2.9453-1-3.5938-2.3z" fill="#d35400"/>
                  <path d="m8.4062 1040.1c-2.8856 1.3-4.9781 4-5.3437 7.3 0 1.1 0.8329 2 1.9375 2h14c1.105 0 1.938-0.9 1.938-2-0.366-3.3-2.459-6-5.344-7.3-0.649 1.3-2.011 2.3-3.594 2.3s-2.9453-1-3.5938-2.3z" fill="#e67e22"/>
                  <path d="m12 11c-1.147 0-2.2412 0.232-3.25 0.625 0.9405 0.616 2.047 1 3.25 1 1.206 0 2.308-0.381 3.25-1-1.009-0.393-2.103-0.625-3.25-0.625z" fill="#7f8c8d" transform="translate(0 1028.4)"/>
                  <path d="m17 4a5 5 0 1 1 -10 0 5 5 0 1 1 10 0z" fill="#060060" transform="translate(0 1031.4)"/>
                  <path d="m8.4062 1040.1c-0.3172 0.2-0.6094 0.3-0.9062 0.5 0.8153 1.6 2.541 2.8 4.5 2.8s3.685-1.2 4.5-2.8c-0.297-0.2-0.589-0.3-0.906-0.5-0.649 1.3-2.011 2.3-3.594 2.3s-2.9453-1-3.5938-2.3z" fill="#d35400" />
                </g>
              </svg>
            </span>
          </div>
          <div>
            <p>Log Out</p>
          </div>
        </div>
        </Link>
      </div>
    )
  }

export default MobileNavItem