import React, { useContext } from 'react'
import './AllPartners.css'
import { StoreContext } from '../../context/StoreContext'
import AllPartnersItem from '../AllPartnersItem/AllPartnersItem'

const AllPartners = () => {
  const {partnerList} = useContext(StoreContext)
  return (
    <div className='container'>
      <div className="allpartners">
        <p>These Are the Heroes with the Passion to Transform Their Communities</p>
        <hr />
      </div>
      {partnerList.map((item,index)=>{
        return(
          <AllPartnersItem key={index} id={item.id} logo={item.logo} title={item.title} name={item.name} description={item.description}/>
        )
      })}
      
    </div>
  )
}

export default AllPartners