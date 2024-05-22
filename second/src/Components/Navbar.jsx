import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [value,setvalue] =useState(0);

  const btnadd=()=>{
    setvalue(value+1);
  }
  const minubtn=()=>{
    setvalue(value-1);
  }
  const multy=()=>{
    setvalue(value*2);
  }
  const divd=()=>{
    setvalue(value/2);
    console.log(Symbol)
  }
  const Symbol= () => {
    if (btnadd) {
      return "+";
    } else if (minubtn) {
      return "-";
    } else if (multy) {
      return "*";
    } else if (divd) {
      return "/";
    }
  };
  

  return (
    <>
    <input type="number" className='usernumer'placeholder='enter first number  '  />
    <input type="number" className='usernumer'placeholder='enter second number ' />
    <div className='symbol'>{Symbol}
    </div>
    <br/>
<br/>
    <div className='btn-click'>

      <button onClick={()=>{btnadd()}}>  add value </button>
      <button onClick={()=>{minubtn()}}>Minus value</button>
      <button   onClick={()=>{multy()}}>  multiply Value</button>
      <button onClick={()=>{divd()}}>divide value</button>
      <br/>
      <h1> your  value  that  you  calculate {value}</h1>
      
    </div>
    </>
  )
}
