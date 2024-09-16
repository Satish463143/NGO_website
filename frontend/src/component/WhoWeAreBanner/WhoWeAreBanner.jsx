import React from 'react'
import nepalvillage from '../../../src/assets/images/nepal-village.jpg';
const WhoWeAreBanner = () => {
  return (
    <div className='banner'>
      <img className="desktopImg" src={nepalvillage} alt="" />
      <img className="mobileImg" src={nepalvillage} alt="" />
      <div className='bananere_ovelay'></div>
      <div className='banner_content'>
        <div className='container'>
          <div className='banner_grid'>
          <div className=' font_size'>
            <h2>Leading, Learning and Greening.​</h2>
            <div style={{ width: '100px', height: '5px', background: 'var(--pri_color)', margin: '20px 0 0 0' }}></div>
            <p>Dedicated to Positive Change</p>
            <h1>Who We Are</h1>            
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAreBanner