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
            <h2>Support Us and Change the Course of a Child’s Life Today!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <Link>
                <button>Donate</button>
            </Link>
        </div>
    </div>
  )
}

export default Donate