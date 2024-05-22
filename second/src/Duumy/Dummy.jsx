
import React, { useState } from 'react'

export default function Dummy() {
    let [counter, setCounter] = useState(0);

const addValue = () => {
  setCounter(counter + 3);
};

const removeValue = () => {
  setCounter(counter - 3);
};
  return (
    <div>
      <>
<h1>this is your value: {counter}</h1>
<button onClick={addValue}>Add 3</button>
<button onClick={removeValue}>Remove 3</button>

</>
    </div>
  )
}



