import React from 'react'
import './Footer.css'
import { assets} from '../../Assets/frontend_assets/assets'

export default function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
<div className="footer-content-left">
    <img src={assets.logo} alt="" />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus modi, ratione pariatur atque beatae est porro minus debitis rerum iste perferendis laboriosam aliquam omnis! Atque quae repudiandae quaerat ad maiores.</p>
    <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
    </div>
</div>
<div className="footer-content-center">
    <h2>Company</h2>
    <ul>
        <li>Home</li>
        <li>About-us</li>
        <li>Delivery</li>
        <li>privacy policy</li>
    </ul>
</div>
<div className="footer-content-right">
    <h2>GET IN Touch</h2>
    <ul>
        <li>+923128622793</li>
        <li>anjumshah402@gmail.com</li>
    </ul>
</div>
      </div>
      <hr />
      <div className="footer-copyright">
       <p> Copyright 2050 © Tomato.com - ALL Right Reserved.</p>
      </div>
    </div>
  )
}
