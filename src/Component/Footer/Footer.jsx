import React from 'react'
import footer_logo from '../../assets/logo.png'
import insta from '../../assets/instagram_icon.png';
import whatsApp from '../../assets/whatsapp_icon.png';
import pinta from '../../assets/pintester_icon.png';
import './Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        
        <div className="footer-social-icons">
          <div className="footer-icon-container">
            <img src={insta} alt="" />
          </div>
          <div className="footer-icon-container">
          <img src={whatsApp} alt="" />
          </div>
          <div className="footer-icon-container">
          <img src={pinta} alt="" />
          </div>
          </div>
          <div className="footer-copyright">
          <hr />
            <p>Copyright @2024 -All Rights Reserve</p>
          </div>
            
       
      
    </div>
  )
}

export default Footer