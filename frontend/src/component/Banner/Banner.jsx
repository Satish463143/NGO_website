import React from 'react'
import './Banner.css'

import nepalvillage from '../../../src/assets/images/nepal-village.jpg';

const Banner = () => {
  return (
    <div className='banner'>
      <img className="desktopImg" src={nepalvillage} alt="" />
      <img className="mobileImg" src={nepalvillage} alt="" />
      <div className='bananere_ovelay'></div>
      <div className='banner_content'>
        <div className='container'>
          <div className='banner_grid'>
            <div className='banner_left'>
              <h2>Together, we can create a brighter future​</h2>
              <div style={{ width: '100px', height: '5px', background: 'var(--pri_color)', margin: '20px 0 0 0' }}></div>
              <h1>Dedicated to transforming lives through initiatives in <span>Environment</span> , <span>Education</span> , & <span>Economy</span> .</h1>
              <a href="">Read More</a>
            </div>
            {/* <div className='banner_right'>
                <h1>Together We Can Make Difference!</h1>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner