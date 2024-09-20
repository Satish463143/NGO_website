import React from 'react'
import './ShortBanner.css'
import {Link} from 'react-router-dom'
import blob from '../../../src/assets/images/blob-1.svg';
import photovolunteer from '../../../src/assets/images/photo-of-three-volunteer.png';

const ShortBanner = () => {
  return (
    <div style={{background:'var(--pri_color)'}}>
        <div className='container'>
                <div className='ShortBanner_cont'>
                    <div className='ShortBanner_img'>
                        <img src={photovolunteer} alt="" />
                    </div>
                    <div className='ShortBanner_details'>
                        <h1>You Can Be A Part Of Us.​</h1>
                        <p>Join us in making a difference! At our Organization, we are dedicated to creating positive change in the fields of environment, education, and economy. We believe that together, we can build a brighter future for our communities and our planet. <br /> <br />

                            If you are passionate about making an impact, eager to learn, and excited to contribute your time and skills, we welcome you to join our team as a volunteer. Be a part of something meaningful and help us shape a better tomorrow. Your journey to create change starts here! 
                        ​</p>
                        <Link to='/contact'><button>Volunteer Now <i class="fa-solid fa-arrow-right-long"></i></button></Link>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ShortBanner