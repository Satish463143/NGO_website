import React from 'react'
import ContactUs from '../../component/ContactUs/ContactUs'
import BannersItem from '../../component/BannersItem/BannersItem'
import banner04 from '../../../src/assets/images/banner-04.jpg'
const ContactPage = () => {
  const title = "Get In Touch"
  return (
    <div>
      <BannersItem image= {banner04} title={title}/>
      <ContactUs/>
    </div>
  )
}

export default ContactPage