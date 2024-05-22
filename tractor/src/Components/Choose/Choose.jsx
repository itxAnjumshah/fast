import './Choose.css'
import tick from '../Assets/icon-1.png'
import pilot from '../Assets/icon-2.png'
import man from '../Assets/icon-3.png'

export default function Choose() {
  return (
    <div className="choose" >
<h1>WHY CHOOSE US</h1>
<div className="choose-pareent">
    
    <div className='children' >
        <img src={tick} alt="" />
        <h3>SAFETY & SECURITY</h3>
        <p>variations of passages of Lorem Ipsum available, but the majority have</p>
    </div>
    <div className='children' >
         <img src={pilot} alt="" />
        <h3>Online Booking</h3>
             <p>variations of passages of Lorem Ipsum available, but the majority have</p> 
        </div>
    <div className='children' >
    <img src={man} alt="" />
        <h3>Best Drivers</h3>
        <p>variations of passages of Lorem Ipsum available, but the majority have</p>
    </div>
    
    
    </div>      
    </div>
  )
}
