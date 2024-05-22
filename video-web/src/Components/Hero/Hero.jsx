import React from 'react'
import './Hero.css'
import  arrow from '../../Assets/arrow_btn.png'
import  pause from '../../Assets/pause_icon.png'
import  play from '../../Assets/play_icon.png'



export default function Hero({herodata,setHerocount,heroCount,setPlaystatus,PlayStatus}) {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{herodata.text1}</p>
        <p>{herodata.text2}</p>
      </div>
<div className="hero-explore">
<p>Explore  the  features</p>
<img src={arrow} alt="" />

</div>
<div className="hero-dot-play">
<ul className='hero-dots'>
  <li onClick={()=>setHerocount(0)} className={heroCount===0 ? "hero-dot orange":"hero-dot"}></li>
  <li  onClick={()=>setHerocount(1)} className={heroCount===1 ? "hero-dot orange":"hero-dot"}></li>
  <li  onClick={()=>setHerocount(2)} className={heroCount===2 ? "hero-dot orange":"hero-dot"}></li>
</ul>
<div className="hero-play">
  <img onClick={()=>setPlaystatus(!PlayStatus)} src={PlayStatus ? pause :play } alt="" />
  <p>See the  video </p>
</div>
</div>


    </div>
  )
}
