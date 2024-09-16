import React from 'react'
import AllPartners from '../../component/AllPartners/AllPartners'
import BannersItem from '../../component/BannersItem/BannersItem'
import nepalvillage from '../../../src/assets/images/nepal-village.jpg';
const PartnerPage = () => {
    const title= "Our Partners"
   const cont = "Collaborating For Greater Imapct"
  return (
    <div>
        <BannersItem image= {nepalvillage} title={title} cont={cont}/>
        <AllPartners/>
    </div>
  )
}

export default PartnerPage