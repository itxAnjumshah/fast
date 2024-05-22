import './Nav2.css'
import '@fortawesome/fontawesome-free/css/all.css';



export default function Nav2() {
  return (
    <div className='nav'>
        <div className="item">
            <div className=' list-item'>
            <i class="fa-solid fa-location-dot"></i>
                <h6>Location</h6>
            </div>
            <div className=' list-item'>
            <i class="fa-solid fa-address-book"></i>
                <h6>03128622793</h6>
            </div>
            <div className=' list-item'>
            <i class="fa-solid fa-message"></i>
                <h6>anjumshah402@gmail.com</h6>
            </div>
        </div>
      
    </div>
  )
}
