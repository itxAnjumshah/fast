import React, { useState } from 'react'
import './Background.css'

export default function Background() {
    const [color,setcolor]=   useState("green")
  return (
    <div style={{background:color }} className='bgoter'>
        <ul>
            <li  onClick={()=>setcolor("green")}    className="green" >Green</li>
            <li onClick={()=>setcolor("red")}    className="red">Red</li>
            <li onClick={()=>setcolor("blue")}    className="blue">Blue</li>
            <li onClick={()=>setcolor("yellow")}    className="yellow">Yellow</li>
            <li onClick={()=>setcolor("pink")}    className="pink">Pink</li>
            <li onClick={()=>setcolor("brown")}    className="brown">brown</li>
            <li  onClick={()=>setcolor("orange")}   className="orange">orange</li>
            <li onClick={()=>setcolor("black")}    className="black"> black</li>
            <li onClick={()=>setcolor("purple")}    className="purple">Purple</li>
            <li onClick={()=>setcolor("white")}    className="white"> White</li>
        </ul>
      
    </div>
  )
}
