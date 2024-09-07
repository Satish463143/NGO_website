import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>      
        <img className="desktopImg" src="../src/assets/images/nepal-village.jpg" alt="" />
        <img className="mobileImg" src="../src/assets/images/nepal-village.jpg" alt="" />
        <div className='bananere_ovelay'></div>
        <div className='banner_content'>
          <div className='container'>
            <div className='banner_grid'>
              <div className='banner_left'>
                <h1>They Need Us​</h1>
                <p>You can use a few enticing words and flaunt your capabilities that will attract future donors and encourage them to donate right away.</p>
                <a href="">Donate Now</a>
              </div>
              <div className='banner_right'>
                <h1>Together We Can Make Difference!</h1>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner