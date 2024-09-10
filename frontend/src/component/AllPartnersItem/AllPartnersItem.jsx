import React from 'react'
import './AllPartnersItem.css'

const AllPartnersItem = ({id,name,title,description,logo}) => {
  return (
    <div className='allpartner_grid'>
        <div className="partner_logo">
            <img src={logo} alt="" />
        </div>
        <div className="partner_details">
            <h2>{name}</h2>
            <h1>{title}</h1> 
            <p>{description}</p>
        </div>
    </div>
  )
}

export default AllPartnersItem