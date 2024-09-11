import React from 'react'
import './AllPartnersItem.css'

const AllPartnersItem = ({id,name,title,description,logo}) => {
  return (
    <>
    <div className='allpartner_grid'>
        <div className="partner_logo">
            <img src={logo} alt="" />
        </div>
        <div className="partner_details">
            <h3>{name}</h3>
            <h2><i class="fa-solid fa-minus"></i>{title}</h2> 
            <p>{description}</p>
        </div>
        
    </div>
    <div style={{width:'80%',height:'1px', background:'#000', margin:'auto'}}></div>
    </>
  )
}

export default AllPartnersItem