import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [isMenuActive, setMenuActive] = useState(false)
    const [menu, setMenu] = useState("Home")
    const location = useLocation()

    const toogleNav = () => {
        setMenuActive(!isMenuActive)
    }

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
    },[location]);
  
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar_grid'>
                    <div className='logo_img'>
                    <   Link to="/">
                        <img src="/logo.png" alt="Logo" />
                        </Link>
                    </div>
                    <div className='navs'>
                        <nav>
                            <ul>
                                <Link to="/">
                                    <li onClick={() => { toogleNav(); setMenu("Home"); }} className={`${menu === "Home" ? 'activeMenu' : ''}`} >Home</li>
                                </Link>
                                <Link>
                                    <li onClick={() => { toogleNav(); setMenu(""); }} className={`${menu === "" ? 'activeMenu' : ''}`}>Who We Are</li>
                                </Link>
                                <Link>
                                    <li onClick={() => { toogleNav(); setMenu(""); }} className={`${menu === "" ? 'activeMenu' : ''}`}>What We Do</li>
                                </Link>
                                <Link to="/Our-Partners">
                                    <li onClick={() => { toogleNav(); setMenu("Our Partners"); }} className={`${menu === "Our Partners" ? 'activeMenu' : ''}`}>Our Partners</li>
                                </Link>
                                <Link to="/ourInitiative">
                                    <li onClick={() => { toogleNav(); setMenu("Our Initiative"); }} className={`${menu === "Our Initiative" ? 'activeMenu' : ''}`}>Our Initiative</li>
                                </Link>
                                <Link to="/gallery">
                                    <li onClick={() => { toogleNav(); setMenu("Gallery"); }} className={`${menu === "Gallery" ? 'activeMenu' : ''}`}>Gallery</li>
                                </Link>
                                <Link to="/contact">
                                    <li onClick={() => { toogleNav(); setMenu("ContactUs"); }} className={`${menu === "ContactUs" ? 'activeMenu' : ''}`}>Contact Us</li>
                                </Link>

                            </ul>
                        </nav>
                    </div>
                    <div className='donate_btn'>
                        <Link>
                            <li onClick={() => { toogleNav(); setMenu(""); }} className={`donate ${menu === "" ? 'activeMenu' : ''}`}>Donate</li>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar