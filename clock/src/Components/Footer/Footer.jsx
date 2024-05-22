import React from 'react'
import './Footer.css';
import icon1 from '../Assets/fb-icon.png';
import icon2 from '../Assets/twitter-icon.png';
import icon3 from '../Assets/linkedin-icon.png';
import icon4 from '../Assets/instagram-icon.png';
import icon5 from '../Assets/youtub-icon.png';
import icon6 from '../Assets/map-icon.png';
import icon7 from '../Assets/mail-icon.png';
import icon8 from '../Assets/call-icon.png';


export default function Footer() {
  return (
    <div  className='footer'>
      <div className='page'>Follow Now</div>

      <div className='icon'>
        <img src={icon1} alt="" />
        <img src={icon2} alt="" />
        <img src={icon3} alt="" />
        <img src={icon4} alt="" />
        <img src={icon5} alt="" />
      </div>
      <div className=' footer-ico'>
        <div className='global'>
            <img src={icon6} alt="" />
            <p>LOCATION</p>
        </div>
        <div className='global'>
            <img src={icon7} alt="" />
            <p>anjumshah402@gmail.com</p>
            </div>
        <div className='global'>
            <img src={icon8} alt="" />
            <p> CALL +923128622793</p>
        </div>
      </div>
      <p>2020 All Rights Reserved. Design by Free html Templates Distribution by ThemeWagon</p>
    </div>
  )
}
