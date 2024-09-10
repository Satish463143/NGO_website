import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MobileNav.css'

const MobileNav = () => {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [menu, setMenu] = useState("Home");
    const location = useLocation();

    const toggleNav = () => {
        setIsMenuActive(!isMenuActive);
        setIsSearchActive(!isSearchActive);
        if (!isMenuActive) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    useEffect(()=>{
        const path = location.pathname;
        if(path === '/'){
            setMenu("Home")
        }else if(path === '/project'){
            setMenu("Our Initiative")
        }
    },[location]);
  return (
    <div className='mobile_nav'>      
        <div className="background_nav">
            <div className="nav_grid container">
                <div className="nav_btn" >
                    <div 
                        className={`hamburger-menu ${isMenuActive ? 'active' : ''}`} 
                        id="hamburger-menu" 
                        onClick={toggleNav}
                    >
                        <div className='menu_btn'>
                            <div className="menu-bar1"></div>
                            <div className="menu-bar2"></div>
                            <div className="menu-bar3"></div>
                            <div className="menu-bar4"></div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className='menu_logo'>
                    <Link to=''>
                        <img src="../src/assets/images/logo.png" alt="" />
                    </Link>
                </div>
                <div className='end_menu'>
                <Link>
                    <li  onClick={()=> {toogleNav(); setMenu("");}} className={`donate ${menu === ""?'activeMenu':''}`}>Donate</li>
                </Link> 
                </div>
            </div>
        </div>
        <div className={`overlay ${isMenuActive ? 'overlay-active overlay-slide-right' : 'overlay-slide-left'}`} id="overlay">
            <div className='overlay_bg' onClick={toggleNav}></div>
            <nav>
                <ul >
                    <Link to="/">
                        <li onClick={() => { toggleNav(); setMenu("Home"); }} className={menu === "Home" ? "activeMenu" : ""}>Home</li>
                    </Link>
                    <Link > 
                        <li onClick={() => { toggleNav(); setMenu("About"); }} className={menu === "About" ? "activeMenu" : ""}>Who We Are</li>   
                    </Link>
                    <Link>
                        <li onClick={toggleNav}>What We Do</li>   
                    </Link>
                    <Link>
                        <li onClick={toggleNav}>Our Partners</li>   
                    </Link>
                    <Link>
                        <li onClick={toggleNav}>Our Initiative</li>   
                    </Link>
                    <Link>
                        <li onClick={toggleNav}>Gallery</li>   
                    </Link>
                    <Link>
                        <li onClick={toggleNav}>Contact Us</li>   
                    </Link>
                </ul>
            </nav>
            
        </div>
                
            
    </div>
  )
}

export default MobileNav