import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './TopNav.css'


const TopNav = ({ isMenuActive, toggleMenu }) => {
    

  return (
    <div className='top_nav'>
        {/* <div className='search_btn'>
            <input type="text" name='searchBox' placeholder='Search Here...' />
            <span>
                <svg enable-background="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" id="XMLID_223_"/>
                </svg>
            </span>
        </div> */}
        <div className='welcome_message'>
            <div className={`hamburg_menu ${isMenuActive ? 'menuActive' : ''}`} onClick={toggleMenu}>
                <div className='menu_1'></div>
                <div className='menu_2'></div>
                <div className='menu_3'></div>
            </div>
            <p>Hi, Welcome Back</p>
        </div>
          
        <div className="top_nav_end">
            <ul>
                <Link to="">
                    <li className='message_number'>
                        <span>
                            <svg height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"/>
                            </svg>
                        </span>
                        <div className='messages_num'>
                            <p>1</p>
                        </div>
                    </li>
                </Link>
                <li className='admin_icon'>
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
                </li>
            </ul>
        </div>
    </div>
  )
}

export default TopNav