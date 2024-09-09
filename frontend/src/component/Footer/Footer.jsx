import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer_grid'>
          <div className='logo_box'>
            <img src="../src/assets/images/logo.png" alt="" />
            <p>
              You can use a few enticing words and flaunt your capabilities that will attract future donors and encourage them to donate right away.
            </p>
          </div>
          <div className='links'>
            <ul><h3>Quick Links</h3> 
            <Link><li>Home</li></Link>
            <Link><li>What We Do</li></Link>
            <Link><li>Our Partners</li></Link>
            <Link><li>Gallery</li></Link>
            <Link><li>Donate Us</li></Link>
            </ul>            
          </div>
          <div className='links'>
            <ul><h3>Contact Info</h3> 
              <li>702 Browning Homes,Lane No. 2,</li>
              <li>New York</li>
              <li>123-456-7890</li>
              <li>info@example.com</li>
            </ul>            
          </div>
          <div className='links'>
            <ul><h3>Keep in Touch</h3> 
            </ul>  
            <p>Connect with entrepreneurs, build your network, make great business.</p>
            <div className='media_links'>
              <a href=""><i class="fa-brands fa-square-facebook"></i></a>
              <a href=""><i class="fa-brands fa-square-instagram"></i></a>
              <a href=""><i class="fa-solid fa-envelope"></i></a>
              <a href=""><i class="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>          
        </div>
        <div className='copyright'>
          <div>
            <p>
              Copyright © 2024 Hiraya Samaj Nepal -NGO for Economy, Education and Empowerment
            </p>
          </div>
          <div>
            <p>Design and developed by <a href="">Satish</a> & <a href="">Prayusha</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer