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
                        <Link to=''>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className='end_menu'>

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
                        <Link>
                            <li onClick={() => { toggleNav(); setMenu(""); }} className={`donate ${menu === "" ? 'activeMenu' : ''}`}>Donate</li>
                        </Link>
                    </ul>
                </nav>

            </div>


        </div>
    )
}

export default MobileNav