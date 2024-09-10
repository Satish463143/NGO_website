import React from 'react'
import './BannersItem.css'

const BannersItem = ({title, image}) => {
  return (
    <div className='bannersItem'>
        <div className='bnners_overlay'></div> 
        <img src={image} alt="" />
        <div className="banners_content">
            <h2>{title}</h2>  
            <div style={{ width: '100px', height: '5px', background: 'var(--pri_color)', margin: '20px 0 0 0' }}></div>
        </div> 
    </div>
  )
}

export default BannersItem  