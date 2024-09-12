import React from 'react'
import { Link } from 'react-router-dom'
import './Donate.css'
import donate_banner from '../../../src/assets/images/banner-03.jpg'
const Donate = () => {
  return (
    <div className='donate_banner'>
        <div className='donate_banner_overlay'></div>
        <img src={donate_banner} alt="" />
        <div className="donate_banners_content">
            <h1 style={{textAlign:'center',marginTop:'0px'}}>Donate Us</h1>
            <div style={{width:'100px', height:'5px', background:'var(--pri_color)',margin:'20px auto 20px auto',}}></div>
            <h2>Your Contribution Drives Environmental Action, Education, and Economic Growth.</h2>
            <p>Join us in our mission to empower communities through sustainable environmental practices, innovative education programs, and economic development initiatives. Every donation helps us create a better future for all.</p>
            <Link>
                <button>Donate</button>
            </Link>
        </div>
    </div>
  )
}

export default Donate