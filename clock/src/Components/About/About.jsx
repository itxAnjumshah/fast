import React from 'react'
import './About.css'
import watch1 from '../Assets/img-3.png'
import box1 from '../Assets/img-4.png';
import box2 from '../Assets/img-5.png';
import box3 from '../Assets/img-6.png';
import box4 from '../Assets/img-7.png';
import Footer from '../Footer/Footer'

export default function About() {
  return (
    <>
    <div className='Container'>
      <div className='contianer-item1'>
        <h1>02 <br />ABOUT SHOP</h1>
        <hr/>
      </div>

      
      <div className="container-item-2">
        
        <div className="text">
          <h3>UNI WATCH</h3>
          <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
          <h3><span>$</span>100</h3>
          <button>BUY NOW</button>
        </div>
        <img src={watch1} alt="" />
      </div>


<div className="contianer-outer">
  <div className="container-iner">
    <img src={box1} alt="" />
  </div>
  <div className="container-iner">
    <img src={box2} alt="" />
  </div>
  <div className="container-iner">
    <img src={box3} alt="" />
  </div>
  <div className="container-iner">
    <img src={box4} alt="" />
  </div>
</div>


      </div>

      </> 
  )
}
