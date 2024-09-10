import React from 'react'
import AllProject from '../../component/AllProject/AllProject'
import BannersItem from '../../component/BannersItem/BannersItem';
import nepalvillage from '../../../src/assets/images/nepal-village.jpg';''
const OurInitiative = () => {
  const title= "Our Initiatives"
  return (
    <div>
        <BannersItem image= {nepalvillage} title={title}/>
        <AllProject/>
    </div>
  )
}

export default OurInitiative