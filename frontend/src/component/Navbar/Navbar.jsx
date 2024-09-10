import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    // const [isMenuActive, setMenuActive] = useState(false)
    const [menu, setMenu] = useState("Home")
    const location = useLocation()

    const toogleNav = () => {
        setMenuActive(!isMenuActive)
    }

    useEffect(() => {
        const path = location.pathname;
        if (path === '/') {
            setMenu("Home")
        } else if (path === '/project') {
            setMenu("Our Initiative")
        }
    }, [location]);
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar_grid'>
                    <div className='logo_img'>
                        <img src="/logo.png" alt="Logo" />
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
                                <Link>
                                    <li onClick={() => { toogleNav(); setMenu(""); }} className={`${menu === "" ? 'activeMenu' : ''}`}>Our Partners</li>
                                </Link>
                                <Link to='/project'>
                                    <li onClick={() => { toogleNav(); setMenu(""); }} className={`${menu === "Our Initiative" ? 'activeMenu' : ''}`}>Our Initiative</li>
                                </Link>
                                <Link>
                                    <li onClick={() => { toogleNav(); setMenu(""); }} className={`${menu === "" ? 'activeMenu' : ''}`}>Gallery</li>
                                </Link>
                                <Link>
                                    <li onClick={() => { toogleNav(); setMenu(""); }} className={`${menu === "" ? 'activeMenu' : ''}`}>Contact Us</li>
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