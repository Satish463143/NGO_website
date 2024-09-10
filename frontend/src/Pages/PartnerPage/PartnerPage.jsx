import React from 'react'
import AllPartners from '../../component/AllPartners/AllPartners'
import BannersItem from '../../component/BannersItem/BannersItem'
import nepalvillage from '../../../src/assets/images/nepal-village.jpg';
const PartnerPage = () => {
    const title= "Our Partners"
   
  return (
    <div>
        <BannersItem image= {nepalvillage} title={title}/>
        <AllPartners/>
    </div>
  )
}

export default PartnerPage