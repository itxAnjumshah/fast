import React, { useEffect, useState } from 'react'
import './App.css'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';


const App = () => {
  let herodata = [
    {text1:"Dive into",text2:"What you Love"},
    {text1:"Incluge",text2:"your Passions"},
    {text1:"Give in to",text2:"Your passions"},
      ]
    
      const [heroCount,setHerocount] = useState(0);
    
      const [PlayStatus, setPlaystatus] = useState(false);

useEffect(()=>{
  setInterval(()=>{
setHerocount((count)=>{return count===2?0:count+1})
  }, 3000)
},[])

  return (
    <div>
      <Background PlayStatus={PlayStatus}heroCount={heroCount}/>
      <Navbar/>
      <Hero
      setPlaystatus={setPlaystatus}
      herodata={herodata[heroCount]}
      heroCount={heroCount}
      setHerocount= {setHerocount}
      PlayStatus={PlayStatus}
      />
          </div>
  )
}

export default App
