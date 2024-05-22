import React from 'react'
import './Boxes.css'
import project from '../Assets/project-6.jpg'

export default function Boxes({picture,txtbtn,text}) {
  return (
    <div className='box'>
        <img src={picture} alt="" />
      
       <p>{text}</p>
      <button>{txtbtn}</button>
    </div>
  )
}
