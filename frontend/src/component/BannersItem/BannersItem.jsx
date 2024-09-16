import React from 'react'
import './BannersItem.css'


const BannersItem = ({title, image,cont}) => {
  return (
    <div className='banner'>
      <img className="desktopImg" src={image} alt="" />
      <img className="mobileImg" src={image} alt="" />
      <div className='bananere_ovelay'></div>
      <div className='banner_content'>
        <div className='container'>
          <div className='banner_grid'>
          <div className=' font_size'>
            <h2>Leading, Learning and Greening.​</h2>
            <div style={{ width: '100px', height: '5px', background: 'var(--pri_color)', margin: '20px 0 0 0' }}></div>
            <p>{cont}</p>
            <h1>{title}</h1>            
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannersItem  