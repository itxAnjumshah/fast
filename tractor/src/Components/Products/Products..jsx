import './Product.css'
import  sudan from '../Assets/img-1.png'
import  mercedes from '../Assets/img-2.png'
import suv from '../Assets/img-3.png'


export default function Products() {
  return (
    <>
    <h1>OUR BEST OFFERS</h1>
   
    <div className='Product'>

      <div className="product-card">
        <img src={sudan} alt="" />
        <h1>TOYOTA CAR</h1>
        <h5>STart per  day $ <sub>4500</sub></h5>
        <button>Book NOw</button>
      </div>
      
      
      <div className="product-card">
        <img src={mercedes} alt="" />
        <h1>TOYOTA CAR</h1>
        <h5>STart per  day $ <sub>4500</sub></h5>
        <button>Book NOw</button>
      </div>

 <div className="product-card">
        <img src={suv} alt="" />
        <h1>TOYOTA CAR</h1>
        <h5>STart per  day $ <sub>4500</sub></h5>
        <button>Book NOw</button>
    </div> 
    <div className="product-card">
        <img src={sudan} alt="" />
        <h1>TOYOTA CAR</h1>
        <h5>STart per  day $ <sub>4500</sub></h5>
        <button>Book NOw</button>
      </div>
      
      
      <div className="product-card">
        <img src={mercedes} alt="" />
        <h1>TOYOTA CAR</h1>
        <h5>STart per  day $ <sub>4500</sub></h5>
        <button>Book NOw</button>
      </div>

 <div className="product-card">
        <img src={suv} alt="" />
        <h1>TOYOTA CAR</h1>
        <h5>STart per  day $ <sub>4500</sub></h5>
        <button>Book NOw</button>
    </div> 
      
    </div>
    
    </>
  )
}
