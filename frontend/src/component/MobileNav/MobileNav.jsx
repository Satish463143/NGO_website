import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MobileNav.css'
import logo from '../../assets/images/logo.png';

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

    useEffect(() => {
        const path = location.pathname;
        if (path === '/') {
            setMenu("Home")
        } else if (path.startsWith('/project/')) {
            setMenu("Our Initiative");
        }
        else if (path.startsWith('/gallery')) {
            setMenu("Gallery");
        }
        else if (path.startsWith('/ourInitiative')) {
            setMenu("Our Initiative");
        }
        else if (path.startsWith('/Our-Partners')) {
            setMenu("Our Partners");
        }
        else if (path.startsWith('/contact')) {
            setMenu("ContactUs");
        }
        else if (path.startsWith('/WhoWEAre')) {
            setMenu("Who We Are");
        }
        else if (path.startsWith('/WhatWeDo')) {
            setMenu("What We Do");
        }
    }, [location]);
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
                        <h3>Hiraya Samaj</h3>
                    </div>
                    <div className='end_menu'>
                        <a href="tel:9801151414">
                            <span>
                                <svg viewBox="0 0 256 256" height="28px" width="28px" xmlns="http://www.w3.org/2000/svg"><rect fill="none" />
                                <path d="M159.4,40A80.1,80.1,0,0,1,216,96.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="17"/>
                                <path d="M151.1,70.9a47.9,47.9,0,0,1,34,34" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="17"/>
                                <path d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="17"/></svg>
                            </span>
                        </a>
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
                        <Link to="/WhoWEAre">
                            <li onClick={() => { toggleNav(); setMenu("Who We Are"); }} className={menu === "Who We Are" ? "activeMenu" : ""}>Who We Are</li>
                        </Link>
                        <Link to="/WhatWeDo">
                            <li onClick={() => { toggleNav(); setMenu("What We Do"); }} className={`${menu === "What We Do" ? 'activeMenu' : ''}`}>What We Do</li>
                        </Link>
                        <Link to="/Our-Partners">
                            <li onClick={() => { toggleNav(); setMenu("Our Partners"); }} className={`${menu === "Our Partners" ? 'activeMenu' : ''}`}>Our Partners</li>
                        </Link>
                        <Link to="/ourInitiative">
                            <li onClick={() => { toggleNav(); setMenu("Our Initiative"); }} className={`${menu === "Our Initiative" ? 'activeMenu' : ''}`}>Our Initiative</li>
                        </Link>
                        <Link to="/gallery">
                            <li onClick={() => { toggleNav(); setMenu("Gallery"); }} className={`${menu === "Gallery" ? 'activeMenu' : ''}`}>Gallery</li>
                        </Link>
                        <Link to="/contact">
                            <li onClick={() => { toggleNav(); setMenu("ContactUs"); }} className={`${menu === "ContactUs" ? 'activeMenu' : ''}`}>Contact Us</li>
                        </Link>
                        <Link >
                            <li onClick={() => { toggleNav(); setMenu("Donate"); }} className={`${menu === "Donate" ? 'activeMenu' : ''}`}>Donate</li>
                        </Link>                        
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MobileNav