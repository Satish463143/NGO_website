import React from 'react'
import './ShortBanner.css'
import {Link} from 'react-router-dom'

const ShortBanner = () => {
  return (
    <div style={{background:'#3795aa'}}>
    <div className='container'>
        <div className="banner_box">
            <div className='banner_svg'>
                <img src="../src/assets/images/blob-1.svg" alt="" />
                
            </div>
            <div className='ShortBanner_cont'>
                <div className='ShortBanner_img'>
                    <img src="../src/assets/images/photo-of-three-volunteer.png" alt="" />

                </div>
                <div className='ShortBanner_details'>
                    <h1>You Can Be A Part Of Us.​</h1>
                    <p>🌍 Join us in making a difference! At our Organization, we are dedicated to creating positive change in the fields of environment, education, and economy. We believe that together, we can build a brighter future for our communities and our planet. <br /> <br />

                        If you are passionate about making an impact, eager to learn, and excited to contribute your time and skills, we welcome you to join our team as a volunteer. Be a part of something meaningful and help us shape a better tomorrow. Your journey to create change starts here! 🌱💚
                        ​</p>
                    <Link style={{display:'flex',gap:'10px'}}><button>Volunteer Now </button><i class="fa-solid fa-arrow-right-long"></i></Link>
                </div>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default ShortBanner