import React from 'react'
import './Home.css'
import Footer from '../Footer/Footer'
import About from '../About/About'
import Watches from '../Watches/Watches'
import Testimoniols from '../Testimoniols/Testimoniols'
import Contact from '../Contact/Contact'

export default function Home() {
  return (
    <>
    <div className='home' id='home'>
      <div className='title'>
        WATCHS
      </div>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
      <button>Buy Now</button>
    </div>
    <Watches/>
    <About/>
<Testimoniols/>
<Contact/>
    <Footer/>
   </>
  )
}
