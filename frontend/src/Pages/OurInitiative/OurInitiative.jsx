import React from 'react'
import AllProject from '../../component/AllProject/AllProject'
import BannersItem from '../../component/BannersItem/BannersItem';
import nepalvillage from '../../../src/assets/images/nepal-village.jpg';''
const OurInitiative = () => {
  const title= "Our Initiatives"
  const cont = "Driving Impactful Solutions"
  return (
    <div>
        <BannersItem image= {nepalvillage} title={title}cont={cont}/>
        <AllProject/>
    </div>
  )
}

export default OurInitiative