import React from 'react'
import { useState } from 'react'

export default function Card() {

  const [add, setadd] = useState(0)

  const addvalue=()=>{
    if(add<20){
    setadd (add+1)
    }
  }

  const minuusvalu=()=>{
    if (add > 0) {
      setadd(add - 1);
    }
    
  };
  return (
    <div className='Card'>
      this is  for  card  purpuse
      <button onClick={(addvalue)

      }> click me  to add value {add}</button>
      

<button onClick={minuusvalu}> click me  to minus  the  value  </button>
{add}







    </div>
  )
}
