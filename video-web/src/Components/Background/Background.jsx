import React from 'react'
import './Background.css'
// import video1 from '../../Assets/video1.mp4'
import Video1 from '../../Assets/video1.mp4'
import image1 from "../../Assets/image1.png"
import image2  from '../../Assets/image2.png'
import image3 from '../../Assets/image3.png'

export default function Background({PlayStatus,heroCount}) {
  if (PlayStatus) {
    return(
      <video className='background fade-in' autoPlay  loop muted>
<source src={Video1}  type='Video/mp4'/>

      </video>
    )
  }
else if(heroCount===0)
{
  return <img src={image1} className='background fade-in' alt="" />
}
else if(heroCount===1)
{
  return <img src={image2} className='background fade-in' alt="" />
}
else if(heroCount===2)
{
  return <img src={image3} className='background fade-in' alt="" />
}
}
