import React from 'react';
import './Watches.css';
import watch from '../Assets/img-1.png';
import watch2 from '../Assets/img-2.png';

export default function Wjatchess() {
  return (
    <>
    <div className='watches'>
      <div className="container-1">
        <div className='container-1-item'>
          <h1>01 <br/> OUR WATCHES</h1>
        </div>
        <div className='container-1-item-2'>
          <hr/>
        </div>
      </div>

      <div className="container-2">
        <img src={watch} alt=""  />
        <div className='container-2-item'>
          <h1>UNI WATCH</h1>
          <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
          <h4><span>$</span>100</h4>
          <button>Buy Now</button>
        </div>
      </div>
    </div>

<div className="uni-watches">
<div className='container-2-item'>
          <h1>UNI WATCH</h1>
          <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
          <h4><span>$</span>100</h4>
          <button>Buy Now</button>
        </div>
        <img src={watch2} alt="" />
</div>






    </>
  );
}
