import React, { useContext } from 'react'
import './AllPartners.css'
import { StoreContext } from '../../context/StoreContext'
import AllPartnersItem from '../AllPartnersItem/AllPartnersItem'
import { getAllPartners } from '../../api/PartnersApi'

const AllPartners = () => {
  const { data: partnerList, error, loading } = getAllPartners();

  return (
    <div className='container'>
      <div className="allpartners">
        <p>These Are the Heroes with the Passion to Transform Their Communities</p>
        <hr />
      </div>
      {partnerList.map((item, index) => {
        return (
          <AllPartnersItem key={index} id={item.id} logo={item.imagePath} title={item.title} name={item.name} description={item.description} />
        )
      })}

    </div>
  )
}

export default AllPartners