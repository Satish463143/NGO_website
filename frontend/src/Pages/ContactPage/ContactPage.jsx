import React from 'react'
import ContactUs from '../../component/ContactUs/ContactUs'
import BannersItem from '../../component/BannersItem/BannersItem'
import banner04 from '../../../src/assets/images/banner-04.jpg'
const ContactPage = () => {
  const title = "Get In Touch"
  const cont = "Contact Us "
  return (
    <div>
      <BannersItem image= {banner04} title={title} cont={cont}/>
      <ContactUs/>
    </div>
  )
}

export default ContactPage