import React, { useRef, useState } from 'react'

export default function Input() {
    const [data, setdata] =useState([]);

    const inputRef =useRef(null);
  return (
    <div>
        <input ref={inputRef} type="text" />
        <button onClick={()=>setdata([...data,inputRef.current.value])}>submit</button>
      {data.map((item,index)=>{return <h2 key={index}>{item}</h2>})}
    </div>
  )
}
